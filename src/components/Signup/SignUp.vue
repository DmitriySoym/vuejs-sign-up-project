<template>
  <div class="form">
    <div class="form__title"><h1 class="form__title-text">Регистрация</h1></div>
    <form class="form__row" action="#">
      <label for="name" class="form__label">
        <FormInput
          id="login"
          :value="form.login"
          @input="form.login = $event.target.value"
          :type="login.type"
          :name="login.name"
          :placeholder="login.placeholder"
          @change="onInputChange($event, 'login')"
        />
        <ul class="errors" v-if="errors.login && errors.login.length">
          <li v-for="(error, index) in errors.login" :key="index" class="form__error">
            {{ error }}
          </li>
        </ul>
      </label>
      <label for="email" class="form__label">
        <FormInput
          id="email"
          :value="form.email"
          @input="form.email = $event.target.value"
          :type="email.type"
          :name="email.name"
          :placeholder="email.placeholder"
          @change="onInputChange($event, 'email')"
        />
        <ul class="errors" v-if="errors.email && errors.email.length">
          <li v-for="(error, index) in errors.email" :key="index" class="form__error">
            {{ error }}
          </li>
        </ul>
      </label>
      <label for="password" class="form__label">
        <FormInput
          id="password"
          :value="form.password"
          @input="form.password = $event.target.value"
          :type="password.type"
          :name="password.name"
          :placeholder="password.placeholder"
          @change="onInputChange($event, 'password')"
        />
        <svg class="form__input-swg">
          <use xlink:href="#eye-open"></use>
        </svg>
        <ul class="errors" v-if="errors.password && errors.password.length">
          <li v-for="(error, index) in errors.password" :key="index" class="form__error">
            {{ error }}
          </li>
        </ul>
      </label>
      <label for="repeatePassword" class="form__label">
        <FormInput
          id="repeatePassword"
          :value="form.repeatePassword"
          @input="form.repeatePassword = $event.target.value"
          :type="repeatePassword.type"
          :name="repeatePassword.name"
          :placeholder="repeatePassword.placeholder"
          @change="onInputChange($event, 'repeatePassword')"
        />
        <svg class="form__input-swg">
          <use xlink:href="#eye-open"></use>
        </svg>
        <ul class="errors" v-if="errors.repeatePassword && errors.repeatePassword.length">
          <li v-for="(error, index) in errors.repeatePassword" :key="index" class="form__error">
            {{ error }}
          </li>
        </ul>
      </label>
      <button class="form__btn" :disabled="!isFormValid" @click.prevent="signUp">Зарегистрироваться</button>
    </form>
  </div>
  <svg style="height: 0; width: 0; position: absolute; visibility: hidden">
    <symbol id="eye-open" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 7.33333C12.0584 7.34024 11.62 7.41039 11.1983 7.54167C11.3934 7.88472 11.4973 8.27205 11.5 8.66667C11.5 8.97308 11.4396 9.2765 11.3224 9.55959C11.2051 9.84269 11.0333 10.0999 10.8166 10.3166C10.5999 10.5333 10.3427 10.7051 10.0596 10.8224C9.7765 10.9396 9.47308 11 9.16667 11C8.77205 10.9973 8.38472 10.8934 8.04167 10.6983C7.77101 11.637 7.80256 12.637 8.13183 13.5568C8.46111 14.4765 9.07142 15.2693 9.87632 15.8229C10.6812 16.3765 11.6399 16.6629 12.6166 16.6413C13.5932 16.6198 14.5384 16.2916 15.3181 15.703C16.0979 15.1145 16.6727 14.2956 16.9611 13.3622C17.2496 12.4289 17.237 11.4284 16.9253 10.5026C16.6136 9.57678 16.0184 8.7725 15.2242 8.20369C14.43 7.63488 13.4769 7.33039 12.5 7.33333ZM24.355 11.3917C22.0954 6.98292 17.6221 4 12.5 4C7.37792 4 2.90333 6.985 0.645 11.3921C0.549684 11.5806 0.500023 11.7889 0.500023 12.0002C0.500023 12.2115 0.549684 12.4198 0.645 12.6083C2.90458 17.0171 7.37792 20 12.5 20C17.6221 20 22.0967 17.015 24.355 12.6079C24.4503 12.4194 24.5 12.2111 24.5 11.9998C24.5 11.7885 24.4503 11.5802 24.355 11.3917ZM12.5 18C8.38958 18 4.62125 15.7083 2.58625 12C4.62125 8.29167 8.38917 6 12.5 6C16.6108 6 20.3787 8.29167 22.4137 12C20.3792 15.7083 16.6108 18 12.5 18Z"
        fill="#8D99AE"
      />
    </symbol>
  </svg>
