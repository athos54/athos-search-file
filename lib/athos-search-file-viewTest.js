'use strict';

const chai = require('chai');
const should = chai.should();

// const Universe = require('./athos-search-file-view.js');

describe('Should style: FileView', function() {
  it('has a known size of', function() {
    let universe = new Universe();
    universe.getSize().should.equal(25);
  });
});
