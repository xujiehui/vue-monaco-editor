<template>
  <div class="container">
    <vue-monaco-editor v-model="code"></vue-monaco-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '// code here'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 400px;
}
</style>
