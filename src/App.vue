<script>
  import NavBar from './components/NavBar.vue';
  import MyFooter from './components/MyFooter.vue';

  export default {
    components: {
      MyFooter,
      NavBar
    }
  };
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <MyFooter />
</template>

<style lang="scss">
  NavBar {
    width: 100%;
  }

  MyFooter {
    margin-top: auto;
    margin-bottom: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
</style>
