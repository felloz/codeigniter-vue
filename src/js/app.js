require("./bootstrap");

window.Vue = require("vue");

import Vue from "vue";


Vue.component('welcome', require('./components/Welcome.vue').default);

const app = new Vue({
	el: "#container"
});
