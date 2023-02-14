<script>
  export default {
    props: {
      page: {
        type: Number,
        default: null
      }
    },
    data() {
      return { PageId: this.page };
    },
    methods: {
      getAllReviews() {
        return this.$store.state[`allReviews${this.PageId}`];
      }
    },
    computed: {
      allReviews() {
        return this.getAllReviews();
      }
    }
  };
</script>
<template>
  <div
    v-if="allReviews !== undefined || allReviews.length !== 0"
    id="reviews-box"
  >
    <div class="review-wrapper" :key="review.name" v-for="review in allReviews">
      <p>{{ review.name }} says:</p>
      <p>- {{ review.text }}</p>
    </div>
  </div>
</template>
