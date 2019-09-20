<template>
    <main class="app">

        <div class="grid-container">

            <section class="grid-cell left">

                <fake3d-image-effect
                    v-once
                    centered
                    fill-height-content
                    tag="div"
                    image="imgs/about.jpg"
                    image-map="imgs/about-map.jpg"
                >
                    <template #overlay>
                        <span class="overlay--blue" />
                    </template>

                    <div class="container text--white">
                        <h1 v-text="$library.VUE_APP_TITLE" />
                        <p v-text="$library.VUE_APP_DESCRIPTION" />
                    </div>

                    <template #footer>
                        <p class="text--white">I'm a footer</p>
                    </template>

                </fake3d-image-effect>

            </section>

            <aside class="grid-cell right">
                <section class="readme">
                    <readme />
                </section>
            </aside>

        </div>

    </main>
</template>

<script>
    // Markdown
    import readme from '../../README.md';

    // App
    export default {
        name: 'v-app',
        components: {
            readme,
        },
        mounted() {

            this.$nextTick(
                this.initReadmeLinks
            );

        },
        methods: {
            initReadmeLinks() {

                const links = document.querySelectorAll(
                    '.readme > article a'
                );

                for( var i = 0; i < links.length; i ++ ) {

                    links[ i ].setAttribute(
                        'target',
                        '_blank'
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
