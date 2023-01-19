import { createApp } from 'vue';
import App from './app.vue';
// import BrainButton from '@testbubble-ui/components/button'
import '@bubble-ui/theme-chalk/src/index.scss';
import BubbleUi from '@bubble-ui/components';

const app = createApp(App);
app.use(BubbleUi);
app.mount('#app');
