/**
 * src/utils/math.js
 * Utility functions for common math operations in creative coding.
 * These functions help map, scale, and transform values.
 */

/**
 * Linear interpolation between two values.
 * @param {number} a - start value
 * @param {number} b - end value
 * @param {number} t - interpolation factor (0 to 1)
 * @returns {number} interpolated value
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Map a value from one range to another.
 * @param {number} value - the value to map
 * @param {number} inMin - minimum of input range
 * @param {number} inMax - maximum of input range
 * @param {number} outMin - minimum of output range
 * @param {number} outMax - maximum of output range
 * @returns {number} mapped value
 */
function map(value, inMin, inMax, outMin, outMax) {
    const normalized = (value - inMin) / (inMax - inMin);
    return lerp(outMin, outMax, normalized);
}

/**
 * Clamp a value between min and max.
 * @param {number} value - the value to clamp
 * @param {number} min - minimum bound
 * @param {number} max - maximum bound
 * @returns {number} clamped value
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Convert degrees to radians.
 * @param {number} degrees - angle in degrees
 * @returns {number} angle in radians
 */
function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees.
 * @param {number} radians - angle in radians
 * @returns {number} angle in degrees
 */
function toDeg(radians) {
    return radians * (180 / Math.PI);
}
