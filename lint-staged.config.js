#!/usr/bin/env node
const path = require('path');

'use strict'

module.exports = {
  "src/**/*.ts":  files => [
    `npm run lint:ts -- ${files.map(filePath => `--files '${path.relative(__dirname, filePath)}'`).join(' ')}`,
    "git add"
  ],
  "src/**/*.less": [
    "npm run lint:style",
    "git add"
  ],
}
