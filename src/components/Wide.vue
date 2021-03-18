<template>
    <div>
        <p v-if="show">this is vuex aware</p>
        <button class="m-2 rounded bg-green-200" @click="login">login</button>
        <button class="m-2 rounded bg-red-300" @click="logout">logout</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            show: state => state.auth.isLoggedIn
        })
    },
    methods: {
        login(){
            // this.show = !this.show
            this.$store.dispatch('auth/login')
        },
        logout(){
            this.$store.dispatch('auth/logout')
        }

    }
}
</script>