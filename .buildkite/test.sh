#!/bin/bash

set -eo pipefail
echo "--- Set Node Version"
. "$NVM_DIR/nvm.sh"
nvm use 4 | tee -a bk-pipeline.log
echo "--- Test" | tee -a bk-pipeline.log
gulp test | tee -a bk-pipeline.log
if [ $BUILDKITE_PULL_REQUEST = false ]; then
    echo "---Sonar Scanner: Scanning "$BUILDKITE_BRANCH" branch"  | tee bk-pipeline.log
    sonar-scanner | tee bk-pipeline.log
else
    echo "---Sonar Scanner: Scanning pull request on "$BUILDKITE_BRANCH" branch"   | tee bk-pipeline.log
    sonar-scanner -Dsonar.analysis.mode=preview   -Dsonar.github.pullRequest=$BUILDKITE_PULL_REQUEST  -Dsonar.github.oauth=$GITHUB_ACCESS_TOKEN | tee bk-pipeline.log
fi
