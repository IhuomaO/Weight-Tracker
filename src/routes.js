import Vue from "vue";
import Router from "vue-router";

import dashboard from "@/components/dashboard";
import graph from "@/components/graph";
import history from "@/components/history";
import login from "@/components/login";
import forgot from "@/components/forgot";
import signup from "@/components/signup";



Vue.use(Router);

export const router =  new Router({
    mode: "hash", 
    routes: [ 
        {
            name: "dashboard",
            path: '/',
            component: dashboard,
        },
        {
            name: "graph",
            path: '/graph',
            component: graph,
        },
        {
            name: "history",
            path: '/history',
            component: history,
        },
        {
          name: "login",
          path: "/login",
          component: login
        },   
        {
            name: "signup",
            path: "/signup",
            component: signup
          }, 
        {  
          name: "forgot",
          path: "/forgot",
          component: forgot
        }  
    ]
})