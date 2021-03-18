<template>
    <div>
        <div :style="styleObject" class="w-24 m-auto h-12 bg-black">
        </div>
        <div>
            <button @click="expand" class="rounded bg-green-300 m-1 p-2">Hit me</button>
            <button @click="contract" class="rounded bg-green-300 m-1 p-2">Contract</button>
            <button @click="getEmployees" class="rounded bg-green-300 m-1 p-2">getEmployees</button>
            <button @click="getPosts" class="rounded bg-green-300 m-1 p-2">getPosts</button>
        </div>
        <div>
            <ul v-for="(employee, index) in employees" :key="index">
                <li>{{employee.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { Loading } from 'vue-loading-overlay'

import {getPostsAPI} from '../apis'

export default {
    components: {
    },
    data(){
        return {
            styleObject: {
                width: "50px",
                background: "red"
            },
            employees: [],
            isLoading: false,
            fullPage: true,
        }
    },

    methods: {
        check(){
            if (Number(this.styleObject.width.split('px')[0]) < 100){
                this.styleObject.background = "red"
            } else {
                this.styleObject.background = "green"
            }
        },
        expand(){
            this.check()
            this.styleObject.width = Number(this.styleObject.width.split('px')[0]) + 50 + 'px'
        },

        contract(){
            this.styleObject.width = Number(this.styleObject.width.split('px')[0]) - 50 + 'px'
            this.check()
        },
        
        getEmployees(){
            this.isLoading = true
            this.employees = []
            fetch('https://api.mocki.io/v1/b043df5a')
            .then(response => {
                return response.json()
            })
            .then(data => {this.employees = data})
            .finally(() => {
                this.isLoading = false
            })
        },

        getPosts(){
            getPostsAPI()
            .then(resp => {console.log(resp)})
            .catch(error => {console.log(error)})
        }
    }
}
</script>