<template>
  <card :code="originCode">
    <h2 slot="title">Examples</h2>
    <vue-monaco-editor
      v-model="code"
      :options="{
        scrollBeyondLastLine: false
      }"
    />
  </card>
</template>
<script>
import Card from './card.vue'

const originCode = `
  <template>
    <vue-monaco-editor
      v-model="code"
      :options="{
        scrollBeyondLastLine: false
      }"
    />
  </template>
  <script>
    export default {
      data() {
        return {
    code: \`
/**
 * sum
 */
function sum(...list) {
    return list.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}
    \`
        }
      }
    }
  <\/script>
`

export default {
  components: { Card },
  data: () => ({
    code: `
/**
 * sum
 */
function sum(...list) {
    return list.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}
    `,
    originCode
  }),
  methods: {}
}
</script>
