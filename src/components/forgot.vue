<template>
  <section class="bg-near-white pa2 ma2 w-100">
      <div class="h4"></div>
      <form class ="measure mw6 center lh-copy pa3 ph0-l mt3">
          <div class="">
              <label class="pa1 b f4 fw4 ttu black">User Email</label>
              <input type="email" name="user" class="input-reset w-100 pa2 ba bg-near-white black br2 pv2 f7 fw6" required>
          </div>
         
          <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit" @click="sendLink"></div>
          <span class="mt2 db w-100 measure centre">Or navigate back to Login page <router-link to= "/login">HERE</router-link></span>
      </form>
       <div class="h5"></div>
  


  </section>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';


export default {
  name: "forgot",
  
  data() {
    return {
      email: ''
    }
  },
  methods: {
   sendLink: function () { }

  },
}
</script>