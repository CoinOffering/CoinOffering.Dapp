#!/usr/bin/env bash

rm -rf build/ && truffle build
git add . && git commit -a && git push --all
cp -r build/* ../coinoffering.github.io/dapp/
cd ../coinoffering.github.io/
git add . && git commit -a && git push --all
cd ../CoinOffering.Dapp
rm -rf build/
