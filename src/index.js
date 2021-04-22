import monaco from './monaco'
import VueMonacoEditor from './component'

const install = (Vue, options) => {
  Vue.component('vue-monaco-editor', VueMonacoEditor)
}
export default {
  install,
  monaco,
  VueMonacoEditor
}
export { install, VueMonacoEditor }
