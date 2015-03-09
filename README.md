# photo-ynu
云南大学图片网站“美丽的云南大学”（photo.ynu.edu.cn）的API


## 安装
使用npm进行安装：

`npm install photo-ynu`

## 示例

### 实例化

`var yphoto = require('photo-ynu');`

### 读取随机文件

```
yphoto.random(function(photoes){
    // do something...
    // photoes[0] --> 第一张图片的URL
}, function(err){
         console.log('Ynu Photo Error: '+ err);
});
```

### 读取最新图片

`yphoto.newest(done, fail);`

### 读取最受欢迎图片

`yphoto.popular(done, fail);`