<template>
  <section data-description="">
    <h1 style="color: black">Create your Event!</h1>
    <form>
      <div class="row">
        <div class="col-sm-10">
          <div>
            <input type="text" class="eventname" placeholder="Event name" v-model="eventName" required>
            <input type="text" class="djname" placeholder="Dj name" v-model="djName" required>
          </div>
          <br>
          <div>
            <input type="text" class="strasse" placeholder="Straße" v-model="straße" required>
          </div>
          <div>
            <input type="text" class="hausnummer" placeholder="Hausnummer" v-model="hausnummer" required>
          </div>
          <div>
            <input type="text" class="stadt" placeholder="Stadt" v-model="stadt" required>
            <input type="text" class="plz" placeholder="PLZ" v-model="postleitzahl">
          </div>
         <br>
          <div>
            <input type="text" class="datum" placeholder="Datum" v-model="datum" required>
            <input type="text" class="uhrzeit" placeholder="Uhrzeit" v-model="uhrzeit" required>
          </div>
         <br>
          <div>
            <input type="text" class="promolink" placeholder="Promolink (Soundclound Einbettung) (optional)" v-model="promolink">
          </div>
        </div>
       <div class="vaccinated">
         <input class="form-check-input" type="checkbox" id="zweiG" v-model="zweiG">
          <label style="color: black" class="form-check-label" for="zweiG">
           2G Pflicht
          </label>
        </div>
        <div class="concert">
          <input class="form-check-input" type="checkbox" id="concert" v-model="concert">
         <label style="color: black" class="form-check-label" for="concert">
           Es ist ein Konzert
          </label>
       </div>
        <div class="buttons">
          <button type="submit" class="create" @click.prevent="createEvent">Create</button>
         <button type="reset" class="reset">Reset</button>
       </div>
      </div>
    </form>
    <div class="wrapper">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      eventName: '',
      djName: '',
      stadt: '',
      postleitzahl: '',
      straße: '',
      hausnummer: '',
      uhrzeit: '',
      datum: '',
      promolink: '',
      zweiG: false,
      concert: false
    }
  },
  methods: {
    extractLink () {
      const regex = /(?<=src=")[^<>]+(?=")/gm
      const match = regex.exec(this.promolink)
      if (match) {
        return match[0]
      } else {
        return null
      }
    },
    createEvent () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/events'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const extractedLink = this.extractLink()
      const payload = JSON.stringify({
        eventName: this.eventName,
        concert: this.concert,
        djName: this.djName,
        zweiG: this.zweiG,
        stadt: this.stadt,
        postleitzahl: this.postleitzahl,
        straße: this.straße,
        hausnmr: this.hausnummer,
        uhrzeit: this.uhrzeit,
        datum: this.datum,
        promolink: extractedLink
      })

      var requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400|Playfair+Display:400,700,400italic|Libre+Baskerville:400,700,400italic|Muli:300,400|Open+Sans:400,300,700|Oswald:400,700|Raleway:400,100,300,700|Montserrat:400,700|Merriweather:400,300,300italic,400italic,700|Bree+Serif|Vollkorn:400italic,400,700|Abril+Fatface|Cardo:400,400italic);

html {
  box-sizing: border-box;
}

.create{
  position: relative;
  bottom: -90px;
  left: -0.2em;
  height: 40px;
  width: 100px;
  background-color: indianred;
  border-radius: 7px;
}

.reset{
  position: relative;
  bottom: -90px;
  right: -0.2em;
  height: 40px;
  width: 100px;
  border-radius: 7px;
}
.concert{
  position: relative;
  bottom: -60px;
  right: -8em;
  border-radius: 7px;
  display: inline;
}
.vaccinated{
  position: relative;
  bottom: -60px;
  left: -8em;
  border-radius: 7px;
  display: inline;
}
.promolink{
  position: relative;
  bottom: -50px;
  height: 35px;
  width: 800px;
  border-radius: 7px;
}
.datum{
  position: relative;
  bottom: -40px;
  left: -1em;
  height: 35px;
  border-radius: 7px;
}
.uhrzeit{
  position: relative;
  bottom: -40px;
  right: -1em;
  height: 35px;
  border-radius: 7px;
}
.stadt{
  position: relative;
  bottom: -30px;
  left: -1em;
  height: 35px;
  width: 300px;
  border-radius: 7px;
}
.plz{
  position: relative;
  bottom: -30px;
  right: -1em;
  height: 35px;
  width: 300px;
  border-radius: 7px;
}
.hausnummer{
  position: relative;
  bottom: -20px;
  height: 35px;
  width: 90px;
  border-radius: 7px;
}
.strasse{
  position: relative;
  bottom: -10px;
  width: 500px;
  height: 35px;
  border-radius: 7px;
}
.eventname{
  position: relative;
  left: -1em;
  width: 400px;
  height: 35px;
  border-radius: 7px;
}
.djname{
  position: relative;
  right: -1em;
  width: 400px;
  height: 35px;
  border-radius: 7px;
}
*, *:before, *:after {
  box-sizing: inherit;
}

