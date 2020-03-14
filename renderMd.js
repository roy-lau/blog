/**
 * 给 markdown 文件添加 blog 配置
 */
const { fs, path } = require('@vuepress/shared-utils')

let filesList = [];
/**
 * 递归读取文件列表
 * 
 * @param {String} dir 要读取的文件路径
 * @param {String} ext 文件后缀
 */
function readFileList(dir, ext) {
  let files = fs.readdirSync(dir);
  files.forEach(function (filename, index) {
    let stat = fs.statSync(dir + filename);

    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(dir + filename + "/", ext)
    } else if (path.extname(filename) == ext) {
      const conent = fs.readFileSync(dir + filename, 'utf-8')

      let contArr = conent.split('\n')

      contArr[0] = contArr[0].replace(/\s|\t/g, "") + "\n"
      contArr.join("\n")

      filesList.push({
        dir, // 路径
        filename, // 文件名
        cont
      });
    }

  })

}

readFileList('./src/', '.md');
console.log(filesList);