#!/bin/bash

set -e

cd $(dirname $0)/../..

./scripts/_ci/delon.sh

if [[ "${MODE}" ]]; then

  echo ""
  echo "Running mode: ${MODE}"
  echo ""

  npm run ${MODE}

elif [[ "${DEPLOY_MODE}" ]]; then

  ./scripts/_ci/deploy.sh -gh

fi
