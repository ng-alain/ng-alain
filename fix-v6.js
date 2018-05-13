const fs = require('fs');
const path = require('path');

const filePath = path.resolve(
  __dirname,
  `./node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles.js`,
);

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    return console.log(`请先安装依赖包`);
  }
  const result = data.replace(
    `Object.assign({ sourceMap: cssSourceMap }, lessPathOptions)`,
    `Object.assign({ sourceMap: cssSourceMap, javascriptEnabled: true }, lessPathOptions)`,
  );

  fs.writeFile(filePath, result, 'utf8', function(err) {
    if (err) return console.log(`保存失败`, err);
  });
});

console.log('Finished');
