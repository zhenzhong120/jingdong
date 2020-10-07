<template>
  <div>
    <div class="cutting-line">
      <div class="left"></div>
      <slot></slot>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
 .cutting-line {
    width: 94%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .left {
      width: 36%;
      border-top: 1px solid gray;
    }
    .right {
      width: 36%;
      border-top: 1px solid gray;
    }
    .text {
      font-size: 10px;
      color: gray;
      margin: 0 2px;
    }
  }
</style>