<template>
  <div class="container">
    <h4>Actions</h4>
    <input type="button" class="btn" value="Add new"/>
  </div>
</template>

<script>
export default {
  name: 'MainPageActions'
}
</script>

<style scoped>
  .container {
    padding: 1em;
    background-color: #fff;
    font-family: Helvetica,serif;
    border: solid 1px #e4e7ea;
    margin-top: 3em;
  }

  h4 {
    margin: 1em 0 1em 0;
  }

  .btn {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #0680ff;
  }

  .btn:hover {
    background-color: #062eff;
    transition: 0.25s;
  }

  .btn:active {
    background-color: #572fa2;
  }
</style>
