<template>
  <section class="bg-green pa2 ma2 w-100">
      <div class="h4"></div>
      <form class ="measure center lh-copy pa3 ph0-l mt3">
          <div class="pa2">
              <label class="pa1 b f4 fw4 ttu black">User Email</label>
              <input type="email" name="email" class="w-100 pa2 ba bg-near-white black br2 pv2 f7 fw6" v-model='email' required>
          </div>
          <div class="pa2">
            <label class="pa1 b f4 fw4 ttu black">Password</label>
            <input  type="password" class="w-100 pa2 ba bg-near-white black br2 pv2 f7 fw6" v-model='password' required>
          </div>
          <span class="w-100">If you dont have an account, create one <router-link to= "/signup">HERE</router-link></span>
          <button class="db bg-blue pv2 br3 white fw6 f4 pointer no-underline" @click="logIn">
              Sign In
          </button>
      </form>
       <div class="h5"></div>
  


  </section>
</template>

<script>
import firebase from  'firebase';

export default {
  name: 'login',

  data() {
    return {
     email: '',
     password: ''
    }
  },
  methods: {
   logIn: function () {
       firebase.auth().signInWithEmailAndPassword(this.email, this.password).then (
            // eslint-disable-next-line no-unused-vars
        function (user) {
            alert('Well done! You are now connected!!')
        },
        function (err) {
            alert('Oops. ' + err.message)
        }
       );
}
}
}
</script>