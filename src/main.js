import {createApp} from 'vue';
import App from './App.vue';
import components from './components';
import './index.css';
import routes from './components/routes';
import store from './components/store'

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(routes).use(store).mount('#app');
