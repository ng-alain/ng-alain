#!/usr/bin/env bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
cd ${thisDir}

./delon.sh

if [[ "${MODE}" ]]; then

  echo ""
  echo "Running mode: ${MODE}"
  echo ""

  npm run ${MODE}

elif [[ "${DEPLOY_MODE}" ]]; then

  ./deploy.sh -gh

fi
