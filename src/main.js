import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

import FlexInfo from './components/Info.vue';

Vue.config.productionTip = false;

Vue.component('app-info-flex', FlexInfo);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
