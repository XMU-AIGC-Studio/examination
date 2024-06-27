<template>
  <div id="app">
    <SpeechRecognition /> <!-- 直接渲染组件 -->
  </div>
</template>

<script>
import SpeechRecognition from '@/views/speech_recognition/index.vue';

export default {
  components: {
    SpeechRecognition // 使用新的别名注册组件
  }
};
</script>