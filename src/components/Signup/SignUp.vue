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
          :class="{ not_valid: showLoginErrors }"
          @change="onInputChange($event, 'login')"
        />
        <ul class="errors" v-if="showLoginErrors">
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
          :class="{ not_valid: showEmailErrors }"
          @change="onInputChange($event, 'email')"
        />
        <ul class="errors" v-if="showEmailErrors">
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
          :class="{ not_valid: showPasswordErrors }"
          @change="onInputChange($event, 'password')"
        />
        <svg class="form__input-swg" @click="togglePasswardIcon">
          <use :xlink:href="passwardIcon"></use>
        </svg>
        <ul class="errors" v-if="showPasswordErrors">
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
          :class="{ not_valid: showRepeatePasswordErrors }"
          :placeholder="repeatePassword.placeholder"
          @change="onInputChange($event, 'repeatePassword')"
        />
        <svg class="form__input-swg" @click="toggleRepeatPasswardIcon">
          <use :xlink:href="repeatPasswardIcon"></use>
        </svg>
        <ul class="errors" v-if="showRepeatePasswordErrors">
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
    <symbol id="eye-close" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 19 19" fill="none">
      <path
        d="M19.8126 16.7188L1.12506 2.10969C1.0738 2.06865 1.01497 2.03811 0.951908 2.01981C0.888848 2.00151 0.822802 1.99581 0.75754 2.00304C0.692277 2.01026 0.629077 2.03027 0.571548 2.06192C0.514019 2.09357 0.463287 2.13624 0.422249 2.1875L0.109749 2.57781C0.0686144 2.62909 0.0379942 2.68797 0.0196405 2.75109C0.00128684 2.81421 -0.00444019 2.88033 0.00278716 2.94567C0.0100145 3.011 0.0300544 3.07427 0.06176 3.13186C0.0934657 3.18944 0.136215 3.24021 0.187561 3.28125L18.8751 17.8903C18.9263 17.9314 18.9852 17.9619 19.0482 17.9802C19.1113 17.9985 19.1773 18.0042 19.2426 17.997C19.3078 17.9897 19.371 17.9697 19.4286 17.9381C19.4861 17.9064 19.5368 17.8638 19.5779 17.8125L19.8904 17.4222C19.9315 17.3709 19.9621 17.312 19.9805 17.2489C19.9988 17.1858 20.0046 17.1197 19.9973 17.0543C19.9901 16.989 19.9701 16.9257 19.9384 16.8681C19.9067 16.8106 19.8639 16.7598 19.8126 16.7188ZM9.27475 6.57719L13.4869 9.87031C13.4176 7.99719 11.8901 6.5 10.0001 6.5C9.75627 6.50046 9.51318 6.52633 9.27475 6.57719ZM10.7254 13.4231L6.51319 10.13C6.58287 12.0028 8.11037 13.5 10.0001 13.5C10.2438 13.4995 10.4869 13.4737 10.7254 13.4231ZM10.0001 5.5C13.0829 5.5 15.9091 7.21875 17.4354 10C17.0612 10.6845 16.599 11.317 16.0604 11.8813L17.2397 12.8031C17.8964 12.1007 18.4527 11.3108 18.8929 10.4559C18.9644 10.3145 19.0016 10.1583 19.0016 9.99985C19.0016 9.84139 18.9644 9.68516 18.8929 9.54375C17.1966 6.23719 13.8416 4 10.0001 4C8.85319 4 7.75912 4.21875 6.73037 4.58781L8.18069 5.72188C8.77256 5.5875 9.37881 5.5 10.0001 5.5ZM10.0001 14.5C6.91725 14.5 4.09131 12.7813 2.56475 10C2.93937 9.31552 3.40217 8.68314 3.94131 8.11906L2.76194 7.19719C2.10542 7.89953 1.54921 8.6893 1.10912 9.54406C1.03764 9.68547 1.00039 9.84171 1.00039 10.0002C1.00039 10.1586 1.03764 10.3148 1.10912 10.4563C2.80381 13.7628 6.15881 16 10.0001 16C11.1469 16 12.241 15.7797 13.2698 15.4122L11.8194 14.2784C11.2276 14.4125 10.6216 14.5 10.0001 14.5Z"
        fill="#8D99AE"
      />
    </symbol>
    <symbol id="eye-green" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 20 20" fill="none">
      <path
        d="M9.99998 6.11112C9.63197 6.11687 9.26668 6.17534 8.91526 6.28473C9.07782 6.57061 9.16437 6.89338 9.16665 7.22223C9.16665 7.47758 9.11635 7.73043 9.01864 7.96634C8.92092 8.20225 8.77769 8.4166 8.59713 8.59716C8.41657 8.77772 8.20222 8.92095 7.96631 9.01866C7.7304 9.11638 7.47755 9.16668 7.2222 9.16668C6.89335 9.16439 6.57058 9.07784 6.2847 8.91529C6.05916 9.69751 6.08545 10.5309 6.35984 11.2973C6.63424 12.0638 7.14283 12.7245 7.81358 13.1858C8.48433 13.6471 9.28323 13.8857 10.0971 13.8678C10.911 13.8499 11.6986 13.5763 12.3484 13.0859C12.9982 12.5954 13.4772 11.913 13.7176 11.1352C13.9579 10.3574 13.9475 9.52371 13.6877 8.75219C13.4279 7.98066 12.932 7.31042 12.2701 6.83642C11.6083 6.36241 10.8141 6.10866 9.99998 6.11112ZM19.8791 9.49307C17.9962 5.81911 14.2684 3.33334 9.99998 3.33334C5.73158 3.33334 2.00276 5.82084 0.120814 9.49341C0.0413845 9.65053 0 9.82413 0 10.0002C0 10.1762 0.0413845 10.3498 0.120814 10.507C2.0038 14.1809 5.73158 16.6667 9.99998 16.6667C14.2684 16.6667 17.9972 14.1792 19.8791 10.5066C19.9586 10.3495 20 10.1759 20 9.99984C20 9.82378 19.9586 9.65019 19.8791 9.49307ZM9.99998 15C6.57463 15 3.43436 13.0903 1.73852 10C3.43436 6.90973 6.57429 5.00001 9.99998 5.00001C13.4257 5.00001 16.5656 6.90973 18.2614 10C16.566 13.0903 13.4257 15 9.99998 15Z"
        fill="#31BF43"
      />
    </symbol>
  </svg>