/* Basically just a bunch of typeface classes, some helper classes(letter-spacing, font-weight, etc.), decorative classes(line-on-headers, double-lines, etc). Three types of bg, image, gradient and solid color. I do this for testing headings/hero-image typography. Now there are ten presets here, but you can mix everything. I know that this brings to classivitis, but I still didn't dwelved into Saas, it is next on my learning roadmap, but I will create a fork soon with Saas and variables. */

/* Preset 1 ---- Bold/cursive  */
/* Preset 2 ---- Thin/bold  */
/* Preset 3 ---- Add emphasis with color */
/* Preset 4 ---- Thin/Super bold/thin */
/* Preset 5 ---- Playing with serifs */
/* Preset 6 ---- Super contrast */
/* Preset 7 ---- Vertical text */
/* Preset 8 ---- Playful type */
/* Preset 9 ---- Middle flourish */
/* Preset 10 ---- Overlay text */

/* ==== Font sizes(based on Typeplate's scale) ==== */
html {
  font: normal 112.5%/1.65 serif; /* base font size 18px with 1.65 line-height */
  -moz-font-feature-settings: "liga=1, dlig=1"; /* common and discretionary ligatures */
  -ms-font-feature-settings: "liga", "dlig";
  -webkit-font-feature-settings: "liga", "dlig";
  -o-font-feature-settings: "liga", "dlig";
  font-feature-settings: "liga", "dlig";
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
  margin-top: 0;
  color: #fff;
  display: inline-block;
  position: relative;
}
p{
  margin-top: 4rem;
  color: #fff;
  font-size: 0.9rem;
  line-height: 1
}

/* ==== General styles ==== */
section{
  height: 600px;
  padding: 3rem 0;
  position: relative;
}
.wrapper{
  max-width: 53.33rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  transform: translateY(-50%);
  top:50%;
  text-align: center;
}
.wrapper.large-wrap{max-width: 100%;}
section:nth-of-type(3n+1){
  background-size: cover;
}
section:nth-of-type(1){
  background-image: url("../assets/background2.jpg");
}
section:nth-of-type(2){
  background: -webkit-linear-gradient(90deg, #24C6DC 10%, #514A9D 90%); /* Chrome 10+, Saf5.1+ */
  background:    -moz-linear-gradient(90deg, #24C6DC 10%, #514A9D 90%); /* FF3.6+ */
  background:     -ms-linear-gradient(90deg, #24C6DC 10%, #514A9D 90%); /* IE10 */
  background:      -o-linear-gradient(90deg, #24C6DC 10%, #514A9D 90%); /* Opera 11.10+ */
  background:         linear-gradient(90deg, #24C6DC 10%, #514A9D 90%); /* W3C */

}
section:nth-of-type(3){
  background-color: #2A2C39;
}
section:nth-of-type(4){
  background-image: url(https://download.unsplash.com/photo-1428550670225-15f007f6f1ba)
}
section:nth-of-type(5){
  background: -webkit-linear-gradient(90deg, #134E5E 10%, #71B280 90%); /* Chrome 10+, Saf5.1+ */
  background:    -moz-linear-gradient(90deg, #134E5E 10%, #71B280 90%); /* FF3.6+ */
  background:     -ms-linear-gradient(90deg, #134E5E 10%, #71B280 90%); /* IE10 */
  background:      -o-linear-gradient(90deg, #134E5E 10%, #71B280 90%); /* Opera 11.10+ */
  background:         linear-gradient(90deg, #134E5E 10%, #71B280 90%); /* W3C */

}
section:nth-of-type(6){
  background-color: #FCF751;
}
section:nth-of-type(7){
  background-image: url(https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=12d0ef05e407b1c9c85ad9875ece1a13)
}
section:nth-of-type(8){

  background: -webkit-linear-gradient(90deg, #485563 10%, #29323c 90%); /* Chrome 10+, Saf5.1+ */
  background:    -moz-linear-gradient(90deg, #485563 10%, #29323c 90%); /* FF3.6+ */
  background:     -ms-linear-gradient(90deg, #485563 10%, #29323c 90%); /* IE10 */
  background:      -o-linear-gradient(90deg, #485563 10%, #29323c 90%); /* Opera 11.10+ */
  background:         linear-gradient(90deg, #485563 10%, #29323c 90%); /* W3C */

}
section:nth-of-type(9){
  background-color: #b78681;
}
section:nth-of-type(10){
  background-image: url(https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5)
}
section:before{
  content: attr(data-description);
  font-size: 0.9rem;
  font-family: 'oswald';
  color: #fff;
  position: absolute;
  z-index: 20;
  left: 2rem;
  top: 2rem;
}

/* Media queries */
@media screen and (min-width: 1440px) {
  section{height:1300px}
}
</style>
