// src/js/scripts.js
import '../styles/main.scss' // Import styles

import $ from 'jquery'
import { appInfo, greet } from './modules/greet.js'
console.log(appInfo)
import handleButtonClick from './modules/buttonHandler.js'
console.log(greet('yo'))

handleButtonClick()
