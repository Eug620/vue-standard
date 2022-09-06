# vue-standard

### 规范化提交
```shell
    yarn bootstrap // 初始化装包
```

### 指定模块编写提交信息
```shell
    yarn ct:all  // 选择模块信息 -> 填写任务号
    // 模块信息在.cz-config.js中编辑
```

### 发布版本
```shell
    yarn release:alpha
    yarn release:beta 
    yarn release:major // X.0.0 大版本
    yarn release:minor // 0.X.0 小迭代
    yarn release:patch // 0.0.X  热更版本
```