<template>
  <div>
    <h2>Installation</h2>
    <prism
      language="bash"
      class="prism"
      code="npm install @xxyy/vue-monaco-editor"
    />
    <p>or</p>
    <prism
      language="bash"
      class="prism"
      code="yarn add @xxyy/vue-monaco-editor"
    />
    <h2>Usage</h2>
    <p>main.js</p>
    <prism
      language="javascript"
      class="prism"
      code="import Vue from 'vue'
import VueMonacoEditor from 'vue-monaco-editor'

Vue.use(VueMonacoEditor)
"
    />
    <p>app.vue</p>
    <prism
      language="html"
      class="prism"
      code="`
  <template>
    <div class='container'>
      <vue-monaco-editor v-model='code' />
    </div>
  </template>`"
    />
  </div>
</template>
<script>
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

export default {
  components: { Prism }
}
</script>
