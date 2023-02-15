<script>
  export default {
    data() {
      return { inputField: null };
    }
  };
</script>

<template>
  <!-- Navbar partially from Bootstrap -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex align-items-center">
      <RouterLink id="nav-heading" class="navbar-brand" to="/">
        Game Of Thrones
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/">Characters</RouterLink>
        </li>
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/families">All families</RouterLink>
        </li>
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/house/baratheon">
            Baratheon
          </RouterLink>
        </li>
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/house/lannister">
            Lannister
          </RouterLink>
        </li>
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/house/stark"> Stark </RouterLink>
        </li>
        <li class="nav-item toplinks">
          <RouterLink class="nav-link" to="/house/targaryen">
            Targaryen
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
  nav {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 30px;
  }

  #nav-heading-div {
    width: 100%;
    margin: auto;
    text-align: center;
    padding-top: 1rem;
  }

  #nav-heading {
    font-size: 2rem;
  }

  .navbar {
    flex-direction: column;
  }

  .navbar-nav {
    justify-content: space-around;
    width: 100%;
    padding: 0;
  }

  .navbar-toggler {
    margin-right: 10px;
  }

  .toplinks {
    padding-right: 40px;
    display: inline;
    text-transform: uppercase;
  }
</style>
