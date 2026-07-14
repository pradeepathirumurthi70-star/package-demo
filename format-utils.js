function capitalize(text) {
    return text.toUpperCase();
}
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverse(text) {
    return text.split("").reverse().join("");
}

module.exports = {
    capitalize,
    reverse
};
