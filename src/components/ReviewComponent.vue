<script>
  import { mapMutations } from 'vuex';
  export default {
    data() {
      return { reviewInput: '', nameInput: '', reviews: {}, PageId: this.page };
    },
    props: {
      page: {
        type: Number,
        default: null
      }
    },
    emits: ['submit'],
    methods: {
      ...mapMutations(['AddReview']),
      onClick(event) {
        event.preventDefault();
        this.reviews = {
          id: `allReviews${this.PageId}`,
          data: {
            name: this.nameInput,
            text: this.reviewInput
          }
        };
        this.nameInput = '';
        this.reviewInput = '';
        this.$emit('submit', this.reviews);
      }
    }
  };
</script>

<template>
  <form id="review-form" @submit="onClick">
    What do you think about this character?
    <input id="review-textarea" v-model="reviewInput" type="textarea" />
    <div id="name-submit-wrapper">
      <input v-model="nameInput" placeholder="Your name" />

      <button
        :disabled="reviewInput.length === 0 || nameInput === 0"
        type="submit"
        class="btn btn-light"
        id="send-button"
      >
        Send
      </button>
    </div>
  </form>
</template>

<style scoped>
  #review-form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }

  #review-textarea {
    margin-top: 5px;
    display: inline;
    width: 350px;
    height: 60px;
    vertical-align: top;
  }

  input {
    min-height: 30px;
  }

  input:focus {
    outline: none;
  }

  #name-submit-wrapper {
    display: flex;
    margin-top: 10px;
  }

  #send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    height: 30px;
    margin-left: 15px;
    width: 90px;
    background-color: rgb(224, 224, 224);
  }
</style>
