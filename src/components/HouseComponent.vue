<script>
  export default {
    props: {
      house: {
        type: Object,
        default: () => {}
      }
    }
  };
</script>

<template>
  <div>
    <h1>{{ house.name }}</h1>
    <ol>
      <li :key="child.slug" v-for="child in house.members">{{ child.name }}</li>
    </ol>
  </div>
</template>

<style scoped>
  h1 {
    padding-left: 2rem;
  }

  li {
    font-size: 1.2rem;
    padding-left: 2rem;
  }
</style>
