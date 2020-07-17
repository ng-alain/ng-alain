#!/usr/bin/env bash

set -e

GH=false
DAY=false
for ARG in "$@"; do
  case "$ARG" in
    -gh)
      GH=true
      ;;
    -day)
      DAY=true
      ;;
  esac
done

echo "List:"
ls -al

ROOT_DIR="$(pwd)"
DIST_DIR="$(pwd)/dist"

VERSION=$(node -p "require('./package.json').version")

echo "Start build version: ${VERSION}"

if [[ ${DAY} == true ]]; then
  echo ""
  echo "Download day @delon/* libs"
  echo ""
  bash ./scripts/_ci/delon.sh
fi

echo ""
echo "Generate color less"
echo ""
node ./scripts/color-less.js

echo ""
echo "Generate theme files"
echo ""
node ./scripts/theme.js

echo '===== need mock'
sed -i 's/if (!environment.production)/if (true)/g' ${ROOT_DIR}/src/app/global-config.module.ts
sed -i 's/if (!environment.production)/if (true)/g' ${ROOT_DIR}/src/app/layout/default/default.component.ts

if [[ ${GH} == true ]]; then
  echo "Build angular [github gh-pages]"
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --base-href /ng-alain/
else
  echo "Build angular"
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod
fi

cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

echo "Finished"
