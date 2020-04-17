#!/usr/bin/env bash

set -e

echo "List:"
ls -al

ROOT_DIR="$(pwd)"
DIST_DIR="$(pwd)/dist"

VERSION=$(node -p "require('./package.json').version")

echo "Start build version: ${VERSION}"

echo ""
echo "Generate color less"
echo ""
node ./scripts/color-less.js

echo '===== need mock'
sed -i 's/const MOCK_MODULES = !environment.production/const MOCK_MODULES = true/g' ${ROOT_DIR}/src/app/delon.module.ts
sed -i 's/if (!environment.production)/if (true)/g' ${ROOT_DIR}/src/app/layout/default/default.component.ts

bash ./scripts/_ci/delon.sh

echo ""
echo "Build angular"
echo ""

node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod

cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

echo "Finished"
