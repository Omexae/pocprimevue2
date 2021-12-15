import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


import 'regenerator-runtime/runtime'
import 'core-js';
import 'whatwg-fetch'
/*import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';*/

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice';
import Chart from 'primevue/chart';
import 'primeflex/primeflex.css';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ColorPicker from 'primevue/colorpicker';
import Dropdown from 'primevue/dropdown';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import Sidebar from 'primevue/sidebar';



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
/*import 'primeflex/src/_variables.scss';
import 'primeflex/src/_grid.scss';
import 'primeflex/src/_formlayout.scss';
import 'primeflex/src/_display.scss';
import 'primeflex/src/_text.scss';
import 'primeflex/src/flexbox/_flexbox.scss';
import 'primeflex/src/_spacing.scss';
import 'primeflex/src/_elevation.scss';*/


//import Dialog from 'primevue/dialog';

Vue.use(PrimeVue);
Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('Chart', Chart);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('ColorPicker', ColorPicker);
Vue.component('Dropdown', Dropdown)
Vue.component('Knob', Knob)
Vue.component('Listbox', Listbox)
Vue.component('SelectButton', SelectButton)
Vue.component('ScrollPanel', ScrollPanel)
Vue.component('Sidebar', Sidebar)

