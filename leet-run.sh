#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 确保全局安装typescript npm install -g typescript

# 编译ts
tsc ./$1/$1.ts
# 运行js
node ./$1/$1.js