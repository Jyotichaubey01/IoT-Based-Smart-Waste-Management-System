// Smart Dustbin Monitor - Real-time IoT Dashboard
// Implements all features specified in README.md

// Global variables
let espIP = '192.168.1.100';
let alertThreshold = 80;
let refreshRate = 5;
let refreshInterval;
let totalReadings = 0;
let alertsSent = 0;
let startTime = Date.now();
let levelHistory = [];
let unifiedMap, routingControl;
let dustbinMarker, vehicleMarker;
let isDispatchActive = false;
let connectionStatus = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadSettings();
    initializeMaps();
    initializeAudioOnInteraction();
    startDataRefresh();
    setupEventListeners();
    updateStatistics();
    addNotification('System initialized successfully', 'success');
}

// Initialize audio context on user interaction (required by browsers)
function initializeAudioOnInteraction() {
    let audioContext = null;
    
    const initAudio = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            console.log('Audio context initialized');
            
            // Remove event listeners after initialization
            document.removeEventListener('click', initAudio);
            document.removeEventListener('keydown', initAudio);
            document.removeEventListener('touchstart', initAudio);
        }
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);
    document.addEventListener('touchstart', initAudio);
}

// Load settings from localStorage
function loadSettings() {
    const savedSettings = localStorage.getItem('dustbinSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        espIP = settings.espIP || '192.168.1.100';
        alertThreshold = settings.alertThreshold || 80;
        refreshRate = settings.refreshRate || 5;
        
        // Update UI elements
        document.getElementById('esp-ip').value = espIP;
        document.getElementById('alert-threshold').value = alertThreshold;
        document.getElementById('refresh-rate').value = refreshRate;
        document.getElementById('threshold-display').textContent = alertThreshold + '%';
    }
}

// Initialize Leaflet maps
function initializeMaps() {
    // Unified route map (Smart Route Navigation)
    unifiedMap = L.map('unified-map').setView([28.6139, 77.2090], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(unifiedMap);

    // Add markers to unified map
    dustbinMarker = L.marker([28.6139, 77.2090], {
        icon: L.divIcon({
            html: '<i class="fas fa-trash" style="color: #f44336; font-size: 20px;"></i>',
            iconSize: [20, 20],
            className: 'custom-div-icon'
        })
    }).addTo(unifiedMap).bindPopup('Dustbin Location');

    vehicleMarker = L.marker([28.7041, 77.1025], {
        icon: L.divIcon({
            html: '<i class="fas fa-truck" style="color: #4caf50; font-size: 20px;"></i>',
            iconSize: [20, 20],
            className: 'custom-div-icon'
        })
    }).addTo(unifiedMap).bindPopup('Vehicle Location');
}

// Setup event listeners
function setupEventListeners() {
    // Refresh button
    document.getElementById('refresh-btn').addEventListener('click', function() {
        fetchSensorData();
        addNotification('Data refreshed manually', 'info');
    });

    // Clear notifications
    document.getElementById('clear-btn').addEventListener('click', function() {
        document.getElementById('notifications').innerHTML = '';
        addNotification('Notifications cleared', 'info');
    });

    // Settings button
    document.getElementById('settings-btn').addEventListener('click', function() {
        document.getElementById('settings-modal').style.display = 'block';
    });

    // Route calculation buttons
    document.getElementById('calculate-route').addEventListener('click', calculateRoute);
    document.getElementById('dispatch-vehicle').addEventListener('click', dispatchVehicle);
    document.getElementById('clear-route').addEventListener('click', clearRoute);

    // Map control buttons
    document.getElementById('zoom-in').addEventListener('click', () => unifiedMap.zoomIn());
    document.getElementById('zoom-out').addEventListener('click', () => unifiedMap.zoomOut());
    document.getElementById('center-route').addEventListener('click', centerRoute);
    document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);

    // Dispatch buttons
    document.getElementById('dispatch-btn').addEventListener('click', dispatchVehicle);
    document.getElementById('complete-btn').addEventListener('click', completeDispatch);
    document.getElementById('cancel-btn').addEventListener('click', cancelDispatch);
}

