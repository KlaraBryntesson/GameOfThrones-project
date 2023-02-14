<script>
  import axios from 'axios';
  import HouseComponent from '../components/HouseComponent.vue';

  export default {
    components: {
      HouseComponent
    },
    data() {
      return {
        result: null
      };
    },
    methods: {
      getHouse() {
        axios
          .get(
            `https://api.gameofthronesquotes.xyz/v1/house/${this.$route.params.houseId}`
          )
          .then((response) => {
            this.result = response.data;
          });
      }
    },
    created() {
      this.getHouse();
    },
    watch: {
      '$route.params'() {
        this.getHouse();
      }
    }
  };
</script>

<template>
  <HouseComponent :house="house" :key="house.slug" v-for="house in result" />
</template>
