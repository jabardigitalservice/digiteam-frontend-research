import { configure, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import id from "@vee-validate/i18n/dist/locale/id.json";

export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  configure({
    generateMessage: localize({
      id,
    }),
  });

  setLocale('id');
});