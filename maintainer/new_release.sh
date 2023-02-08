#!/bin/bash

set -euo pipefail

usage() {
	cat >&2 <<EOF
Usage: $0 <version name>
Updates the version list to mark <version name> as the new latest.
(This assumes that all of its man pages have already been rendered.)
EOF
}

if [ $# -ne 1 ]; then
	usage
	exit 1
fi

cd "$(dirname "$(realpath "$0")")"/..

# Copy the last release's sidebar config.
LAST_RELEASE=$(sed -E 's/^.*"([^"]+)".*$/\1/; t found; d; :found q' versions.json)
cp versioned_sidebars/version-{"$LAST_RELEASE","$1"}-sidebars.js
cp versioned_sidebars/version-{"$LAST_RELEASE","$1"}-sidebars.json

# Add the release at the top of the version list.
# We can't use `a` because that munches the leading whitespace, and I want to preserve indentation!
sed -Ei "2 { h; s,\"[^\"]+\",\"${1//,/\\,}\",; G }" versions.json
