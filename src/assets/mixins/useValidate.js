const EMAIL_VALIDATION = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

const useValidate = {
  data() {
    return {
      validationRules: {
        login: {
          rules: [
            (value) =>
              value.length > 2 || "Логин должен быть не менее 3 символов",
            (value) =>
              value.length < 21 || "Логин должен быть не более 20 символов",
          ],
        },
        email: {
          rules: [
            (value) =>
              EMAIL_VALIDATION.test(value) ||
              "Пожалуйста, введите правильный адрес электронной почты",
          ],
        },
        password: {
          rules: [
            (value) =>
              value.length > 2 || "Пароль должен быть не менее 3 символов",
            (value) =>
              value.length < 21 || "Пароль должен быть не более 20 символов",
          ],
        },
        repeatePassword: {
          rules: [
            (value) =>
              value.length > 2 || "Пароль должен быть не менее 3 символов",
            (value) =>
              value.length < 21 || "Пароль должен быть не более 20 символов",
            (value) => value === this.form.password || "Пароли не совпадают",
          ],
        },
      },
    };
  },
  methods: {
    validateField(inputName, value) {
      return this.validationRules[inputName].rules
        .filter((rule) => {
          const isValid = rule(value);

          if (isValid !== true) {
            return isValid;
          }
        })
        .map((rule) => rule(value));
    },

    validateForm(form) {
      const formErrors = {};
      let formIsValid = true;

      for (let property in form) {
        const errors = this.validateField(property, form[property]);

        if (errors.length) {
          formIsValid = false;
        }

        formErrors[property] = errors;
      }

      formErrors.formIsValid = formIsValid;

      return formErrors;
    },
  },
};

export default useValidate;
