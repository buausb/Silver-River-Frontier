import {
    createRouter,
    createWebHistory,
} from 'vue-router';

const routes = [
    {
        path:'/',
        redirect:"/home"
    },
    {
        path:'/home',
        redirect:"/content",
        children:[
            {
                path:"/content",
                component: () => import("../pages/HomeContent"),
                redirect:"/home/content/filestate",
                children:[
                    {
                        path:'/home/content/filestate',
                        component:() => import("../pages/FileState")
                    },
                    {
                        path:"/home/content/rightmanagement",
                        component:() => import("../pages/RightManage")
                    }
                ]
            },
        ]
    },
    {
        path:"/findout",
        component:() => import("../pages/FindOut"),
    },
    {
        path:"/test",
        component:() => import("../pages/Test"),
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router