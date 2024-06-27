# translation_web

### 前端效果图

![image-20240601172315673](assets/image-20240601172315673.png)

### 说明

- 接口请求在`src/api/speech_recognition.js`中
- 页面取得数据在`src/views/speech_recognition/index.vue`中。通过`submitUpload调用接口`
- 后端端口为8080，翻译完成返回到前端的字段为`translated_text`





## 如何启动项目

进入项目所在文件夹的`cmd`执行如下命令

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

