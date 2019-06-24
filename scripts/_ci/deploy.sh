#!/usr/bin/env bash

set -e

GH=false
DAY_RELEASE=false
NETLIFY=false
for ARG in "$@"; do
  case "$ARG" in
    -gh)
      GH=true
      ;;
    -dr)
      DAY_RELEASE=true
      ;;
    -netlify)
      NETLIFY=true
      ;;
  esac
done

cd $(dirname $0)/../..

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

if [[ ${DAY_RELEASE} == true ]]; then
  bash ./scripts/_ci/delon.sh
fi

echo ""
echo "Build angular"
echo ""

if [[ ${GH} == true ]]; then
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --base-href /ng-alain/
else
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod
fi
cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

if [[ ${GH} == true ]]; then
  echo ""
  echo "Deploy by gh-pages"
  echo ""
  $(npm bin)/gh-pages -d dist
fi

echo "Finished"
