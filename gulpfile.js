
var gulp = require('gulp');

var opts = {
  pageDef: {
    adsByGoogle: false,
    title: 'Lucify iframe embed'
  },
  assetContext: 'lucify-iframe-embed/'
};

var builder = require('lucify-component-builder');
builder(gulp, opts);
