import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [

    {
        path: '/watch',
        name: 'watch',
        component: () => import('../views/watch/index')
    },
    {
        path: '/ref',
        name: 'ref',
        component: () => import('../views/ref/index')
    },
    {
        path: '/isproxy',
        name: 'isproxy',
        component: () => import('../views/isProxy/index')
    },
    {
        path: '/provide',
        name:'provide',
        component: () => import('../views/provide/index')
    },
    {
        path: '/rejects',
        name:'rejects',
        component: () => import('../views/provide/injects')
    },
    {
        path: '/mysun',
        name:'mysun',
        component: () => import('../views/provide/mysun')
    },
    {
        path:'/setup',
        name:'setup',
        component: () => import('../views/setup/setup.vue')
    },
    {
        path:'/readonly',
        name:'readonly',
        component: () => import('../views/readonly/index.vue')
    },
    {
        path:'/lifeCycle',
        name:'lifeCycle',
        component: () => import('../views/lifyCycle/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
