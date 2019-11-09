<template>
    <component
        :is="tag"
        :class="classes"
        :style="styles"
    >

        <div
            ref="gl"
            class="fake3d-image-effect__image"
            :data-image-original="image"
            :data-image-depth="imageMap"
            :data-horizontal-threshold="horizontal"
            :data-vertical-threshold="vertical"
        />

        <div
            v-if="$slots.overlay || $scopedSlots.overlay"
            class="fake3d-image-effect__overlay"
        >
            <slot name="overlay" />
        </div>

        <div
            v-if="$slots.default || $scopedSlots.default"
            :class="contentClasses"
        >
            <slot :init="init" />
        </div>

        <div
            v-if="$slots.footer || $scopedSlots.footer"
            class="fake3d-image-effect__footer"
        >
            <slot name="footer" />
        </div>

    </component>
</template>

<script>
    // Sketch
    import Sketch from './sketch.js';

    // Init
    const COMPONENT = 'fake3d-image-effect';

    // Component
    export default {
        name: COMPONENT,
        inheritAttrs: false,
        props: {
            tag: {
                type: String,
                default: 'section',
            },
            image: {
                type: String,
                required: true,
            },
            imageMap: {
                type: String,
                required: true,
            },
            horizontal: {
                type: [
                    Number,
                    String,
                ],
                default: 18,
            },
            vertical: {
                type: [
                    Number,
                    String,
                ],
                default: 23,
            },
            centered: {
                type: Boolean,
                default: false,
            },
            fillHeightContent: {
                type: Boolean,
                default: false,
            },
            width: {
                type: String,
                default: '100%',
            },
            height: {
                type: String,
                default: '100vh',
            },
        },
        computed: {
            classes() {

                const CLASSES = [ COMPONENT ];

                this.centered && CLASSES.push(
                    `${ COMPONENT }--centered`,
                );

                return CLASSES;

            },
            contentClasses() {

                const MAIN_CLASS = `${ COMPONENT }__content`
                      , CLASSES = [ MAIN_CLASS ]
                ;

                this.fillHeightContent && CLASSES.push(
                    `${ MAIN_CLASS }--fill-height`,
                );

                return CLASSES;

            },
            styles() {

                return {
                    width: this.width,
                    height: this.height,
                };

            },
        },
        mounted() {

            this.image && this.imageMap && this.$nextTick(
                this.init,
            );

        },
        methods: {
            init() {

                try {

                    new Sketch(
                        this.$refs.gl,
                    );

                } catch( e ) {

                    console.error(
                        {
                            e,
                        },
                    );

                }

            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
