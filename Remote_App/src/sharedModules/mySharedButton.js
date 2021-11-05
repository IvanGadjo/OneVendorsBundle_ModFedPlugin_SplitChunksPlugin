import * as d3 from 'd3';

// create & fill elements
let d3Btn = document.createElement('button');
d3Btn.setAttribute('id','btn-d3');
d3Btn.appendChild(document.createTextNode('D3 Button'));

// append to the body
let container = document.getElementsByTagName('body');
container[0].appendChild(d3Btn);

// use d3
d3.select('#btn-d3').style('color','orange');   // change color of text to orange