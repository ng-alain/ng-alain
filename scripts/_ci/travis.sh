#!/usr/bin/env bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
cd ${thisDir}

bash ./delon.sh

if [[ "${MODE}" ]]; then

  echo ""
  echo "Running mode: ${MODE}"
  echo ""

  npm run ${MODE}

elif [[ "${DEPLOY_MODE}" ]]; then

  bash ./deploy.sh -gh

fi
