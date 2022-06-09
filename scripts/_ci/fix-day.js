const path = require('path');
const fse = require('fs-extra');

const packagePath = path.join(__dirname, '../../package.json');
const json = fse.readJSONSync(packagePath);
json['dependencies']['ajv'] = '^8.10.0';
json['dependencies']['ajv-formats'] = '^2.1.1';
fse.writeJSONSync(packagePath, json, { spaces: 2 });
