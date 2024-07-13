// Main function to convert the input to an rgba() string
function formatColor(color, transparency) {
    let rgb;

    if (color.startsWith('#')) {
        // Remove the hash at the start if it's there
        let hex = color.replace(/^#/, '');

        // Parse the r, g, b values
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        rgb = [r, g, b];
    }
    else {
        // Hex code
        let tempDiv = document.createElement('div');
        tempDiv.style.color = color;
        document.body.appendChild(tempDiv);

        // Get the computed color
        let rgb = window.getComputedStyle(tempDiv).color;

        // Remove the temporary div
        document.body.removeChild(tempDiv);

        // Extract the RGB values
        rgb = rgb.match(/\d+/g).map(Number);
    }

    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${transparency})`;
}
