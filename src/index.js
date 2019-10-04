'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './modules/signIn';
import Header from "./modules/header";
import { Route, BrowserRouter } from 'react-router-dom';


import './scss/style.scss';
import getData from './modules/getData';
import renderCurces from './modules/renderCurces';
import courseInfo from './modules/courseInfo';

const routing = (
    <BrowserRouter>
        <div>
            <Route  path={'/'} component={SignIn}></Route>
            <Route  path={'/header'} component={Header}></Route>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<SignIn />, document.getElementById('sign-in'));

function changeBg(img) {
    if (confirm('Точно сменить фон?')) {
        document.body.style.backgroundImage = 'url(' + img.src + ')';
    } else {
        alert('Оставляю как и было');
    }
}

(async function () {
    const data = await getData();
    renderCurces(data);
    courseInfo();
}());
