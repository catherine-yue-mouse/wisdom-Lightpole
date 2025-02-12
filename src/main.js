import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'swiper/swiper-bundle.min.css'
import 'ant-design-vue/dist/antd.css';
import './assets/commentStyle/commentCss.less'

import router from './router'
const app = createApp(App);

app.use(Antd);
app.use(router);
app.mount('#app')
