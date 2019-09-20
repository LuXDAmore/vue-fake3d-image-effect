// Import vue component
import component from './Fake3dImageEffect.vue';

const plugin = {
    Fake3dImageEffect: component,
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
export default plugin;

// Auto install
typeof window !== 'undefined' && window.Vue && window.Vue.use(
    plugin
);
