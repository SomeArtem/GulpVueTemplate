import test from './test.js'
import Vue from 'vue'

test();

const app= new Vue({
    el:'#app',
    data:{
        message:'Gulp-vue-template: html + scripts + scss + vue'
    },
    methods:{
        cons:function(){
            console.log('gsdgsd')
        }
    },
    mounted:function(){
        this.cons();        
    }
        
    
})

