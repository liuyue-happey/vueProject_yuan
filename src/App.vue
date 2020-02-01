<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "我是App.vue组件",
      radio: "1"
    };
  }
};
</script>
  
<style>
* {
  padding: 0%;
  margin: 0%;
  user-select: none;
  box-sizing: unset;
}
</style>
