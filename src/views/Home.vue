<template>

  <section data-description="">
    <div class="wrapper">
      <h1 class="delta uppercase thin raleway color-emphasis-2 ls-medium">
        Create your own<br>
        <span class="supersize montserrat bold">Event</span>
      </h1>
    </div>
  </section>
  <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845322208&color=%23040404&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-434371931" title="kouroshmaleki" target="_blank" style="color: #cccccc; text-decoration: none;">kouroshmaleki</a> · <a href="https://soundcloud.com/user-434371931/anti-racism-summer-set" title="summer set" target="_blank" style="color: #cccccc; text-decoration: none;">summer set</a></div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400|Playfair+Display:400,700,400italic|Libre+Baskerville:400,700,400italic|Muli:300,400|Open+Sans:400,300,700|Oswald:400,700|Raleway:400,100,300,700|Montserrat:400,700|Merriweather:400,300,300italic,400italic,700|Bree+Serif|Vollkorn:400italic,400,700|Abril+Fatface|Cardo:400,400italic);

html {
  box-sizing: border-box;
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

@media screen and (min-width: 1440px) {
  section{height:700px}
}
</style>
