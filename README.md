# Vue Fake3d image effect

[DEMO](https://luxdamore.github.io/vue-fake3d-image-effect)

## Installation

```bash

    # Deps
    npm install --save @luxdamore/vue-fake3d-image-effect

```

### Usage

#### As component

```js

    // Component
    import { Fake3dImageEffect } from '@luxdamore/vue-fake3d-image-effect';

    // Install
    Vue.component(
        Fake3dImageEffect.name,
        Fake3dImageEffect
    );

```

#### As plugin

```js

    // Plugin
    import Fake3dImageEffect from '@luxdamore/vue-fake3d-image-effect';

    // Install
    Vue.use(
        Fake3dImageEffect
    );

```

#### Browser's way

```html

    <!doctype html>
    <html>
        <head>

            <!-- Fake3dImageEffect style -->

                <!-- Old way -->
                <link rel="stylesheet" href="../dist/Fake3dImageEffect.css" />
                <!-- end old way -->

                <!-- New way -->
                <link rel="preload" href="./dist/Fake3dImageEffect.css" as="style" onload="this.rel='stylesheet'" />
                <link rel="preload" href="./dist/Fake3dImageEffect.umd.min.js" as="script" />
                <!-- end new way -->

            <!-- end Fake3dImageEffect style -->

        </head>
        <body>

            <!--
                Others script (ex. VueJs) and html.
            -->

            <!-- Fake3dImageEffect script -->
                <script src="./dist/Fake3dImageEffect.umd.min.js"></script>
            <!-- end Fake3dImageEffect script -->

        </body>
    </html>

```

#### Markup

_Use it just one time in the main file of your project or in every views where you want it._

```html

    <fake3d-image-effect
            v-once
            id="about"
            class="about"
            image="/img/about/about.jpg"
            image-map="/img/about/about-map.jpg"
        >
            <template #overlay>
                <span class="overlay overlay__1 overlay__blue" />
            </template>

            <template #content>
                <div class="container">
                    <h2>
                        Stare out cat door then go back inside
                    </h2>
                    <p>
                        Cat ipsum dolor sit amet, find box a little too small and curl up with fur hanging out,lick left leg for ninety minutes, still dirty. Stand in doorway, unwilling to chose whether to stay in or go out unwrap toilet paper i vomit in the bed in the middle of the night. Find empty spot in cupboard and sleep all day suddenly go on wild-eyed crazy rampage but walk on keyboard demand to have some of whatever the human is cooking, then sniff the offering and walk away. Cat slap dog in face lick plastic bags so cats woo and refuse to leave cardboard box and wack the mini furry mouse if it fits, i sits.
                    </p>
                </div>
            </template>
        </fake3d-image-effect>

```

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## Changelog

Details changes for each release are documented in the [release notes](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/CHANGELOG.md).

### Donate me a beer, we can be good friends

_If you feel generous and want to give me a [beer](https://github.com/LuXDAmore/vue-cursor-fx/blob/master/.github/FUNDING.yml)._

### License

[MIT](http://opensource.org/licenses/MIT) ~ Copyright (c) 2019-present Luca Iaconelli

#### Inspired by

[Fake3dImageEffect by Tympanus](https://tympanus.net/codrops/2019/02/20/how-to-create-a-fake-3d-image-effect-with-webgl/)
