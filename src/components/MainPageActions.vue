<template>
  <div>
    <h4>Actions</h4>
    <router-link to="/invoice/create" class="btn">Add new</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainPageActions'
}
</script>

<style scoped>
  h4 {
    margin: 1em 0 1em 0;
  }

  .btn {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #0680ff;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #062eff;
    transition: 0.25s;
  }

  .btn:active {
    background-color: #572fa2;
  }
</style>
