<template>
  <el-card class="audio-upload-card">
    <div class="audio-upload-container">
      <el-input
        type="textarea"
        :rows="8"
        v-model="recognitionResult"
        placeholder="识别结果将显示在这里"
      >
      </el-input>
      <el-upload
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :file-list="fileList"
        name="audio"
        list-type="text"
        accept="audio/*"
        :auto-upload="false"
        :on-change="handleChange"
        class="button"
      >
        <template #trigger>
          <el-button type="primary">选择音频文件</el-button>
        </template>
        <el-button style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
        <div style="margin-top: 15px;">
          <el-tag>{{ audioName }}</el-tag>
        </div>
      </el-upload>
    </div>
    <audio ref="audioPlayer" controls></audio>
  </el-card>
</template>

<script>
import { audio_recognition } from '@/api/speech_recognition'

export default {
  data() {
    return {
      fileList: [],
      audioFile: null,
      audioName: '',
      recognitionResult: '', // 用于存储识别结果
    };
  },
  methods: {
    beforeUpload(file) {
      const isAudio = file.type.startsWith('audio/');
      if (!isAudio) {
        this.$message.error('请上传音频文件!');
      }
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过 10MB!');
      }
      return isAudio && isLt10M;
    },
    handleChange(file, fileList) {
      this.audioFile = file.raw; // 假设一次只上传一个文件
      this.audioName = file.name;
      this.fileList = [file];
      if (this.audioFile) {
        const audioPlayer = this.$refs.audioPlayer;
        audioPlayer.src = URL.createObjectURL(this.audioFile);
      }
    },
    handleSuccess(response, file, fileList) {
      this.$message.success('音频上传成功');
      this.recognitionResult = response.data.recognitionResult;
    },
    handleError(error, file, fileList) {
      this.$message.error('音频上传失败');
    },
    submitUpload() {
      if (!this.audioFile) {
        this.$message.error('请先选择音频文件');
        return;
      }
      audio_recognition(this.audioFile)
      .then(res => {
        this.recognitionResult = res.data.data['translated_text']
      })
    },
  },
  watch: {
    fileList(newVal) {
      // 监听文件列表变化，这里不需要做任何操作
    },
  },
};
</script>
  
<style scoped>
  .audio-upload-card {
    max-width: 1000px;
    margin: 30px auto;
    width: 800px;
    height: 600px;
  }
  .audio-upload-container {
    padding: 20px;
  }
  .button {
    margin-top: 30px;
  }
</style>