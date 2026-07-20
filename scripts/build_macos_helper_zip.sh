#!/bin/bash
# Builds a distributable zip of the CodexSkin macOS helper (moonlit theme kit)
# into public/ so Vite copies it to dist/ for site download.
#
# Includes only runtime files; excludes dev-only (test/), QA screenshots (docs/),
# and any nested duplicate directories. Preserves .command executable bits.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd -P)"
SRC="$ROOT/tools/codexskin-macos-helper"
OUT="$ROOT/public/codexskin-macos-helper-moonlit-v0.zip"
STAGE="$(mktemp -d)"
PKG_NAME="codexskin-macos-helper"

cleanup() { rm -rf "$STAGE"; }
trap cleanup EXIT

# Assemble the runtime file set into staging
mkdir -p "$STAGE/$PKG_NAME/engine" "$STAGE/$PKG_NAME/theme"

cp "$SRC"/*.command "$STAGE/$PKG_NAME/"
cp "$SRC"/engine/common.sh "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/engine/install.sh "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/engine/apply.sh "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/engine/verify.sh "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/engine/restore.sh "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/engine/cdp.mjs "$STAGE/$PKG_NAME/engine/"
cp "$SRC"/theme/theme.json "$STAGE/$PKG_NAME/theme/"
cp "$SRC"/theme/background.jpg "$STAGE/$PKG_NAME/theme/"
cp "$SRC"/theme/codexskin.css "$STAGE/$PKG_NAME/theme/"
cp "$SRC"/theme/renderer-inject.js "$STAGE/$PKG_NAME/theme/"
cp "$SRC"/README.md "$STAGE/$PKG_NAME/"
cp "$SRC"/NOTICE.md "$STAGE/$PKG_NAME/"
cp "$SRC"/THIRD_PARTY_NOTICES.md "$STAGE/$PKG_NAME/"

# Ensure .command files are executable in the zip
chmod +x "$STAGE/$PKG_NAME"/*.command

# Create the zip
( cd "$STAGE" && zip -r -X "$OUT" "$PKG_NAME" > /dev/null )

# Report
ZIP_SIZE=$(du -h "$OUT" | cut -f1)
echo "Built: $OUT ($ZIP_SIZE)"
echo "Files packaged:"
( cd "$STAGE" && find "$PKG_NAME" -type f | sort )
