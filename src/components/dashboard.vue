<template>
  <section>
    <header class="sans-serif">
      <div class="cover bg-left bg-center-l" :style="{backgroundImage:'url('+require('@/assets/img/homez.png')+')'}">
        <div class="bg-black-80 pb5 pb6-m pb7-l">
          <nav class="dt w-100 mw8-s center bg-near-black"> 
            <div class="dtc w2 v-mid pa3">
              <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                <svg class="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style="fill:currentcolor"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
              </a>
            </div>
            <div class="dtc v-mid tr pa3">
              <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Home</a> 
              <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/graph" >Graph</a> 
              <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/history" >History</a> 
              <a class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Log in</a> 
            </div>
          </nav> 
          <div class="tc-ns mt4 mt5-m mt6-l ph3">
            <div class="">
              <div class="dt-ns dt--fixed-ns">
                <div class="dtc-ns w-20 tc pv4 bg-transparent">
                  <ul class="list pl0 mt0 measure center">
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f4 db white">START</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">219.5lb</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">BMI: 36</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">Nov 27, 2019</span>
                        </div>
                    </li>
                  </ul>
                </div>
                <div class="dtc-ns w-60 tc pv4 bg-black-10">
                   <h1 class="f4 db white">Current Weight</h1>
                   <h2 class="f2 f1-l fw2 white-90 mb0 lh-title">186.3lb</h2>
                   <progress id="progressBar" class="mv3" value="0" max="100"></progress>
                </div>
                <div class="dtc-ns w-20 tc pv4 bg-transparent">
                  <ul class="list pl0 mt0 measure center">
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f4 db white">TARGET</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">141.6lb</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">BMI: 23.8</span>
                        </div>
                    </li>
                    <li
                      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                          <span class="f6 db white"></span>
                          <span class="f6 db white">Feb 02, 2020</span>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3 mt2" href="/">Add Measurment</a>
            <span class="dib v-mid ph3 white-70 mb3"></span>
            <a class="f6 no-underline grow dib v-mid bg-blue white ba b--white ph3 pv2 mb3 mt2" href="">Edit Measurment</a>
          </div>
        </div>
      </div> 
    </header>

  </section>
</template>

<script type="text/javascript">


export default {
  components: {
    
  },
  data() {
    return {
   
    }
  },
  methods: {
   
},
}
</script>