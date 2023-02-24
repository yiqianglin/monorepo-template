#!/usr/bin/env bash

# shellcheck disable=1091
# shellcheck disable=2154
# shellcheck disable=2164

source "$(dirname "$0")"/base.sh

cd "${projectRoot:?unset or null}"
npm run build:pre
