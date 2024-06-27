import request from '@/utils/request'

// 定义一个函数用于上传音频并进行识别
export function audio_recognition(audioFile) {
    // 检查 audioFile 是否是文件对象
    if (!(audioFile instanceof File)) {
      throw new Error('audioFile must be a File object')
    }
    console.log('print console')
    // 创建 FormData 对象
    const formData = new FormData()
  
    // 将音频文件添加到 FormData 对象中
    formData.append('file', audioFile)
  
    // 设置请求的 URL，这里需要替换成实际的音频识别 API 端点
    const url = '/api/web/translation'
  
    // 发送 POST 请求，包含音频文件
    return request.post(url, formData, {
      // 配置 headers，告诉服务器我们发送的是 FormData
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }