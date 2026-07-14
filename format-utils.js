// format-utils.js

/**
 * Capitalizes the first letter of a given string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Export the function so other projects can import it.
module.exports = {
    capitalize
};
