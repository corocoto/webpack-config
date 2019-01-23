import some from './some';
import $ from 'jquery';

$('.title').html('Some text');
console.log(some.avg(1,5,76,9,535));
console.log(some.max(1,5,76,9,535,14));

console.log(some.merge({
    a: 1
},{
    b: 2
}));

// import './css/style.css';
