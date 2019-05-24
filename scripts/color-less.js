const fs = require('fs');
const path = require('path');
const {
  generateTheme
} = require('antd-theme-generator');

const root = path.resolve(__dirname, '../');
const tmpVarFilePath = path.join(root, 'scripts/var.less');
const options = {
  stylesDir: path.join(root, './src'),
  antdStylesDir: path.join(root, './node_modules/ng-zorro-antd'),
  varFile: path.join(root, './scripts/var.less'),
  mainLessFile: path.join(root, './src/styles.less'),
  themeVariables: ['@primary-color'],
  outputFilePath: path.join(root, './src/assets/alain-default.less'),
};

function genVarFile() {
  const ALLVAR = `
  @import '~@delon/theme/styles/default';
  @import '~@delon/theme/styles/layout/default/variable';
  @import '~@delon/theme/styles/layout/fullscreen/variable';
  @import '../src/styles/theme.less';
  `;

  fs.writeFileSync(tmpVarFilePath, ALLVAR);
}

function removeVarFile() {
  fs.unlinkSync(tmpVarFilePath);
}

genVarFile();
generateTheme(options)
  .then(() => {
    removeVarFile();
    console.log('Theme generated successfully');
  })
  .catch(error => {
    removeVarFile();
    console.log('Error', error);
  });
