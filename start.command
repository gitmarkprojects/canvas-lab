#!/bin/zsh
set -e

cd "$(dirname "$0")"

URL="http://127.0.0.1:8787/core/canvas.html?project=default"

(
  for _ in {1..50}; do
    if curl -fsS "http://127.0.0.1:8787/health" >/dev/null 2>&1; then
      open "$URL"
      exit 0
    fi
    sleep 0.2
  done
) &

python3 bridge/server.py
