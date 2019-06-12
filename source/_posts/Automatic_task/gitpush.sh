#!/bin/bash
pwd && cd /d/git_rpo/
var=":clock1::zap:定时任务,每天自动上传项目:zap:"
Date=`date "+%Y/%m/%d-%H:%M:%S"`	# 获取当前时间赋给Date
total="${var}""---""${Date}"	# 变量汇总
echo -e "\e[1;28m -------------------- web_project dir and file 上传中 ……………………………………………\e[0m"
cd web_project/ && git add . && git commit -m "${total}" && git push &&
echo -e "\e[1;29m -------------------- log dir and file 上传中 …………………………………………………\e[0m"
cd ../log/ && git add . && git commit -m ${total} && git push &&
echo -e "\e[1;31m -------------------- nodejs dir and file 上传中 …………………………………………………\e[0m"
cd ../nodejs/ && git add . && git commit -m ${total} && git push &&
echo -e "\e[1;32m -------------------- vue dir and file 上传中 …………………………………………………\e[0m"
cd ../vue/ && git add . && git commit -m ${total} && git push &&
echo -e "\e[1;33m -------------------- web_list dir and file 上传中 …………………………………………………\e[0m"
cd ../web_list/ && git add . && git commit -m ${total} && git push
echo -e "\e[1;34m -------------------- web_stu dir and file 上传中 …………………………………………………\e[0m"
cd ../web_stu/ && git add . && git commit -m ${total} && git push
echo -e "\e[1;35m -------------------- vue dir and file 上传中 …………………………………………………\e[0m"
cd ../vue/ && git add . && git commit -m ${total} && git push



echo -e "\e[1;36m 传完毕！\e[0m"

# schtasks /create /tn "Automatic git push" /tr D:\git_rpo\gitpush.sh /sc daily /st 18:00:00 /ed 2018/01/01

# 注释：任务名"Automatic git push"，  任务路径： D:\git_rpo\gitpush.sh， 按天执行，每天18点执行， 到2018/01/01日结束！