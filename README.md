# vue-monaco-editor

![version](https://img.shields.io/npm/v/@xxyy/vue-monaco-editor)

**Monaco Editor Vue Component**

## Demo

[Demo](https://xujiehui.github.io/vue-monaco-editor/)

## Installation

#### NPM

``` shell
npm install @xxyy/vue-monaco-editor
```

#### Yarn

``` shell
yarn add @xxyy/vue-monaco-editor
```

Install the plugin into your Vue project:

``` javascript
import Vue from 'vue'
import VueMonacoEditor from 'vue-monaco-editor'

Vue.use(VueMonacoEditor)
```

or use the component:

``` javascript
import Vue from 'vue'
import {
    VueMonacoEditor
} from 'vue-monaco-editor'

Vue.component('vue-monaco-editor', VueMonacoEditor)
```

## Usage

``` html
<template>
    <div class='container'>
        <vue-monaco-editor v-model='code' />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: ''
            }
        }
    }
</script>
```

## Component Props

| Option        | Type          | Default | Description |
|:-------------|:-------------|:-------|:-------|:-------|
| mode      | String        | `code` | code, diff | |
| original      | String        | `''` | Only `mode=diff` need |
| value      | String        | `''` | | |
| height        | String | `100%` || |
| width | String | `100%` || |
| language      | String        | `javascript` | | |
| theme | String | `vs-dark` | vs, hc-black, or vs-dark | |
| lineNumbers | String | `on` | on, off | |
| readOnly      | Boolean        | `false` | | |
| options | Object | Merged with defaults below | See [Monaco Editor Options](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html) | |
