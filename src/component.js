import monaco from './monaco'

export default {
  props: {
    mode: {
      type: String,
      default: 'code' // code、diff
    },
    original: String,
    value: {
      type: String,
      default: '// code'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    language: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'vs-dark'
    },
    lineNumbers: {
      type: String,
      default: 'on'
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      editor: null
    }
  },
  computed: {
    isDiff() {
      return this.mode === 'diff'
    },
    baseOptions() {
      let { value, language, theme, lineNumbers, readOnly } = this

      return {
        value,
        language,
        theme,
        lineNumbers,
        readOnly
      }
    }
  },
  wathch: {
    language() {
      if (this.editor) {
        if (this.isDiff) {
          let { original, modified } = this.editor.getModel()
          monaco.editor.setModelLanguage(original, this.language)
          monaco.editor.setModelLanguage(modified, this.language)
        } else {
          monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
        }
      }
    },
    theme() {
      monaco.editor.setTheme(this.theme)
    },
    options: {
      handle() {
        if (this.editor) {
          this.editor.updateOptions(this.options)
        }
      },
      deep: true
    }
  },
  methods: {
    initEditor() {
      let { isDiff, value, language, theme, lineNumbers, readOnly } = this
      this.editor = monaco.editor[isDiff ? 'createDiffEditor' : 'create'](
        this.$el,
        {
          value,
          language,
          theme,
          lineNumbers,
          readOnly,
          ...this.options
        }
      )

      isDiff ? this.diffHandle() : this.bindEvent()
    },
    diffHandle() {
      let { original, value, language } = this
      let originalModel = monaco.editor.createModel(original, language)
      let modifiedModel = monaco.editor.createModel(value, language)
      this.editor.setModel({
        original: originalModel,
        modified: modifiedModel
      })
    },
    bindEvent() {
      this.editor.onDidChangeModelContent(event => {
        this.$emit('input', this.editor.getValue())
        this.$emit('change', event)
      })
    }
  },
  render(h) {
    let { width, height } = this
    return h('div', {
      style: {
        width,
        height
      }
    })
  },
  mounted() {
    this.initEditor()
  }
}
