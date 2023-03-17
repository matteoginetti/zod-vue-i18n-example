import { createApp } from 'vue';
import './style.css';
import { createI18n, I18n } from 'vue-i18n';
import App from './App.vue';
import messages from './i18n';
import { makeZodI18nMap } from 'zod-vue-i18n';
import en from 'zod-vue-i18n/locales/en.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
});

i18n.global.setLocaleMessage('en', messages);

z.setErrorMap(makeZodI18nMap(i18n));

i18n.global.mergeLocaleMessage('en', {
  errors: {
    ...en,
  },
});

const app = createApp(App);

app.use(i18n);
app.mount('#app');
