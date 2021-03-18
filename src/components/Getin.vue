<template>
  <div>
    <p>{{ count }}</p>
    <button class="bg-green-400 rounded" @click="gSignIn">With Google</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    async gSignIn(){
      const authCode = await this.$gAuth.getAuthCode()
      console.log("auth: "+ authCode)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
