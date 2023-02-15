<script>
  import moment from 'moment';

  export default {
    data() {
      return { currentYear: moment().format('YYYY') };
    }
  };
</script>

<template>
  <div>
    <p>Copyright © Klara Bryntesson, {{ currentYear }}</p>
  </div>
</template>

<style scoped>
  p {
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 3px;
  }
</style>
