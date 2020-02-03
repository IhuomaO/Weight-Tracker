<template>
  <section class="bg-near-white pa2 ma2 w-100">
      <div class="h4"></div>
      <article class="pa4 black-80 mw6 center">
        <form action="sign-up_submit" method="get" accept-charset="utf-8">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
            <div class="mt3">
              <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
              <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" v-model="email" required>
            </div>
            <div class="mt3">
              <label class="db fw4 lh-copy f6" for="password">Password</label>
              <input class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" v-model="password" required>
            </div>
          </fieldset>
          <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Create Account" @click="signUp"></div>
          <span class="mt2 db w-100 measure centre">Or navigate back to Login page <router-link to= "/login">HERE</router-link></span>
        </form>
      </article>
       <div class="h5"></div>
        

  </section>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
   signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        // eslint-disable-next-line no-unused-vars
        function (user) {
            alert('Your account has been created!')
        },
        function (err) {
            alert('Oops. ' + err.message)
        }
    );
   }
},
}
</script>