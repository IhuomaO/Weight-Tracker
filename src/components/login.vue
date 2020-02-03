<template>
  <section class="bg-near-white pa2 ma2 w-100">
      <div class="h4"></div>
      <main class="pa4 black-80 mw7 center">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Sign In</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" v-model='email' required>
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">Password</label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" v-model='password' required>
              </div>
              <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
            </fieldset>
            <div class="">
              <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" @click="logIn">
            </div>
            <div class="lh-copy mt3">
              <p class="f6 link dim black db"><router-link to= "/signup">Sign up</router-link></p>
              <p class="f6 link dim black db">><router-link to= "/forgot">Forgot your password?</router-link></p>
            </div>
          </form>
      </main>
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