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

  if [[ "${DEPLOY_MODE}" = "pre-publish-release" ]]; then
    ./deploy.sh -gh -dr
  else
    ./deploy.sh -gh
  fi

fi
