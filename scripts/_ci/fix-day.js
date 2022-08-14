const path = require('path');
const fs = require('fs');


const packagePath = path.join(__dirname, '../../package.json');
const json = JSON.parse(fs.readFileSync(packagePath).toString('utf8'));
json['dependencies']['ajv'] = '^8.10.0';
json['dependencies']['ajv-formats'] = '^2.1.1';
fs.writeFileSync(packagePath, JSON.stringify(json, null, 2));
