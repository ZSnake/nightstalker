#!/bin/bash

set -eo pipefail
echo "--- Set Node Version"
. "$NVM_DIR/nvm.sh"
nvm current
echo "--- Build" | tee -a bk-pipeline.log
npm install | tee -a bk-pipeline.log
gulp zip-app
buildkite-agent artifact upload "zip/*.zip"