// Start automatic data refresh
function startDataRefresh() {
    fetchSensorData();
    refreshInterval = setInterval(fetchSensorData, refreshRate * 1000);
}

// Fetch sensor data from ESP8266
async function fetchSensorData() {
    try {
        const response = await fetch(`http://${espIP}/data`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        updateDashboard(data);
        updateConnectionStatus(true);
        
        totalReadings++;
        levelHistory.push(data.level);
        if (levelHistory.length > 100) levelHistory.shift(); // Keep last 100 readings
        
        updateStatistics();
        checkAlerts(data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
        updateConnectionStatus(false);
        // Fallback to simulation mode
        simulateData();
    }
}

// Update dashboard with sensor data
function updateDashboard(data) {
    // Update dustbin level visualization
    const levelPercentage = Math.round(data.level);
    document.getElementById('level-percentage').textContent = levelPercentage + '%';
    document.getElementById('level-progress').style.width = levelPercentage + '%';
    document.getElementById('dustbin-fill').style.height = levelPercentage + '%';
    
    // Update sensor data
    document.getElementById('distance-value').textContent = data.distance.toFixed(1) + ' cm';
    document.getElementById('fill-value').textContent = levelPercentage + '%';
    document.getElementById('last-update').textContent = new Date().toLocaleTimeString();
    
    // Update status
    let status = 'Empty';
    let statusClass = 'empty';
    if (levelPercentage >= 80) {
        status = 'Full';
        statusClass = 'full';
    } else if (levelPercentage >= 60) {
        status = 'Moderate';
        statusClass = 'moderate';
    } else if (levelPercentage >= 30) {
        status = 'Low';
        statusClass = 'low';
    }
    
    document.getElementById('level-status').textContent = status;
    document.getElementById('level-status').className = 'status ' + statusClass;
    
    // Update GPS locations if available
    if (data.dustbinLat && data.dustbinLng) {
        updateLocation('dustbin', data.dustbinLat, data.dustbinLng);
        document.getElementById('dustbin-location-input').value = `${data.dustbinLat.toFixed(4)}, ${data.dustbinLng.toFixed(4)}`;
        document.getElementById('dustbin-location').textContent = `${data.dustbinLat.toFixed(4)}, ${data.dustbinLng.toFixed(4)}`;
    }
    
    if (data.vehicleLat && data.vehicleLng) {
        updateLocation('vehicle', data.vehicleLat, data.vehicleLng);
        document.getElementById('vehicle-location-input').value = `${data.vehicleLat.toFixed(4)}, ${data.vehicleLng.toFixed(4)}`;
        document.getElementById('vehicle-location').textContent = `${data.vehicleLat.toFixed(4)}, ${data.vehicleLng.toFixed(4)}`;
    }
}

// Update location markers on maps
function updateLocation(type, lat, lng) {
    if (type === 'dustbin') {
        dustbinMarker.setLatLng([lat, lng]);
    } else if (type === 'vehicle') {
        vehicleMarker.setLatLng([lat, lng]);
    }
}

// Update connection status
function updateConnectionStatus(connected) {
    connectionStatus = connected;
    const statusDot = document.getElementById('connection-status');
    const statusText = document.getElementById('connection-text');
    
    if (connected) {
        statusDot.className = 'status-dot online';
        statusText.textContent = 'Online';
    } else {
        statusDot.className = 'status-dot offline';
        statusText.textContent = 'Offline';
    }
}

// Simulate data when ESP is not available
function simulateData() {
    const simulatedData = {
        distance: Math.random() * 25,
        level: Math.random() * 100,
        timestamp: Date.now(),
        dustbinLat: 28.6139,
        dustbinLng: 77.2090,
        vehicleLat: 28.7041,
        vehicleLng: 77.1025,
        gpsAvailable: true,
        status: 'Normal',
        alert: false
    };
    updateDashboard(simulatedData);
    checkAlerts(simulatedData); // Add this to trigger alerts in simulation mode
}

// Check for alerts
function checkAlerts(data) {
    const currentLevel = data.level;
    const alertIndicator = document.getElementById('alert-indicator');
    
    if (currentLevel >= alertThreshold) {
        alertIndicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Alert: Dustbin Full!</span>';
        alertIndicator.className = 'alert-indicator alert';
        
        if (!data.alert || data.alert === 'false') {
            // Custom threshold alert message with current level
            const currentLevelPercent = Math.round(currentLevel);
            const customAlertMessage = `Alert: Dustbin is ${currentLevelPercent}% full.\nPlease schedule pickup immediately.`;
            addNotification(customAlertMessage, 'warning');
            
            // Play alert sound
            playAlertSound();
            
            alertsSent++;
        }
    } else {
        alertIndicator.innerHTML = '<i class="fas fa-check-circle"></i><span>Normal Operation</span>';
        alertIndicator.className = 'alert-indicator normal';
    }
}

// Update statistics
function updateStatistics() {
    document.getElementById('total-readings').textContent = totalReadings;
    
    if (levelHistory.length > 0) {
        const avgLevel = levelHistory.reduce((a, b) => a + b, 0) / levelHistory.length;
        document.getElementById('avg-level').textContent = Math.round(avgLevel) + '%';
    }
    
    document.getElementById('alerts-count').textContent = alertsSent;
    
    const uptime = Math.floor((Date.now() - startTime) / 3600000);
    document.getElementById('uptime').textContent = uptime + 'h';
}

// Add notification
function addNotification(message, type = 'info') {
    const notifications = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification-item ${type}`;
    
    const icon = type === 'warning' ? 'exclamation-triangle' : 
                 type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'times-circle' : 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    
    notifications.insertBefore(notification, notifications.firstChild);
    
    // Keep only last 10 notifications
    while (notifications.children.length > 10) {
        notifications.removeChild(notifications.lastChild);
    }
    
    // Show popup notification
    showPopupNotification(message, type);
}

// Show popup notification
function showPopupNotification(message, type = 'info') {
    // Create popup container if it doesn't exist
    let popupContainer = document.getElementById('popup-container');
    if (!popupContainer) {
        popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
            pointer-events: none;
        `;
        document.body.appendChild(popupContainer);
    }
    
    // Create popup element
    const popup = document.createElement('div');
    popup.className = `popup-notification ${type}`;
    
    const icon = type === 'warning' ? 'exclamation-triangle' : 
                 type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'times-circle' : 'info-circle';
    
    // Set popup styles
    popup.style.cssText = `
        background: ${type === 'warning' ? '#ff9800' : 
                     type === 'success' ? '#4caf50' : 
                     type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        margin-bottom: 15px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        gap: 15px;
        min-width: 400px;
        max-width: 500px;
        font-size: 16px;
        transform: scale(0);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        pointer-events: auto;
        cursor: pointer;
    `;
    
    popup.innerHTML = `
        <i class="fas fa-${icon}" style="font-size: 24px;"></i>
        <span style="flex: 1; font-size: 16px; font-weight: 500;">${message}</span>
        <i class="fas fa-times" style="font-size: 18px; opacity: 0.8; cursor: pointer;"></i>
    `;
    
    // Add to container
    popupContainer.appendChild(popup);
    
    // Animate in
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
        popup.style.opacity = '1';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removePopup(popup);
    }, 5000);
    
    // Click to remove (on popup body)
    popup.addEventListener('click', (e) => {
        // Don't close if clicking on the close button specifically (handled separately)
        if (!e.target.classList.contains('fa-times')) {
            clearTimeout(autoRemove);
            removePopup(popup);
        }
    });
    
    // Close button specific click
    const closeButton = popup.querySelector('.fa-times');
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent popup click event
            clearTimeout(autoRemove);
            removePopup(popup);
        });
    }
    
    // Limit to 3 popups at once
    while (popupContainer.children.length > 3) {
        removePopup(popupContainer.firstChild);
    }
}

