#!/bin/bash

# Run the Node.js script to update the API specification
echo "Updating the API specification..."
node updateApiSpec.js

# Generate the TypeScript client using openapi-generator-cli
echo "Generating the TypeScript client..."
openapi-generator-cli generate -i ./newApi.json -g typescript-fetch -o ./src --skip-validate-spec

# Append export statement to src/index.ts
echo "Exporting ApiClient..."
echo "export * from './ApiClient';" >> ./src/index.ts

# run build
echo "Building the TypeScript client..."
npm run build

echo "Client generation completed!"
