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
npm run color-less

echo ""
echo "Generate theme files"
echo ""
npm run theme

echo '===== need mock'
cp -f ${ROOT_DIR}/src/environments/environment.ts ${ROOT_DIR}/src/environments/environment.prod.ts
sed -i 's/production: false/production: true/g' ${ROOT_DIR}/src/environments/environment.prod.ts
sed -i 's/showSettingDrawer = !environment.production;/showSettingDrawer = true;/g' ${ROOT_DIR}/src/app/layout/basic/basic.component.ts

if [[ ${GH} == true ]]; then
  echo "Build angular [github gh-pages]"
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --base-href /ng-alain/
else
  echo "Build angular"
  node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build
fi

cp -f ${DIST_DIR}/ng-alain/browser/index.html ${DIST_DIR}/ng-alain/browser/404.html

echo "Finished"
