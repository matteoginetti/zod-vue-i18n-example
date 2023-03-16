import { createApp } from 'vue';
import './style.css';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import messages from './i18n';
import { makeZodI18nMap } from 'zod-vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

z.setErrorMap(makeZodI18nMap(i18n));

i18n.global.mergeLocaleMessage('en', {
  errors: {
    invalidType: 'Expected {expected}, received {received}',
    invalidTypeReceivedUndefined: 'Mandadory',
    tooSmall: {
      string: {
        inclusive: 'Minumum length {minimum} characters',
      },
    },
  },
});

const app = createApp(App);

app.use(i18n);

app.mount('#app');
