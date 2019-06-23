#!/usr/bin/env bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
cd ${thisDir}

bash ./delon.sh

echo ""
echo "Running mode: ${MODE}"
echo ""

npm run ${MODE}
