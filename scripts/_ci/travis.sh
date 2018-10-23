#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
cd ${thisDir}

if [[ "${MODE}" ]]; then

  echo ""
  echo "Running mode: ${MODE}"
  echo ""

  npm run ${MODE}

elif [[ "${DEPLOY_MODE}" ]]; then

  ./deploy.sh -gh -dr

fi
