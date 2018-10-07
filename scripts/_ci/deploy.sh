#!/usr/bin/env bash

set -u -e -o pipefail

GH=false
for ARG in "$@"; do
  case "$ARG" in
    -gh)
      GH=true
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
sed -i "s/const MOCK_MODULES = !environment.production/const MOCK_MODULES = true/g" ${ROOT_DIR}/src/app/delon.module.ts
sed -i "s/if (!environment.production)/if (true)/g" ${ROOT_DIR}/src/app/layout/default/default.component.ts

echo ""
echo "Build angular"
echo ""
if [[ ${GH} == true ]]; then
  $(npm bin)/ng build --prod --build-optimizer --base-href /ng-alain/
else
  $(npm bin)/ng build --prod --build-optimizer
fi
cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

if [[ ${GH} == true ]]; then
  if [ -z ${NG_ALAIN_BUILDS_TOKEN} ]; then
    echo "Error: No access token for GitHub could be found." \
        "Please set the environment variable 'NG_ALAIN_BUILDS_TOKEN'."
    exit 1
  fi

  echo ""
  echo "Deploy by gh-pages"
  echo ""
  $(npm bin)/gh-pages -d dist -r "https://${NG_ALAIN_BUILDS_TOKEN}@github.com/ng-alain/ng-alain.git"
fi

echo "Finished"
