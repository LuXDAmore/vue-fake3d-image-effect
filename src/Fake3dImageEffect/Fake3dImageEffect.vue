<template>
    <component
        :is="tag"
        class="fake3d-image-effect"
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
            v-if="!! $slots.overlay || !! $scopedSlots.overlay"
            class="fake3d-image-effect__overlay"
        >
            <slot name="overlay" />
        </div>

        <div
            v-if="!! $slots.default || !! $scopedSlots.default"
            class="fake3d-image-effect__content"
        >
            <slot :init="init" />
        </div>

        <div
            v-if="!! $slots.footer || !! $scopedSlots.footer"
            class="fake3d-image-effect__footer"
        >
            <slot name="footer" />
        </div>

    </component>
</template>

<script>
    // Sketch
    import Sketch from './sketch.js';

    // Component
    export default {
        name: 'fake3d-image-effect',
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
            maxTilt: {
                type: [
                    Number,
                    String,
                ],
                default: 15,
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
            gyro: {
                type: Object,
                default: () => {},
            },
        },
        computed: {
            classes() {

                return {
                    'fake3d-image-effect--centered': this.centered,
                    'fake3d-image-effect--fill-height': this.fillHeightContent,
                };

            },
            styles() {

                return {
                    width: this.width,
                    height: this.height,
                };

            },
        },
        created() {

            this.$sketch = null;

        },
        mounted() {

            this.$nextTick(
                this.init,
            );

        },
        methods: {
            init() {

                try {

                    this.$sketch = new Sketch(
                        this.$refs.gl,
                        this.gyro,
                        parseInt(
                            this.maxTilt,
                        ),
                    );

                } catch( e ) {

                    if( process.env.NODE_ENV !== 'production' ) {

                        console.error(
                            {
                                e,
                            },
                        );

                    }

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