// Remove popup with animation
function removePopup(popup) {
    popup.style.transform = 'scale(0)';
    popup.style.opacity = '0';
    setTimeout(() => {
        if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
        }
    }, 300);
}

// Calculate route between vehicle and dustbin
function calculateRoute() {
    const vehicleLat = parseFloat(document.getElementById('vehicle-lat').value) || 28.7041;
    const vehicleLng = parseFloat(document.getElementById('vehicle-lng').value) || 77.1025;
    const dustbinLat = parseFloat(document.getElementById('dustbin-lat').value) || 28.6139;
    const dustbinLng = parseFloat(document.getElementById('dustbin-lng').value) || 77.2090;
    
    if (routingControl) {
        unifiedMap.removeControl(routingControl);
    }
    
    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(vehicleLat, vehicleLng),
            L.latLng(dustbinLat, dustbinLng)
        ],
        routeWhileDragging: true,
        addWaypoints: false,
        createMarker: function(i, waypoint, n) {
            const marker = L.marker(waypoint.latLng, {
                icon: L.divIcon({
                    html: i === 0 ? 
                        '<i class="fas fa-truck" style="color: #4caf50; font-size: 20px;"></i>' :
                        '<i class="fas fa-trash" style="color: #f44336; font-size: 20px;"></i>',
                    iconSize: [20, 20],
                    className: 'custom-div-icon'
                })
            });
            return marker;
        }
    }).on('routesfound', function(e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        
        // Update route summary
        document.getElementById('total-distance').textContent = (summary.totalDistance / 1000).toFixed(1) + ' km';
        document.getElementById('estimated-time').textContent = Math.round(summary.totalTime / 60) + ' min';
        document.getElementById('average-speed').textContent = Math.round((summary.totalDistance / 1000) / (summary.totalTime / 3600)) + ' km/h';
        
        // Show route details
        document.getElementById('route-details').style.display = 'block';
        document.getElementById('route-progress').style.display = 'block';
        
        addNotification('Route calculated successfully', 'success');
    }).addTo(unifiedMap);
}