</template>
<script>
import FormInput from "../FormInput/FormInput.vue";
import useValidate from "../../assets/mixins/useValidate";
import { mapActions } from "vuex";
export default {
  mixins: [useValidate],
  components: { FormInput },
  name: "SignUpForm",
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
        type: "password",
        name: "password",
        placeholder: "Пароль:",
      },
      repeatePassword: {
        type: "password",
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

    passwardIcon() {
      if (this.form.password && this.password.type === "text") return "#eye-green";

      if (!this.form.password) return "#eye-open";

      if (this.form.password) return "#eye-close";
    },

    repeatPasswardIcon() {
      if (this.form.repeatePassword && this.repeatePassword.type === "text") return "#eye-green";

      if (!this.form.repeatePassword) return "#eye-open";

      if (this.form.repeatePassword) return "#eye-close";
    },

    showLoginErrors() {
      return this.errors.login && this.errors.login.length && this.form.login;
    },

    showEmailErrors() {
      return this.errors.email && this.errors.email.length && this.form.email;
    },

    showPasswordErrors() {
      return this.errors.password && this.errors.password.length && this.form.password;
    },

    showRepeatePasswordErrors() {
      return this.errors.repeatePassword && this.errors.repeatePassword.length && this.form.repeatePassword;
    },
  },

  methods: {
    ...mapActions(["toggleAuth"]),

    signUp() {
      this.toggleAuth();
      this.$router.push("/auth-done");

      this.form.login = "";
      this.form.email = "";
      this.form.password = "";
      this.form.repeatePassword = "";
    },

    onInputChange(e, inputName) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(inputName, inputValue);
      if (inputErrors && inputErrors.length) {
        this.errors[inputName] = inputErrors;
      } else {
        this.errors[inputName] = null;
      }
    },

    togglePasswardIcon() {
      if (this.password.type === "password") return (this.password.type = "text");

      return (this.password.type = "password");
    },

    toggleRepeatPasswardIcon() {
      if (this.repeatePassword.type === "password") return (this.repeatePassword.type = "text");

      return (this.repeatePassword.type = "password");
    },
  },
};
</script>
Store,import auth from "@/store/auth";import auth from "@/store/auth";
