// Function to start video playback and background sound
function startVideo() {
    // Hide the popup message
    document.getElementById('popup').style.display = 'none';

    // Start playing the video
    document.getElementById('video-player').play();

    // Start playing the background sound
    document.getElementById('background-audio').play();
}

// Track the current state of rotation
var isRotated = false;

// Function to change styles
function changeStyles() {
    var bodyStyle = document.body.style;

    if (isRotated) {
        // Revert styles
        bodyStyle.transform = '';
        bodyStyle.transformOrigin = '';
        bodyStyle.top = '';

        isRotated = false;
    } else {
        // Apply rotated styles
        bodyStyle.transform = 'rotate(-90deg)';
        bodyStyle.transformOrigin = 'left top';
        bodyStyle.top = '100%';

        isRotated = true;
    }
}
