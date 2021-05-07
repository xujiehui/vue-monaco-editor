<template>
  <div id="app">
    <main class="main">
      <div class="wrapper">
        <p class="title">vue-monaco-editor</p>
        <p class="description">
          Monaco Editor Vue Component
        </p>
        <div class="package-info">
          <a
            href="https://www.npmjs.com/package/@xxyy/vue-monaco-editor"
            class="button"
            target="_blank"
          >
            <img src="https://img.shields.io/npm/v/@xxyy/vue-monaco-editor" />
          </a>
          <a
            class="github-button button"
            href="https://github.com/xujiehui/vue-monaco-editor"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star xujiehui/vue-monaco-editor on GitHub"
            >Star</a
          >
        </div>
        <div class="buttons-wrapper">
          <button class="button" @click="showGetStarted = !showGetStarted">
            Get Started
          </button>
          <a
            class="button"
            href="https://github.com/xujiehui/vue-monaco-editor"
            target="_blank"
            >Documentation</a
          >
          <a
            class="button"
            href="https://github.com/xujiehui/vue-monaco-editor/issues"
            target="_blank"
            >Report an issue</a
          >
        </div>
      </div>
    </main>
    <div class="content">
      <get-started v-if="showGetStarted"></get-started>
      <template v-else>
        <example />
      </template>
    </div>
  </div>
</template>

<script>
import Example from './components/example'
import GetStarted from './components/get-started'

export default {
  components: {
    Example,
    GetStarted
  },
  data() {
    return {
      showGetStarted: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/colors.scss';
.main {
  position: relative;
  height: 300px;
  background-color: $primaryColor;
  padding: 10px;
  color: white;
  .wrapper {
    margin: 40px auto;
    p {
      text-align: center;
    }
    .description {
      margin-top: 15px;
      font-size: 20px;
    }
    .title {
      font-size: 33px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
}
</style>