</template>
<script>
import FormInput from "../FormInput/FormInput.vue";
import useValidate from "../../assets/mixins/useValidate";
export default {
  mixins: [useValidate],
  components: { FormInput },
  name: "SignUpForm",
  emits: {
    signUp: true,
  },
  data() {
    return {
      form: {
        login: "",
        email: "",
        password: "",
        repeatePassword: "",
      },
      login: {
        type: "text",
        name: "login",
        placeholder: "Логин:",
      },
      email: {
        type: "text",
        name: "email",
        placeholder: "Email:",
      },
      password: {
        type: "text",
        name: "password",
        placeholder: "Пароль:",
      },
      repeatePassword: {
        type: "text",
        name: "repeatePassword",
        placeholder: "Подтвердить пароль:",
      },
      errors: {},
    };
  },

  computed: {
    isFormValid() {
      return this.validateForm(this.form).formIsValid;
    },
  },

  methods: {
    signUp(e) {
      this.$emit("signUp", true);
    },

    onInputChange(e, inputName) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(inputName, inputValue);
      if (inputErrors && inputErrors.length) {
        this.errors[inputName] = inputErrors;
      } else {
        this.errors[inputName] = null;
      }
      this.setInputClass(inputName);
    },

    setInputClass(inputName) {
      if (this.errors[inputName]) {
        document.getElementById(inputName).classList.add("not-valid");
      } else {
        document.getElementById(inputName).classList.remove("not-valid");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* .form {
  display: flex;
  padding: $p10 $p6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $p4;
  border-radius: $p4;
  border: 1px solid rgba(141, 153, 174, 0.4);

  background: $white;
  box-shadow: 0px 0px 40px 0px rgba(141, 153, 174, 0.05);

  &__title-text {
    color: $black-blue;
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
  }

  &__row {
    display: flex;
    flex-direction: column;
  }

  &__label:nth-child(4) {
    margin-bottom: $p4;
  }

  &__error {
    max-width: 25.7rem;
    padding: 5px 0;
    text-align: start;
    color: red;
  }

  &__btn {
    display: flex;
    height: 50px;
    padding: $p1 $p4;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid $blue;
    background: $blue;
    box-shadow: 0px 0px 10px 0px rgba(141, 153, 174, 0.2);
    color: $white;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: normal;
  }

  &__btn:disabled {
    cursor: not-allowed;
  }

  &__label {
    position: relative;
    margin-bottom: $p2;
  }

  &__input-swg {
    position: absolute;
    right: 30px;
    top: 13px;
    width: 25px;
    height: 24px;
    cursor: pointer;
  }
}
.not-valid {
  border-color: red;
}

@media screen and (max-width: 1170px) {
  .form {
    margin: 0 auto;
  }
}
@media screen and (max-width: 500px) {
  .form {
    width: 100%;
    height: 100%;
    padding: 0;
    border-radius: 0;
  }
}
@media screen and (max-width: 375px) {
  .form {
    &__row {
      width: 100%;
      padding: 0 7px;
    }
  }
} */
</style>
