// Vue
import Vue from 'vue';

// Skeleton
import 'modern-normalize/modern-normalize.css';
import 'github-markdown-css';
import './main.scss';
import VApp from './VApp';

// Component
import Library from './library';
import { Fake3dImageEffect } from './Fake3dImageEffect';

// Install
Vue.component(
    Fake3dImageEffect.name,
    Fake3dImageEffect
);

// Library data
Vue.use(
    Library,
    process.env
);

// Config
const IS_DEV = process.env.NODE_ENV === 'development';

Vue.config.silent = ! IS_DEV;
Vue.config.productionTip = IS_DEV;

new Vue(
    {
        el: '#app',
        render: h => h(
            VApp
        ),
    }
);
