'use strict';

import './scss/style.scss';
import getData from './modules/getData';
import renderCurces from './modules/renderCurces';
import courseInfo from './modules/courseInfo';
import loginUser from "./modules/loginUser";

(async function () {
    const data = await getData();
    renderCurces(data);
    courseInfo();

}());

loginUser();