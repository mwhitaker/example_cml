#!/usr/bin/env node

const { join } = require('path');
const { homedir } = require('os');

const fs = require('fs').promises;
const yargs = require('yargs');

console.log("I ran")