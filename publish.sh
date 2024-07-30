#!/bin/bash

# Increment the version number
echo "Incrementing the version number..."
npm version patch

# Publish the package to npm
echo "Publishing the package to npm..."
npm publish

echo "Publishing completed!"