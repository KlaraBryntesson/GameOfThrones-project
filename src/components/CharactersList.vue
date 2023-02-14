<script>
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';
  // import axios from 'axios';
  export default {
    // data() {
    //   return { result: null, quote: null, characterNames: [] };
    // },
    methods: {
      ...mapActions(['axiosGOT'])
      // axiosGOT() {
      //   axios
      //     .get('https://thronesapi.com/api/v2/Characters')
      //     .then((response) => {
      //       this.result = response.data;
      //       console.log(this.result);
      //       for (let x = 0; x < this.result.length; x++) {
      //         this.characterNames.push(this.result[x].firstName.toLowerCase());
      //       }
      //       console.log(this.characterNames);
      //     });
      // }
    },
    computed: {
      ...mapState({
        result: (state) => state.allCharacters
      })
    },
    created() {
      this.axiosGOT();
    }
  };
</script>

<template>
  <h1>Characters</h1>
  <ol>
    <li
      class="character-list-box"
      :key="characters.id"
      :id="characters.firstName"
      v-for="characters in result"
    >
      <RouterLink id="character-links" :to="`/character/${characters.id}`">
        <div class="character-box">
          <img
            class="list-images crop-images"
            :src="characters.imageUrl"
            :alt="characters.firstName"
          />
          <div class="heading-div">
            <h2>{{ characters.fullName }}</h2>
            <p class="title">{{ characters.title }}</p>
          </div>
        </div>
      </RouterLink>
    </li>
  </ol>
</template>

<style scoped>
  h1 {
    padding-left: 2rem;
  }
  .character-list-box {
    background-color: rgb(235, 235, 235);
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    max-width: 500px;
    transition: 0.4s;
  }

  .character-list-box:hover {
    background-color: rgb(212, 212, 212);
  }

  .character-box {
    display: flex;
    flex-direction: row;
  }

  .heading-div {
    margin-left: 1rem;
  }

  .list-images {
    width: 70px;
    height: 70px;
  }
  .crop-images {
    object-fit: cover;
  }
</style>
