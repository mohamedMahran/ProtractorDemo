#!/usr/bin/env node

/**
 * flake is a node script that uses protractor-flake to re-run failed tests. Note
 * that it reruns tests at the _file_ level, so if one test fails, it will rerun all
 * the tests in that file. Still... awesome.
 *
 * usage:
 * `./flake conf.js [other protractor args]`
 */

const protractorFlake = require('protractor-flake');
// skip first two passed args (node and self)
let protractorArgs = process.argv.splice(2);

protractorFlake({
    protractorPath: 'node_modules/.bin/protractor',
    maxAttempts: 3,
    parser: 'multi',
    nodeBin: 'node',
    protractorArgs: protractorArgs
}, (status, output) => {
    process.exit(status);
});