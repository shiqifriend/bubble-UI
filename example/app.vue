import type { App from 'vue';
<template>
  <h1>我是用于开发调试页面</h1>
  <brain-button-group>
    <brain-button size="small"> button </brain-button>
    <brain-button size="small" type="primary"> button </brain-button>
    <brain-button size="small" type="success"> button </brain-button>
    <brain-button size="small" type="danger"> button </brain-button>
    <brain-button size="small" type="warning"> button </brain-button>
    <brain-button size="small" type="info"> button </brain-button>
  </brain-button-group>

  <br />
  <brain-button>按钮默认尺寸</brain-button>
  <brain-button size="medium">按钮中等尺寸</brain-button>
  <brain-button size="small">按钮小尺寸</brain-button>
  <brain-button size="mini">按钮极小尺寸</brain-button>
  <brain-button size="tiny">按钮超小尺寸</brain-button>
  <br />

  <brain-button plain type="primary">朴素按钮</brain-button>
  <brain-button round type="primary">椭圆</brain-button>
  <brain-button disabled type="primary">禁止</brain-button>
  <brain-button circle type="primary">圆</brain-button>
</template>
<script lang="ts"></script>
