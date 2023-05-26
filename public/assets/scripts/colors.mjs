import supportsColor from './node_modules/supports-color/index.js';

// Check if the terminal/console supports color
if (supportsColor) {
  console.log('Color is supported in this environment.');
} else {
  console.log('Color is not supported in this environment.');
}