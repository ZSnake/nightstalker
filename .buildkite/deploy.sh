#!/bin/bash

set -eo pipefail
echo "--- Deploy to $BUILDKITE_BRANCH"
gulp clean-zip
buildkite-agent artifact download "*.zip" zip/
gulp deploy | tee -a bk-pipeline.log
