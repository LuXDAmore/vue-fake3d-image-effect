# Vue Fake3d image effect

[DEMO](https://luxdamore.github.io/vue-fake3d-image-effect)

A fake 3D Image Effect with WebGL - w/ VueJS - SSR Compatible

## Installation

This package is available on npm.

```bash

    # Save it as a dep
    npm install --save @luxdamore/vue-fake3d-image-effect

```

### Usage

#### As a component

```js

    // Component
    import { Fake3dImageEffect } from '@luxdamore/vue-fake3d-image-effect';

    // Install
    Vue.component(
        Fake3dImageEffect.name,
        Fake3dImageEffect
    );

```

#### As a plugin

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

```html

    <fake3d-image-effect
        v-once
        centered
        fill-height-content
        tag="div"
        image="/imgs/about.jpg"
        image-map="/imgs/about-map.jpg"
    >
        <div class="container">
            <h2>
                Stare out cat door then go back inside
            </h2>
            <p>
                Cat ipsum dolor sit amet, find box a little too small and curl up with fur hanging out,lick left leg for ninety minutes, still dirty. Stand in doorway, unwilling to chose whether to stay in or go out unwrap toilet paper i vomit in the bed in the middle of the night. Find empty spot in cupboard and sleep all day suddenly go on wild-eyed crazy rampage but walk on keyboard demand to have some of whatever the human is cooking, then sniff the offering and walk away. Cat slap dog in face lick plastic bags so cats woo and refuse to leave cardboard box and wack the mini furry mouse if it fits, i sits.
            </p>
        </div>
    </fake3d-image-effect>

```

### Options

#### Slots

```bash

    # Availables
    slot="default"  # Add some content
    slot="overlay"  # Add an overlay between the default content and the background image
    slot="footer"   # Add a footer to the component

```

#### Props

| Attribute | Type | Default | Required | About |
|:--------------------:|--------------------|:-------:|:--------:|-------------------------------------|
| image | String | null | true | The img-src path |
| image-map | String | null | true | The img-src-map path |
| horizontal-threshold | String, Number | 18 | false | Sensibility for the X-ax |
| vertical-threshold | String, Number | 23 | false | Sensibility for the Y-ax |
| centered | Boolean | false | false | text-align: center; |
| fill-height-content | Boolean | false | false | height: 100%; for the default slot. |
| width | String | 100% | false | width of the component |
| height | String | 100vh | false | height of the component |

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## Changelog

Details changes for each release are documented in the [release notes](https://github.com/LuXDAmore/vue-fake3d-image-effect/blob/master/CHANGELOG.md).

### License

[MIT](http://opensource.org/licenses/MIT) // Copyright (©) 2019-present [Luca Iaconelli](https://lucaiaconelli.it)

#### Are you feeling generous today?  :)

You can donate me a beer, we can be good friends
__[Paypal](https://www.paypal.me/luxdamore) // [Patreon](https://www.patreon.com/luxdamore)__

_It's always a good day to be magnanimous - cit_

#### Inspired by

[Fake3dImageEffect by Tympanus](https://tympanus.net/codrops/2019/02/20/how-to-create-a-fake-3d-image-effect-with-webgl/)
_Check `Preparing the image` section for how to do the `images-mapping`_
