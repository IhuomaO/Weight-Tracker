<template>
  <section class="bg-green pa2 ma2 w-100">
      <div class="h4"></div>
      <form class ="measure center lh-copy pa3 ph0-l mt3">
          <div class="pa2">
              <label class="pa1 b f4 fw4 ttu black">User Name</label>
              <input type="text" name="user" class="w-100 pa2 ba bg-near-white black br2 pv2 f7 fw6" required>
          </div>
          <div class="pa2">
            <label class="pa1 b f4 fw4 ttu black">Password</label>
            <input  name="password" class="w-100 pa2 ba bg-near-white black br2 pv2 f7 fw6" required>
          </div>
          <span class="w-100">If you dont have an account, create one <router-link to= "/signup">HERE</router-link></span>
          <button class="db bg-blue pv2 br3 white fw6 f4 pointer no-underline" @click="logIn" router-link to = "/dashboard">
              Sign In
          </button>
      </form>
       <div class="h5"></div>
  


  </section>
</template>

<script type="text/javascript">


export default {
  name: 'login',
  components: {
    
  },
  data() {
    return {
   
    }
  },
  methods: {
   logIn: function () {
      this.$router.replace('dashboard');
   }
},
}
</script>