<script>
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';
  export default {
    methods: {
      ...mapActions(['getHouses'])
    },
    created() {
      this.getHouses();
    },
    computed: {
      ...mapState({
        result: (state) => state.allHouses
      })
    }
  };
</script>
<template>
  <h1>Houses in Game Of Thrones</h1>
  <div :key="house.slug" v-for="house in result">
    <h2>{{ house.name }}</h2>
    <ul>
      <li :key="child.slug" v-for="child in house.members">{{ child.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
  h1 {
    padding-left: 2rem;
    margin-bottom: 2rem;
  }

  div {
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }
</style>
