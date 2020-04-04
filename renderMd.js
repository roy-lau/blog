/**
 * 给 markdown 文件添加 blog 配置
 */
const { fs, path } = require('@vuepress/shared-utils'),
  json2yaml = require('json2yaml'),
  moment = require('moment');

moment.locale('zh-cn')

// TODO install https://www.npmjs.com/package/json2yaml 

fs.copySync('./src', './src-copy')
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
      saveHandled(dir + filename)
      // filesList.push({
      //   dir, // 路径
      //   filename, // 文件名
      //   cont
      // });
    }
  })
}

/**
 * 生成 yml
 * 
 * @param {String} filePath 文件路径
 */
function gYml(filePath) {
  let ymlObj = { title: '', description: '' }

  const stat = fs.statSync(filePath);
  ymlObj.cdate = moment(stat.ctime).format("YYYY MMMM Do, a h:mm:ss") // 创建时间
  ymlObj.mdate = moment(stat.mtime).format("YYYY MMMM Do, a h:mm:ss")  // 修改时间

  const tags = filePath.match(/README|sql-serve|Linux|centOS|docker|Installation-package|install|git|java|mongodb|mysql|nodejs|js|javascript|python|zsh|bash|shell|ssh|config|yum|other|ubunto|nginx|data-base|vsCode|editor|emoji|english-song|git-bash-make|c\+\+|win/ig)
  ymlObj.tags = tags

  return ymlObj
  // console.log(filePath,'--->',tags)
}
/**
 * 处理文件内容
 * 
 * @param {String} filePath 文件路径
 */
function handleCont(filePath) {
  let ymlObj = gYml(filePath)

  const conent = fs.readFileSync(filePath, 'utf-8')

  let contArr = conent.split('\n')
  let contTrim = contArr[0].replace(/\s|\t/g, "")
  ymlObj.title = contTrim.replace(/#/g, '')
  ymlObj.description = contTrim.replace(/#/g, '')
  // console.log(filePath,'--->',ymlObj.title)

  const yaml = json2yaml.stringify(ymlObj) + '---\n'

  contArr[0] = yaml + contTrim.replace(/#(?!#)/, "#\t") + "\n"

  let cont = contArr.join("\n")

  return cont
}
/**
 * 保存处理后的文件
 * 
 * @param {String} filePath 文件路径
 */
function saveHandled(filePath){
  const cont = handleCont(filePath)

  fs.writeFileSync(filePath,cont)
  
}
readFileList('./src/', '.md');