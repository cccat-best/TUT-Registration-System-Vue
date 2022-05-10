import Router from 'vue-router'
import Vue from 'vue'

import Big from '../components/Big'
import Back from '../components/Back'
import home from '../components/home'
import stuInfo from '../components/Table'
import Ann from '../components/Announcement'

import LittleLogin from '../components/LittleLogin'
import Application from '../components/Application'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/big/application'
        },
        {
            name: 'Back',
            path: '/back',
            component: Back,
            children: [
                {
                    path: 'home',
                    component: home,
                },
                {
                    path: 'stuInfo',
                    component: stuInfo,
                },
                {
                    path: 'ann',
                    component: Ann,
                }


            ]
        },
        {
            path: '/big',
            component: Big,
            children: [
                {
                    path: 'login',
                    component: LittleLogin,
                },
                {
                    path: 'application',
                    component: Application,
                }
            ]
        }
    ]
});

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
