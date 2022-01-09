<template>
  <section data-description="">
    <h1 style="color: black">Create your Event!</h1>
    <form>
      <div class="row">
        <div class="col-sm-10">
         <input type="text" class="eventname" placeholder="Event name" v-model="eventName">
         <input type="text" class="djname" placeholder="Dj name" v-model="djName">
         <br>
         <input type="text" class="strasse" placeholder="Straße" v-model="straße">
          <br>
          <input type="text" class="hausnummer" placeholder="Hausnummer" v-model="hausnummer">
          <br>
          <input type="text" class="stadt" placeholder="Stadt" v-model="stadt">
         <input type="text" class="plz" placeholder="PLZ" v-model="postleitzahl">
         <br>
         <input type="text" class="datum" placeholder="Datum" v-model="datum">
         <input type="text" class="uhrzeit" placeholder="Uhrzeit" v-model="uhrzeit">
         <br>
         <input type="text" class="promolink" placeholder="Promolink (Soundclound Einbettung)" v-model="promolink">
        </div>
       <div class="vaccinated">
         <input class="form-check-input" type="checkbox" id="gridCheck" v-model="zweiG">
          <label class="form-check-label" for="gridCheck">
           2G Pflicht
          </label>
        </div>
        <div class="concert">
          <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="concert">
         <label class="form-check-label" for="gridCheck">
           Es ist ein Konzert
          </label>
       </div>
        <div class="buttons">
          <button type="submit" class="create" @click="createEvent">Create</button>
         <button type="submit" class="reset">Reset</button>
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
    createEvent () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/events'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

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
        promolink: this.promolink
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
  width: 50px;
  background-color: blue;
}
.reset{
  position: relative;
  bottom: -90px;
  right: -0.2em;
  height: 40px;
  width: 50px;
}
.concert{
  position: relative;
  bottom: -30px;
  right: -8em;
}
.vaccinated{
  position: relative;
  bottom: -60px;
  left: -8em;
}
.promolink{
  position: relative;
  bottom: -50px;
  height: 35px;
  width: 800px;
}
.datum{
  position: relative;
  bottom: -40px;
  left: -1em;
  height: 35px;
}
.uhrzeit{
  position: relative;
  bottom: -40px;
  right: -1em;
  height: 35px;
}
.stadt{
  position: relative;
  bottom: -30px;
  left: -1em;
  height: 35px;
  width: 300px;
}
.plz{
  position: relative;
  bottom: -30px;
  right: -1em;
  height: 35px;
  width: 300px;
}
.hausnummer{
  position: relative;
  bottom: -20px;
  height: 35px;
  width: 90px;
}
.strasse{
  position: relative;
  bottom: -10px;
  width: 500px;
  height: 35px;
}
.eventname{
  position: relative;
  left: -1em;
  width: 400px;
  height: 35px;
}
.djname{
  position: relative;
  right: -1em;
  width: 400px;
  height: 35px;
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
.gigantic{font-size: 11rem;}
.supersize{font-size: 8rem;}
.tera {
  font-size: 6.5rem; /* 117 / 18 = 6.5 */
  margin-bottom: 0.25385rem;
}

.giga {
  font-size: 5rem; /* 90 / 18 = 5 */
  margin-bottom: 0.33rem;
}

.mega {
  font-size: 4rem; /* 72 / 18 = 4 */
  margin-bottom: 0.4125rem;
}

.alpha {
  font-size: 3.33333rem; /* 60 / 18 = 3.3333 */
  margin-bottom: 0.495rem;
}

.beta {
  font-size: 2.6667rem; /* 48 / 18 = 2.6667 */
  margin-bottom: 0.61875rem;
}

.gamma {
  font-size: 2rem; /* 36 / 18 = 2 */
  margin-bottom: 0.825rem;
}

.delta {
  font-size: 1.3333333333333333rem; /* 24 / 18 = 1.3333 */
  margin-bottom: 1.2375rem;
}

.epsilon {
  font-size: 1.16667rem; /* 21 / 18 = 1.1667 */
  margin-bottom: 1.41429rem;
}

.zeta {
  font-size: 1rem; /* 18 = 18 × 1 */
  margin-bottom: 1.65rem;
}
/* ==== Typefaces  ==== */

.open-sans{font-family: 'Open Sans';}
.lato{font-family: 'Lato'}
.playfair-display{font-family: 'Playfair Display'}
.libre-baskerville{font-family: 'Libre Baskerville'}
.oswald{font-family: 'Oswald'}
.montserrat{font-family: 'Montserrat'}
.vollkorn{font-family: 'Vollkorn'}
.bree-serif{font-family: 'Bree Serif'}
.raleway{font-family: 'Raleway'}
.merriweather{font-family: 'Merriweather'}
.cardo{font-family: 'Cardo'}
.abril-fatface{font-family: 'Abril Fatface'}
.muli{font-family: 'Muli'}

/* ==== Weights, styles, letterspacing, etc. ==== */

.thin{font-weight: 100;}
.light{font-weight: 300;}
.regular{font-weight: 400;}
.bold{font-weight: 700;}
.italic{font-style: italic;}
.normal{font-style: normal;}
.ls-small{letter-spacing: 2px;}
.ls-medium{letter-spacing: 4px;}
.ls-large{letter-spacing: 8px;}
.ls-xlarge{letter-spacing: 12px;}
.uppercase{text-transform: uppercase;}
.color-emphasis-1{color: #FF4056}
.color-emphasis-2{color: #000;}
.color-emphasis-3{color: #60547c}
.text-left{text-align: left;}
.line-height-small{line-height: 1.2}
.line-height-medium{line-height: 1.45}
.line-height-large{line-height: 1.65}

/* ===== Flourish, heading horizontal lines, etc. ==== */

.thick-header-line:before, .thick-header-line:after{
  content: "";
  display: block;
  position: absolute;
  width:7rem;
  height: 4px;
  background-color: #fff;
  top:50%;
  margin-bottom: -4px;
}
.thick-header-line:before{
  left: -7.5rem;
}
.thick-header-line:after{
  right: -7.5rem;
}

.thin-header-line:before, .thin-header-line:after{
  content: "";
  display: block;
  position: absolute;
  width:7rem;
  height: 1px;
  background-color: #fff;
  top:50%;
  margin-bottom: -1px;
}
.thin-header-line:before{
  left: -7.5rem;
}
.thin-header-line:after{
  right: -7rem;
}
.line-after-heading:before{
  content: "";
  display: block;
  position: absolute;
  background-color: #fff;
  width:4rem;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: -2rem;

}
.double-header-line:before, .double-header-line:after{
  content: "";
  display: block;
  position: absolute;
  width:7rem;
  background-color: transparent;
  height: 4px;
  border-top: 1px solid #fff;
  border-bottom:1px solid #fff;
  top: 50%;
  margin-bottom: -4px;
}
.double-header-line:before{
  left: -7.5rem;
}
.double-header-line:after{
  right: -7.5rem;
}
.decorative-span{
  display: inline-block;
  font-size: 30px;
  line-height: 60px;
  margin: 0 10px;
  position: relative;
  vertical-align: middle;
  color: #fff;
}
.decorative-span:before, .decorative-span:after{
  background-color: #fff;
  bottom: 100%;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
}
.decorative-span:after {
  top: 96%;
}

.text-overlay:before{
  content: attr(data-text);
  z-index: 99;
  width: 98%;
  height: 50px;
  background-color: hsla(0,0%,0%,0.6);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  line-height: 50px;
  text-align: center;
  color:#f0ad00;
  font-family: 'bree serif';
  font-style: normal;
  font-size: 1.3rem;
  letter-spacing: 0;
  text-transform: none;
  font-weight: 400;
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
  section{height:700px}
}
</style>
