const https = require('https'),
fs = require("fs")

for (let n = 19; n >= 2; n--) {
    https.get(`https://raw.githubusercontent.com/roy-lau/blog/dev-hexo/themes/default/source/imgs/random/material-${n}.png`, function(res) {
        let imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function(chunk) {
            imgData += chunk;
        });
        console.log(imgData)
        res.on("end", function() {
            fs.writeFile(__dirname+`/material-${n}.png`, imgData, "binary", function(err) {
                if (err) {
                    console.log("保存失败");
                }
                console.log("保存成功",__dirname+`/material-${n}.png`);
            });
        });
        res.on("error", function(err) {
            console.log("请求失败");
        });
    })
}