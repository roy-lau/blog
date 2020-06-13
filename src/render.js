const ejs = require("ejs"),
  path = require("path"),
  fs = require("fs")


module.exports = class Render {

  /**
   * 生成个人信息页面
   * 
   * @param {Object} userInfo 个人信息数据
   */
  g_people(userInfo) {
    const tpl_people = path.join(__dirname, '../tpl/people.ejs')
    const dist_people = path.join(__dirname, '../dist/view/people.html')

    ejs.renderFile(tpl_people, { userInfo }, function (err, html) {
      if (err) console.error(err)
      fs.writeFileSync(dist_people, html)
    });

  }
}