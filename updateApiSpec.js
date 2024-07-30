const fs = require('fs');

// Read the OpenAPI specification
const spec = require('./api.json');

// Helper function to recursively update $ref values
function updateRefs(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(updateRefs);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach(key => {
      if (key === '$ref') {
        if (obj[key].includes('DTO')) {
          obj[key] = obj[key].replace(/DTO$/, '');
        }
        if (obj[key].includes('AuthUser')) {
          obj[key] = obj[key].replace('AuthUser', 'User');
        }
      } else {
        updateRefs(obj[key]);
      }
    });
  }
}

// Remove the 'DTO' suffix and rename 'AuthUser' to 'User' in model names
if (spec.components && spec.components.schemas) {
  const schemas = spec.components.schemas;
  const newSchemas = {};

  Object.keys(schemas).forEach(key => {
    let newKey = key;
    if (key.endsWith('DTO')) {
      newKey = key.slice(0, -3);
    }
    if (newKey.includes('AuthUser')) {
      newKey = newKey.replace('AuthUser', 'User');
    }
    newSchemas[newKey] = schemas[key];
  });

  spec.components.schemas = newSchemas;
}

// Update $ref values in the entire spec
updateRefs(spec);

// Remove numeric prefixes from controller tags
if (spec.tags) {
  spec.tags = spec.tags.map(tag => {
    return {
      ...tag,
      name: tag.name.replace(/^\d+\.\s*/, '') // Remove numeric prefix and space
    };
  });
}

// Remove numeric prefixes from operation tags
Object.values(spec.paths).forEach(pathItem => {
  Object.values(pathItem).forEach(operation => {
    if (operation.tags) {
      operation.tags = operation.tags.map(tag => tag.replace(/^\d+\.\s*/, ''));
    }
  });
});

// Write the updated specification to a new file
fs.writeFileSync('./newApi.json', JSON.stringify(spec, null, 2));

console.log('Updated API specification has been saved to newApi.json');