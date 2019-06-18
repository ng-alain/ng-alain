#!/usr/bin/env bash

set -e

cd $(dirname $0)/../..

# down load @delon
echo "Download latest @delon version"
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/@delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p "require('./node_modules/ng-alain/package.json').version")
echo "Using ng-alain version: ${NG_ALAIN_VERSION}"