// Dispatch vehicle
function dispatchVehicle() {
    if (isDispatchActive) {
        addNotification('Vehicle already dispatched', 'warning');
        return;
    }
    
    isDispatchActive = true;
    document.getElementById('dispatch-btn').disabled = true;
    document.getElementById('complete-btn').disabled = false;
    document.getElementById('cancel-btn').disabled = false;
    document.getElementById('active-dispatch').textContent = 'En Route';
    document.getElementById('dispatch-status').textContent = 'Active';
    document.getElementById('dispatch-status').className = 'status-value active';
    
    // Get coordinates
    const vehicleLat = parseFloat(document.getElementById('vehicle-lat').value) || 28.7041;
    const vehicleLng = parseFloat(document.getElementById('vehicle-lng').value) || 77.1025;
    const dustbinLat = parseFloat(document.getElementById('dustbin-lat').value) || 28.6139;
    const dustbinLng = parseFloat(document.getElementById('dustbin-lng').value) || 77.2090;
    
    // Create Google Maps route URL for driver
    const googleMapsRouteUrl = `https://www.google.com/maps/dir/${vehicleLat},${vehicleLng}/${dustbinLat},${dustbinLng}`;
    
    // Send notification to dashboard
    addNotification('Vehicle dispatched to dustbin location', 'success');
    
    // Send driver notification with route link
    const driverMessage = `New Collection Request! Click here for route: ${googleMapsRouteUrl}`;
    addNotification(`Driver Notification: ${driverMessage}`, 'info');
    
    // Show popup for driver notification
    showDriverNotification(googleMapsRouteUrl, dustbinLat, dustbinLng);
    
    // Start real-time tracking
    startRealTimeTracking(vehicleLat, vehicleLng, dustbinLat, dustbinLng);
    
    // Simulate vehicle movement
    simulateVehicleMovement();
}

