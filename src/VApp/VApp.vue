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
                        <h2>
                            FAKE WEBGL IMAGE EFFECT
                        </h2>
                        <p>
                            <small>
                                📱 <em>take a look at this effect from your phone</em> ✌️
                            </small>
                        </p>
                        <p>
                            <a
                                title="Github"
                                class="button"
                                target="_blank"
                                rel="noopener"
                                href="https://github.com/LuXDAmore?tab=repositories"
                            >
                                GITHUB
                            </a>
                            <a
                                title="Vue Cursor Effect"
                                class="button"
                                target="_blank"
                                rel="noopener"
                                href="https://luxdamore.github.io/vue-cursor-fx"
                            >
                                | Vue Cursor Effect |
                            </a>
                        </p>
                    </div>

                    <template #footer>
                        <p class="text--white">I'm a footer</p>
                    </template>

                </fake3d-image-effect>

            </section>

            <aside class="grid-cell right">
                <section class="readme">
                    <readme class="markdown-body" />
                </section>
            </aside>

        </div>

    </main>
</template>

<script>
    // Highlight
    import hljs from 'highlight.js/lib/highlight';
    import bash from 'highlight.js/lib/languages/bash';
    import javascript from 'highlight.js/lib/languages/javascript';
    import 'highlight.js/styles/github.css';

    // Markdown
    import readme from '../../README.md';

    // Highlight config
    hljs.registerLanguage(
        'bash',
        bash,
    );

    hljs.registerLanguage(
        'javascript',
        javascript,
    );

    // App
    export default {
        name: 'v-app',
        components: {
            readme,
        },
        mounted() {

            this.$nextTick(
                () => {

                    this.initHighlight();
                    this.initReadmeLinks();

                },
            );

        },
        methods: {
            initHighlight() {

                const PRE = document.querySelectorAll(
                    'pre',
                );

                PRE.forEach(
                    block => hljs.highlightBlock(
                        block,
                    ),
                );

            },
            initReadmeLinks() {

                const links = document.querySelectorAll(
                    '.readme > article a',
                );

                for( var i = 0; i < links.length; i ++ ) {

                    links[ i ].setAttribute(
                        'target',
                        '_blank',
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
