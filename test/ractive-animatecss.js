'use strict';
let assert = require('assert');
let Ractive = require('ractive');
require('jsdom-global')();

require('../dist/ractive-animatecss.js');

describe('Ractive', () => {
  it('should self-register Ractive transitions', () => {
    assert(Ractive.transitions.animate, 'animate is not registered');
  });
});
