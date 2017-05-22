#!/bin/bash
pwd && cd /d/git_rpo/
var=":clock1::clock2::clock3::zap:定时任务,每天自动上传项目:zap::clock4::clock5::clock6:" `date "+%Y/%m/%d %H:%M:%S"`
echo "-------------------- web_project dir and file 上传中 …………………………………………………"
cd web_project/ && git add . && git commit -m ${var} && git push &&
echo "-------------------- log dir and file 上传中 …………………………………………………"
cd ../log/ && git add . && git commit -m ${var} && git push &&
echo "-------------------- nodejs dir and file 上传中 …………………………………………………"
cd ../nodejs/ && git add . && git commit -m ${var} && git push &&
echo "-------------------- vue dir and file 上传中 …………………………………………………"
cd ../vue/ && git add . && git commit -m ${var} && git push &&
# echo ""-------------------- web_list dir and file 上传中 …………………………………………………"
# cd ../web_list/ && git add . && git commit -m ${var} && git push
# echo "-------------------- web_stu dir and file 上传中 …………………………………………………"
# cd ../web_stu/ && git add . && git commit -m ${var} && git push
# echo ""-------------------- app dir and file 上传中 …………………………………………………"
# cd ../app/ && git add . && git commit -m ${var} && git push

echo "上传完毕！"

# schtasks /create /tn "Automatic git push" /tr D:\git_rpo\gitpush.sh /sc daily /st 18:00:00 /ed 2018/01/01

# 注释：任务名"Automatic git push"，  任务路径： D:\git_rpo\gitpush.sh， 按天执行，每天18点执行， 到2018/01/01日结束！