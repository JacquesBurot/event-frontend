<template>
  <h1 style="color: darkred">Events</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="event in events" :key="event.id">
        <div class="card h-100">
          <img :src="getEventPicture(event)" class="card-img-top" :alt="event.eventName">
          <div class="card-body">
            <h5 class="card-title">{{ event.eventName }} </h5>
            <p class="card-text">
              You {{ event.zweiG ? 'got to be vaccinated or recovered to participate in' : 'got to be vaccinated, recovered or tested to participate in' }} {{ event.eventName }}
            </p>
            <p class="card-text">
              The Event takes place at {{event.straße}} {{event.hausnmr}}, {{event.postleitzahl}} {{event.stadt}}
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
      events: []
    }
  },
  methods: {
    getEventPicture (event) {
      if (event.concert === true) {
        return require('../assets/concert.png')
      } else if (event.concert === false) {
        return require('../assets/manchester.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/events'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(event => {
        this.events.push(event)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
© 2021 GitHub, Inc.
