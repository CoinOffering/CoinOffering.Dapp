#!/usr/bin/env bash

# use ruffle@2.1.2
sudo npm install -g truffle@2.1.2

truffle init

truffle compile

truffle migrate

truffle build

truffle test

truffle migrate && truffle serve

#
truffle console # works with testrpc !

# truffle compile && truffle migrate && truffle build && truffle serve

google-chrome --incognito http://localhost:8080

# ! before:
truffle build
# run:
rm -rf build/




