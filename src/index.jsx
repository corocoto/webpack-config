import Post from '@models/Post';
import './styles/style';
import './styles/less.less';
import './styles/scss.scss';

import  * as $ from 'jquery';

import json from './assets/data';
import xml from './assets/data.xml';
import WebpackIcon from './assets/webpack';

import React from 'react';
import {render} from 'react-dom';

import './babel';

const post = new Post('Webpack Post', WebpackIcon);

$('pre').html(post.toString());

console.log(post.toString());
console.log('XML:', xml);
console.log('JSON:', json);

const App = () =>(
    <>
        <h1>Hello world!</h1>
        <p>New text</p>
        <div className="logo" />
        <hr />
        <pre />
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </>);

render(<App/>, document.getElementById('app'));