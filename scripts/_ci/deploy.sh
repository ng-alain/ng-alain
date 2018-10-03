#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/../..

VERSION=$(node -p "require('./package.json').version")

echo "Start build version: ${VERSION}"

echo ""
echo "Generate color less"
echo ""
node ./scripts/color-less.js

echo ""
echo "Build angular"
echo ""
$(npm bin)/ng build --prod --build-optimizer --base-href /ng-alain/
cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

echo ""
echo "Deploy by gh-pages"
echo ""
$(npm bin)/gh-pages -d dist

echo "Finished"