// Simulate vehicle movement along route
function simulateVehicleMovement() {
    let progress = 0;
    const interval = setInterval(() => {
        if (!isDispatchActive || progress >= 100) {
            clearInterval(interval);
            return;
        }
        
        progress += 5;
        document.getElementById('progress-percentage').textContent = progress + '%';
        document.getElementById('progress-fill').style.width = progress + '%';
        
        // Update vehicle position (simplified)
        const vehicleLat = parseFloat(document.getElementById('vehicle-lat').value) || 28.7041;
        const vehicleLng = parseFloat(document.getElementById('vehicle-lng').value) || 77.1025;
        const dustbinLat = parseFloat(document.getElementById('dustbin-lat').value) || 28.6139;
        const dustbinLng = parseFloat(document.getElementById('dustbin-lng').value) || 77.2090;
        
        const newLat = vehicleLat + (dustbinLat - vehicleLat) * (progress / 100);
        const newLng = vehicleLng + (dustbinLng - vehicleLng) * (progress / 100);
        
        updateLocation('vehicle', newLat, newLng);
        
    }, 1000);
}

// Complete dispatch
function completeDispatch() {
    isDispatchActive = false;
    document.getElementById('dispatch-btn').disabled = false;
    document.getElementById('complete-btn').disabled = true;
    document.getElementById('cancel-btn').disabled = true;
    document.getElementById('active-dispatch').textContent = 'Completed';
    document.getElementById('dispatch-status').textContent = 'Completed';
    document.getElementById('dispatch-status').className = 'status-value completed';
    document.getElementById('last-dispatch').textContent = new Date().toLocaleTimeString();
    
    addNotification('Vehicle dispatch completed successfully', 'success');
    
    // Reset progress
    document.getElementById('progress-percentage').textContent = '0%';
    document.getElementById('progress-fill').style.width = '0%';
}

// Cancel dispatch
function cancelDispatch() {
    isDispatchActive = false;
    document.getElementById('dispatch-btn').disabled = false;
    document.getElementById('complete-btn').disabled = true;
    document.getElementById('cancel-btn').disabled = true;
    document.getElementById('active-dispatch').textContent = 'Cancelled';
    document.getElementById('dispatch-status').textContent = 'Idle';
    document.getElementById('dispatch-status').className = 'status-value idle';
    
    addNotification('Vehicle dispatch cancelled', 'info');
    
    // Reset progress
    document.getElementById('progress-percentage').textContent = '0%';
    document.getElementById('progress-fill').style.width = '0%';
}

// Clear route
function clearRoute() {
    if (routingControl) {
        unifiedMap.removeControl(routingControl);
        routingControl = null;
    }
    
    document.getElementById('route-details').style.display = 'none';
    document.getElementById('route-progress').style.display = 'none';
    document.getElementById('total-distance').textContent = '-- km';
    document.getElementById('estimated-time').textContent = '-- min';
    document.getElementById('average-speed').textContent = '-- km/h';
    
    addNotification('Route cleared', 'info');
}

// Center route on map
function centerRoute() {
    if (routingControl) {
        unifiedMap.fitBounds(routingControl.getBounds());
    } else {
        unifiedMap.setView([28.6139, 77.2090], 13);
    }
}

// Toggle fullscreen
function toggleFullscreen() {
    const mapContainer = document.querySelector('.map-container-unified');
    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Settings functions
function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function saveSettings() {
    espIP = document.getElementById('esp-ip').value;
    alertThreshold = parseInt(document.getElementById('alert-threshold').value);
    refreshRate = parseInt(document.getElementById('refresh-rate').value);
    
    const settings = {
        espIP: espIP,
        alertThreshold: alertThreshold,
        refreshRate: refreshRate
    };
    
    localStorage.setItem('dustbinSettings', JSON.stringify(settings));
    
    // Update UI
    document.getElementById('threshold-display').textContent = alertThreshold + '%';
    
    // Restart data refresh with new rate
    clearInterval(refreshInterval);
    startDataRefresh();
    
    closeSettings();
    addNotification('Settings saved successfully', 'success');
}

// Test ESP connection
async function testESPConnection() {
    const statusDiv = document.getElementById('esp-status');
    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testing connection...';
    statusDiv.className = 'connection-status-message testing';
    
    try {
        const response = await fetch(`http://${espIP}/status`, { timeout: 5000 });
        if (response.ok) {
            statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> Connection successful!';
            statusDiv.className = 'connection-status-message success';
            addNotification('ESP8266 connection test successful', 'success');
        } else {
            throw new Error('Connection failed');
        }
    } catch (error) {
        statusDiv.innerHTML = '<i class="fas fa-times-circle"></i> Connection failed. Check IP address.';
        statusDiv.className = 'connection-status-message error';
        addNotification('ESP8266 connection test failed', 'error');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSettings();
    } else if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        fetchSensorData();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (unifiedMap) unifiedMap.invalidateSize();
});

