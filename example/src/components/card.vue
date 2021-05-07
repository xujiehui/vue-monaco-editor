<template>
  <div class="card-container">
    <slot name="title"></slot>
    <div class="card">
      <div class="example-container">
        <slot></slot>
      </div>
      <slot name="indicator"></slot>
      <transition name="slide" mode="out-in">
        <prism language="html" class="prism" v-show="expand" :code="code" />
      </transition>
      <button class="code-expand" @click="expand = !expand">
        <heroicon :name="expand ? 'cheveron-up' : 'cheveron-down'"></heroicon>
        <span>{{ expand ? 'Hide' : 'Expand' }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  components: {
    Prism
  },
  data: () => ({
    expand: false
  }),
  methods: {}
}
</script>
<style lang="scss">
.slide-enter-active {
  transition: all 0.2s ease;
}
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
}
</style>
