'use strict';

const chai = require('chai');
const should = chai.should();

// const Universe = require('./athos-search-file.js');

describe('Should style: File', function() {
  it('has a known size of', function() {
    let universe = new Universe();
    universe.getSize().should.equal(25);
  });

});
