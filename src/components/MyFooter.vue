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
