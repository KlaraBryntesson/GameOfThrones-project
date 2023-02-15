<script>
  import axios from 'axios';
  import ReviewComponent from '../components/ReviewComponent.vue';
  import ReviewList from '../components/ReviewList.vue';
  import store from '../store';

  export default {
    components: {
      ReviewComponent,
      ReviewList
    },
    data() {
      return {
        result: null,
        characterName: null,
        quote: null,
        characterImage: null,
        FullName: null,
        Title: null,
        Family: null
      };
    },
    methods: {
      AddReview(reviews) {
        store.commit('AddReview', reviews);
      },
      getCharacter() {
        axios
          .get(
            `https://thronesapi.com/api/v2/Characters/${this.$route.params.characterId}`
          )
          .then((response) => {
            this.result = response.data;
            console.log(this.result);
            console.log(this.result.fullName);
            this.characterImage = this.result.imageUrl;
            this.characterName = this.result.firstName.toLowerCase();
            this.FullName = this.result.fullName;
            this.Title = this.result.title;
            this.Family = this.result.family;
            this.quoteGOT();
          });
      },
      quoteGOT() {
        axios
          .get(
            `https://api.gameofthronesquotes.xyz/v1/author/${this.characterName}/`
          )
          .then((response) => {
            this.quote = response.data.sentence;
            console.log(this.quote);
          });
      }
    },
    created() {
      console.log(this.$route.params.characterId);
      this.getCharacter();
    }
  };
</script>

<template>
  <div class="character-wrapper">
    <div class="image-container">
      <img
        class="big-image crop-image"
        :src="characterImage"
        :alt="characterName"
      />
    </div>
    <div id="info-wrapper">
      <div id="heading-wrapper">
        <h1>{{ FullName }}</h1>
        <p id="name-title">- {{ Title }}</p>
      </div>
      <p v-if="quote !== undefined" id="quote">"{{ quote }}"</p>
      <p>Family: {{ Family }}</p>
      <ReviewComponent
        v-if="$route.params.characterId < 12"
        :page="Number($route.params.characterId)"
        @at-submit="AddReview"
      />
    </div>
  </div>
  <ReviewList
    v-if="$route.params.characterId < 12"
    :page="Number($route.params.characterId)"
  />
</template>

<style>
  .character-wrapper {
    display: flex;
    flex-direction: row;
  }

  .image-container {
    margin-right: 30px;
    width: 400px;
    height: 400px;
  }

  .big-image {
    width: 400px;
    height: 400px;
  }

  .crop-image {
    object-fit: cover;
  }

  #info-wrapper {
    padding: 20px;
    width: auto;
  }

  #heading-wrapper {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  #name-title {
    margin-left: 1rem;
  }

  #quote {
    width: 90%;
  }

  #reviews-box {
    margin-top: 20px;
  }

  .review-wrapper {
    padding: 20px;
    margin-bottom: 20px;
    width: 60%;
    background-color: rgb(224, 224, 224);
  }
</style>
