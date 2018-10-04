<template>
  <div class="container">
    <div class="text">
      {{ title }}
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'BasePageTitle',
  props: ['title']
}
</script>

<style scoped>
  .container {
    display:flex;
    flex-direction:row;
    align-items: center;
  }

  .text {
    flex-grow:0;
    font-family: Helvetica sans-serif;

    border-left: solid 5px #e4e7ea;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-weight: bold;
    color: #7e8a9e;
    font-size: 2em;
  }

  .divider {
    flex-grow:1;
    height: 1px;
    background-color: #e4e7ea;
    margin-left: 20px;
  }
</style>
