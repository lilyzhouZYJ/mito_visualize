#!/bin/bash

set -eu

rm -rf dist

export PATH=$PATH:./node_modules/.bin

webpack --config=webpack.config.js

cp ./data/MitoVisualize_key.txt ./dist/
