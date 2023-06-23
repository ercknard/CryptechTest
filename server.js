// server.js
require('dotenv').config(); // require dotenv

console.log(`Starting ${process.env.NODE_ENV} Server at localhost:${process.env.HOST_PORT || 3000}`)

if (process.env.NODE_ENV !== 'production') {
    const cli = require('next/dist/cli/next-dev');
    cli.nextDev(['-p', process.env.HOST_PORT || 3000]);
} else {
    const cli = require('next/dist/cli/next-start');
    cli.nextStart(['-p', process.env.HOST_PORT || 3000]);
}
