#!/usr/bin/env bash

# shellcheck disable=1091

source "$(dirname "$0")"/dev/base.sh

# set -x
rootPath="$(cd "$(dirname "$0")" && pwd)/../../"
projectRoot="${rootPath}packages/baike_mini"
cd "$projectRoot" || exit
pnpm install --unsafe-perm
if ! [ -f src/pages/yidian/.git ]; then
    echo "git submodule init"
    git submodule init
    git submodule update
else
    echo "git submodule exist"
fi
cd src/pages/yidian || exit
submodule_checkout_branch=$(git branch | grep -F '*')
submodule_branch=${submodule_checkout_branch#*\*}
echo -e "submodule is on branch:\033[34m$submodule_branch\033[0m"
if [[ $submodule_branch == *HEAD* ]]; then
    echo -e "\033[1;31mPLS checkout to expected branch\033[0m"
fi
pnpm install --unsafe-perm
# set +x
