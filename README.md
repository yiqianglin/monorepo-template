# monorepo

> 生态大仓

## 项目初始化

```$xslt
 1. git clone大仓
 git clone xxxxxxxxxxxxxxxx
 npx husky install

 2. 安装大仓依赖
 cd baike-mono
 pnpm install;

 3. 执行医典packages的安装依赖脚本
 tnpm run XXXX:install

 4. 本地开发（此处脚本遵循[项目package：行为：环境]）
 tnpm run XXXX:dev:test
 windows不能执行sh脚本，可以直接到packages/XXXXXX目录下执行npm run dev:test

```

## 标准化提交

```$xslt
 1. 安装完依赖后且代码开发完毕后
 git add '需要提交的文件';

 2. 使用git cz提交
 cz

 3. 按照commitlint标准选择提交的类型，修改的范围，以及短描述；长描述选填；

 ps: 如果使用第三方的客户端例如soruceTree，GitKraken，最好是设置一下commit的模板；
```
