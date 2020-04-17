#!/usr/bin/env node

module.exports = {
  "src/**/*.ts": () => [
    `npm run lint:ts`,
    "git add"
  ],
  "src/**/*.html": [
    "./node_modules/.bin/prettier --write",
    "git add"
  ],
  "src/**/*.less": [
    "npm run lint:style",
    "git add"
  ],
}
