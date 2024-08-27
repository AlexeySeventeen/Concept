import {createApp} from 'vue';
import App from './App.vue';
import components from './components';
import './index.css';
import routes from './components/routes';
import store from './components/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myModal from './components/directives/myModal';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.directive('myModal', myModal).use(AOS.init()).use(routes).use(store).mount('#app');
