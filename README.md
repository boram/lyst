# React Native Demo App

This demo app displays the recent posts from

```
http://api.massrelevance.com/MassRelDemo/kindle.json
```

and periodically refreshes the content. However, this endpoint does not
actually emit content after December 2017, so a 'Last updated at' timestamp
is displayed in the header to provide some confidence that refetches are
occurring.

## Building and Running

To build and run the project on the development server:
```sh
$ yarn start
```

Once the server is running, you will be prompted to launch the project in an
Android or iOS emulator.

To run the project on a device, use the Expo app. See https://expo.io for more
details.

## Testing

To run the test suite:
```sh
$ yarn test
```

## Configuration

The configuration parameters for this app live as JS constants in
[./src/config.js](https://github.com/boram/lyst/blob/master/src/config.js).

The parameters and their defaults are:

```js
const FEED_URL = "http://api.massrelevance.com/MassRelDemo/kindle.json";
const POSTS_COUNT = 20;
const UPDATE_INTERVAL = 3000;
```