// Test alert function - can be called from browser console
function testThresholdAlert() {
    const testLevel = alertThreshold + 5; // 5% above threshold
    const testData = {
        level: testLevel,
        distance: 10,
        timestamp: Date.now(),
        dustbinLat: 28.6139,
        dustbinLng: 77.2090,
        vehicleLat: 28.7041,
        vehicleLng: 77.1025,
        gpsAvailable: true,
        status: 'Alert',
        alert: false
    };
    updateDashboard(testData);
    checkAlerts(testData);
    console.log(`Test alert triggered at ${testLevel}% (threshold: ${alertThreshold}%)`);
}

// Make test function globally available
window.testThresholdAlert = testThresholdAlert;

// Play alert sound for notifications
function playAlertSound() {
    try {
        // Method 1: Try Web Audio API first
        if (window.AudioContext || window.webkitAudioContext) {
            playWebAudioSound();
        } else {
            // Method 2: Fallback to data URI sound
            playDataURISound();
        }
    } catch (error) {
        console.log('Audio error, trying fallback method:', error);
        // Method 3: Final fallback using system beep
        playSystemBeep();
    }
}

// Web Audio API method
function playWebAudioSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Resume context if suspended (required by some browsers)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    console.log('Web Audio sound played');
}

// Data URI sound method
function playDataURISound() {
    // Method 1: Try simple beep sound
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiS2Oy9diMFl2+z5N17k');
        audio.volume = 0.5;
        audio.play().catch(e => {
            console.log('Data URI audio failed, trying alternative:', e);
            playAlternativeSound();
        });
    } catch (error) {
        console.log('Data URI method failed:', error);
        playAlternativeSound();
    }
}

// Alternative sound using oscillator with different approach
function playAlternativeSound() {
    try {
        // Create and play a simple tone using a different method
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 1000;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        
        console.log('Alternative sound method successful');
    } catch (error) {
        console.log('Alternative sound failed:', error);
        playSystemBeep();
    }
}

// System beep fallback
function playSystemBeep() {
    // Create a visual alert as final fallback
    document.body.style.backgroundColor = '#ff0000';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 200);
    
    console.log('System beep fallback used');
}

// Create a ding-dong alert sound
function createDingDongSound(audioContext) {
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // First "ding"
    oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    // Second "dong" (lower pitch)
    oscillator2.frequency.setValueAtTime(600, audioContext.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.4);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.7);
    
    oscillator1.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.3);
    oscillator2.start(audioContext.currentTime + 0.4);
    oscillator2.stop(audioContext.currentTime + 0.7);
}

// Test alert sound function
function testAlertSound() {
    playAlertSound();
    console.log('Alert sound test played!');
}

// Make test sound function globally available
window.testAlertSound = testAlertSound;

