// Import vue component
import component from './Fake3dImageEffect.vue';

const plugin = {
    Fake3dImageEffect: component,
    installed: false,
    install(
        Vue,
    ) {

        if( plugin.installed )
            return;

        plugin.installed = true;

        Vue.component(
            component.name,
            component,
        );

    },
};

// Auto install for browsers
let GlobalVue = null;

if( typeof window !== 'undefined' )
    GlobalVue = window.Vue;
else if( typeof global !== 'undefined' )
    GlobalVue = global.Vue;

GlobalVue && GlobalVue.use(
    plugin,
);

// To allow use as module (npm/webpack/etc.) export component
export default plugin;
