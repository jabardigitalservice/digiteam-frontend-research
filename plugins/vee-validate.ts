import { defineRule } from "vee-validate";
// import AllRules from "@vee-validate/rules";

// export default defineNuxtPlugin((nuxtApp) => {
//   Object.keys(AllRules).forEach((rule) => {
//     defineRule(rule, AllRules[rule]);
//   });
// });

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  });

  defineRule("min", (value: string | any[], [limit]: any) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `This field must be at least ${limit} characters`;
    }
    return true;
  });
});
