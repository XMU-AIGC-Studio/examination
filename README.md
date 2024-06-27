# 考核内容

> 使用seamless模型完成语音翻译为文字并部署

地址：[facebook/seamless-m4t-v2-large · Hugging Face](https://huggingface.co/facebook/seamless-m4t-v2-large)

考核项目地址：https://github.com/XMU-AIGC-Studio/examination



### 部署模型

完成模型的部署，测试音频在**audio**文件夹下，请调用**ffmpeg**库编写自己的重采样函数



### 编写网络接口

编写网络接口返回给前端`json格式`数据，接口名为**/api/web/translation**，使用**POST**请求，端口号为**8080**，返回的字段为

```json
{
    "code": 200,
    "data": {
        "translated_text": "填入翻译结果"
    }
}
```



### 运行前端

前端使用编写好的`vue3`，进入**translation-web**文件夹，通过**npm install**安装项目所需依赖，通过**npm run dev**运行前端界面