// Show driver notification with route link
function showDriverNotification(routeUrl, dustbinLat, dustbinLng) {
    const driverPopup = document.createElement('div');
    driverPopup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10001;
        max-width: 500px;
        text-align: center;
    `;
    
    driverPopup.innerHTML = `
        <h2 style="margin-bottom: 20px; font-size: 24px;">
            <i class="fas fa-truck" style="margin-right: 10px;"></i>
            Driver Notification
        </h2>
        <p style="margin-bottom: 20px; font-size: 16px;">
            New garbage collection request assigned!
        </p>
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Destination:</strong> Dustbin Location</p>
            <p style="margin: 5px 0;"><strong>Coordinates:</strong> ${dustbinLat.toFixed(4)}, ${dustbinLng.toFixed(4)}</p>
        </div>
        <a href="${routeUrl}" target="_blank" style="
            display: inline-block;
            background: #4caf50;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 8px;
            margin: 5px;
            font-weight: bold;
        ">
            <i class="fas fa-map-marked-alt"></i> Open Google Maps Route
        </a>
        <button onclick="this.parentElement.remove()" style="
            display: inline-block;
            background: #f44336;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            margin: 5px;
            cursor: pointer;
            font-weight: bold;
        ">
            <i class="fas fa-times"></i> Close
        </button>
    `;
    
    document.body.appendChild(driverPopup);
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (driverPopup.parentElement) {
            driverPopup.remove();
        }
    }, 10000);
}

// Start real-time vehicle tracking
function startRealTimeTracking(vehicleLat, vehicleLng, dustbinLat, dustbinLng) {
    let trackingInterval;
    let currentLat = vehicleLat;
    let currentLng = vehicleLng;
    let progress = 0;
    
    // Calculate total distance for ETA
    const totalDistance = calculateDistance(vehicleLat, vehicleLng, dustbinLat, dustbinLng);
    const averageSpeed = 30; // km/h
    
    trackingInterval = setInterval(() => {
        if (!isDispatchActive || progress >= 100) {
            clearInterval(trackingInterval);
            return;
        }
        
        progress += 2; // Increment by 2%
        
        // Update vehicle position (simulate movement along route)
        const latDiff = (dustbinLat - vehicleLat) * (progress / 100);
        const lngDiff = (dustbinLng - vehicleLng) * (progress / 100);
        
        currentLat = vehicleLat + latDiff;
        currentLng = vehicleLng + lngDiff;
        
        // Update map marker
        updateLocation('vehicle', currentLat, currentLng);
        
        // Update dashboard tracking info
        updateRealTimeTracking(currentLat, currentLng, dustbinLat, dustbinLng, progress, totalDistance, averageSpeed);
        
    }, 2000); // Update every 2 seconds
}

// Calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
}

// Update real-time tracking information
function updateRealTimeTracking(currentLat, currentLng, destLat, destLng, progress, totalDistance, averageSpeed) {
    const remainingDistance = totalDistance * (1 - progress / 100);
    const eta = (remainingDistance / averageSpeed) * 60; // ETA in minutes
    
    // Update tracking display on dashboard
    const trackingInfo = document.getElementById('real-time-tracking');
    if (!trackingInfo) {
        createTrackingDisplay();
    }
    
    document.getElementById('current-location').textContent = `${currentLat.toFixed(4)}, ${currentLng.toFixed(4)}`;
    document.getElementById('destination').textContent = `${destLat.toFixed(4)}, ${destLng.toFixed(4)}`;
    document.getElementById('progress-percentage').textContent = `${Math.round(progress)}%`;
    document.getElementById('remaining-distance').textContent = `${remainingDistance.toFixed(1)} km`;
    document.getElementById('eta').textContent = `${Math.round(eta)} min`;
    
    // Update progress bar
    document.getElementById('tracking-progress-bar').style.width = `${progress}%`;
}

// Create real-time tracking display
function createTrackingDisplay() {
    const trackingCard = document.createElement('div');
    trackingCard.className = 'card';
    trackingCard.id = 'real-time-tracking';
    trackingCard.innerHTML = `
        <h2><i class="fas fa-satellite-dish"></i> Real-Time Vehicle Tracking</h2>
        <div class="tracking-info">
            <div class="tracking-item">
                <label>Current Location:</label>
                <span id="current-location">--</span>
            </div>
            <div class="tracking-item">
                <label>Destination:</label>
                <span id="destination">--</span>
            </div>
            <div class="tracking-item">
                <label>Progress:</label>
                <span id="progress-percentage">0%</span>
            </div>
            <div class="tracking-item">
                <label>Remaining Distance:</label>
                <span id="remaining-distance">--</span>
            </div>
            <div class="tracking-item">
                <label>ETA:</label>
                <span id="eta">--</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div id="tracking-progress-bar" class="progress-fill" style="width: 0%;"></div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after Fleet Management card
    const fleetCard = document.querySelector('.card:nth-child(3)');
    fleetCard.parentNode.insertBefore(trackingCard, fleetCard.nextSibling);
}
