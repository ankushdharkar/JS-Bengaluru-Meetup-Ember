# sample-app

Simple app used to demonstrate how to use Ember

## IMPORTANT:

To use **pods** in your project:

* Enable pods in `enviroment.js` by putting ```podModulePrefix: '<app-name>/pods'```, like [here](https://github.com/ankushdharkar/JS-Bengaluru-Meetup-Ember/blob/3dbddb5a71b804e82a0e74335bf6e2ab74a192da/config/environment.js#L7)

* Create a `pods` folder manually in your `app` folder ,like [here](https://github.com/ankushdharkar/JS-Bengaluru-Meetup-Ember/tree/3dbddb5a71b804e82a0e74335bf6e2ab74a192da/app/pods)

* Install `ember-component-css` addon from terminal by running:
	```ember install ember-component-css```

* Include in `app.css`, line ```@import 'pod-styles.css';``` [here](https://github.com/ankushdharkar/JS-Bengaluru-Meetup-Ember/blob/3dbddb5a71b804e82a0e74335bf6e2ab74a192da/app/styles/app.css#L1)

* Now, for _EVERY_ component you generate, add the `--pod` flag:
	```ember g component <comp-name> --pod```

**_Sidenote_**: _There is a way where the pod becomes default by putting in a config file, but not mentioned at the demo_

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd sample-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
