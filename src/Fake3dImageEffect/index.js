// Import vue component
import component from './Fake3dImageEffect.vue';

const plugin = {
    install(
        Vue
    ) {

        Vue.component(
            component.name,
            component
        );

    },
};

// To allow use as module (npm/webpack/etc.) export component
export default {
    Fake3dImageEffect: component,
    VueFake3dImageEffect: plugin,
};

// Auto install
typeof window !== 'undefined' && window.Vue && window.Vue.use(
    plugin
);
