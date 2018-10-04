<template functional>
    <div class="container">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>

<style scoped>
  .container {
    padding: 1em;
    background-color: #fff;
    font-family: Helvetica,serif;
    border: solid 1px #e4e7ea;
    margin-top: 1.5em;
  }
</style>
