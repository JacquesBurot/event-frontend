<template>
<div class="card bg-dark text-white">
<img src="../assets/manchester.png" class="card-img" alt="Warehouse Project Manchester">
<div class="card-img-overlay">
  <h5 class="card-title">Warehouse Project Manchester</h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p>
</div>
  <img src="../assets/manchester.png" class="card-img" alt="Warehouse Project Manchester">
  <div class="card-img-overlay">
    <h5 class="card-title">Warehouse Project Manchester</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</template>
<script>
export default {
  name: 'Persons',
  data () {
    return {
      persons: []
    }
  }

<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="person in event" :key="person.id">
      <div class="card h-100">
        <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' + person.lastName">
        <div class="card-body">
          <h5 class="card-title">{{ event.firstName }} {{ event.lastName }}</h5>
          <p class="card-text">
            {{ event.firstName }} {{ event.lastName }} ist {{ event.vaccinated ? 'geimpft' : 'nicht geimpft' }} und
            hat {{ event.pets.length }} Haustier(e).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
  name: 'Events',
  data () {
  return {
  persons: []
}
},
  methods: {
  getAvatar (person) {
  if (person.gender === 'MALE') {
  return require("../assets/manchester.png"')
} else if (person.gender === 'FEMALE') {
  return require('../assets/concert.png')
}
}
},
  mounted () {
  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/persons'
  const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}
  fetch(endpoint, requestOptions)
  .then(response => response.json())
  .then(result => result.forEach(event => {
  this.persons.push(event)
}))
  .catch(error => console.log('error', error))
}
}
</script>

<style scoped>
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
