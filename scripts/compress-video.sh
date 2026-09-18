#!/usr/bin/env bash
# Compress a screen-recording for use as a project preview video.
#
# Requires ffmpeg: https://ffmpeg.org/download.html
#   macOS:   brew install ffmpeg
#   Windows: winget install ffmpeg   (or download a build and add it to PATH)
#   Linux:   sudo apt install ffmpeg
#
# Usage:
#   ./scripts/compress-video.sh input.mp4 output.mp4
#
# What this does:
#   - Scales to 1280px wide (16:9 landscape), keeping aspect ratio
#   - Re-encodes with H.264 at a quality level that stays small but sharp
#   - Strips audio (project previews are muted anyway)
#   - Uses fast-start so the video begins playing before the whole file loads

set -euo pipefail

if [ $# -ne 2 ]; then
  echo "Usage: $0 <input.mp4> <output.mp4>"
  exit 1
fi

INPUT="$1"
OUTPUT="$2"

ffmpeg -i "$INPUT" \
  -vf "scale=1280:-2" \
  -c:v libx264 -crf 28 -preset slow \
  -an \
  -movflags +faststart \
  "$OUTPUT"

echo "Done: $OUTPUT"
ls -lh "$OUTPUT"