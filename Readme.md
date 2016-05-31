# Ractive animate.css Transitions

Transitions for [Ractive](http://www.ractivejs.org/), 
using [animate.css](https://daneden.github.io/animate.css/)

This library lets you use any of the animate.css transitions as an Ractive intro or outro 
[transition](http://docs.ractivejs.org/latest/transitions) using the `animate:` prefix:

```html
    <h2 intro="animate:TRANSITION_NAME">
      RAD
    </h2>
```

Full list of transitions are [here](https://daneden.github.io/animate.css/).


**Based on a gist from [cfenzo](https://gist.github.com/cfenzo/63576935f3b549280f1b)**

----

## Usage

_Note: these transitions are a self-registering CommonJS module, and in the browser 
requires a module system such as Webpack or Browserify._

    npm install ractive-animatecss

### ES5:

```js
var Ractive = require('ractive');
require('ractive-animatecss');
```

### ES6/2015+:

```js
import Ractive from 'ractive';
import 'ractive-animatecss';
```

### In Ractive template:

```html
    <div intro="animate:bounceInDown" outro="animate:fadeOut">
      Cool
    </div>
```

