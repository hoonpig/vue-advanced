import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes :[
        {
            path:"/"
            , redirect : '/news'
        },
        {   
            // path : url주소
            path:'/news'
            // component : url주소로 갔을때 표시될 컴포넌트
            , component : NewsView
        },
        {
            path:'/ask'
            , component : AskView
        },
        {
            path:'/jobs'
            , component : JobsView
        },
        {
            path:'/user',
            components : UserView,
        },
        {
            path:'/item',
            components : ItemView,
        }      
    ]
})