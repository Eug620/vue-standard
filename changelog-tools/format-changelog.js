/*
 * @Author       : Eug
 * @Date         : 2022-04-24 15:09:08
 * @LastEditTime: 2022-09-06 18:08:20
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/changelog-tools/format-changelog.js
 */
const replace = require('replace');

// 去掉指导
const reg_notable = /All.*guidelines./;

// 修改标题
const reg_title = /Changelog/;

replace({
  regex: reg_title,
  replacement: 'vue-test Changelog',
  paths: ['CHANGELOG.md'],
  recursive: true,
});

replace({
  regex: reg_notable,
  replacement: '测试日志生成',
  paths: ['CHANGELOG.md'],
  recursive: true,
});
