<template>
  <h1 style="color: darkred">Events</h1>
  <div class="container-fluid">
    <div class="class border-danger mb-3">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="event in events" :key="event.id">
          <div class="card h-100">
            <img :src="getEventPicture(event)" class="card-img-top" :alt="event.eventName">
            <div class="card-body">
              <h2 style="color: darkred" class="card-title">{{ event.eventName }}<br>
                <h5 style="color: darkred" class="card-subtitle">{{event.straße}} {{event.hausnmr}}, {{event.postleitzahl}} {{event.stadt}}<br>
                {{event.uhrzeit}}<br>
                  <br>
                  Music will be played by {{event.djName}}
               </h5>
             </h2>
              <p style="color: darkred" class="card-text">
               You {{ event.zweiG ? 'got to be vaccinated or recovered to participate in' : 'got to be vaccinated, recovered or tested to participate in' }} {{ event.eventName }}
             </p>
              <iframe v-if="validateSoundcloudUrl(event.promolink)" width="100%" height="300" scrolling="no" frameborder="no" :src="event.promolink"></iframe>
              <hr>
            </div>
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
        return require('../assets/concert1.png')
      } else if (event.concert === false) {
        return require('../assets/manchester.png')
      }
    },
    validateSoundcloudUrl (url) {
      return url !== null && url !== '' && url.indexOf('https://w.soundcloud.com/player/') !== -1
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
