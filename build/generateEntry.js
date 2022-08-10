const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlTemplate = (template, filename, chunks) => {
  return new HtmlWebpackPlugin({
    template,
    filename,
    chunks,
    hot: true,
    inject: true,
  });
};
/**
 * @author lgf
 * @description 动态得到所有的路口文件,返回对应的模板
 * @return  {Object} { entry, htmlWebpackPlugin }
 */
const generateEntry = () => {
  let entry = Object.assign(
    {},
    {
      index: "./src/index.js",
    }
  );

  let htmlWebpackPlugin = [
    htmlTemplate(`./src/index.html`, `index.html`, ["index"]),
  ];

  const entryFiles = glob.sync("src/pages/*/index.js");
  Object.keys(entryFiles).map((index) => {
    const filePath = entryFiles[index];
    const match = filePath.match(/src\/pages\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = `./${filePath}`;
    htmlWebpackPlugin.push(
      htmlTemplate(
        `./src/pages/${pageName}/index.html`,
        `pages/${pageName}.html`,
        [pageName]
      )
    );
  });
  return { entry, htmlWebpackPlugin };
};

// 实例：entry的对象配置 键(js文件名) 值（路径）对
// entry: {
//   index: path.resolve(__dirname, '../src/js/index.js'),
//   adout: path.resolve(__dirname, '../src/js/adout.js')
// },

module.exports = generateEntry;
