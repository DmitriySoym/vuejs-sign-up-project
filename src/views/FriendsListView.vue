<template>
  <div class="friends">
    <h1 class="friends__title">Список друзей</h1>
    <h3 class="friends__search">Поиск друга:</h3>
    <Input type="search" name="search" placeholder="Найти по имени" @input="findPeoples" />
    <ul>
      <li v-for="(name, index) in friendsList" :key="index" class="friends__item" @click="selectFriend(name)">
        {{ name }}
      </li>
    </ul>
    <div class="friends__quantity">Всего друзей: {{ friendsNumber }}</div>
    <div>
      <Input type="text" v-model="newFriend" name="add-friend" placeholder="добавить друга" class="new-person" :value="newFriend" @input="addFriendName" />
      <div v-if="showNotification"><span class="red">Слишком длинное имя</span></div>
      <button class="friends__add-btn" :class="newFriend.length > 10 ? 'red' : ''" @click="addPerson" :disabled="newFriendEmptyName">Добавить друга</button>
    </div>
    <div class="friends__choosen">
      <span>Выбрано имя:</span> <span class="friends__choosen-name">{{ selectedUser }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Input from "../components/FormInput/FormInput.vue";
export default {
  name: "FriendsList",
  components: { Input },
  data() {
    return {
      newFriend: "",
      selectedFriend: null,
      showNotification: false,
    };
  },
  computed: {
    ...mapGetters(["friendsNumber", "friendsList"]),

    newFriendEmptyName() {
      return this.newFriend === "";
    },

    selectedUser() {
      if (this.selectedFriend) {
        return this.selectedFriend;
      }
      return "Ничего не выбрано";
    },
  },

  methods: {
    ...mapActions(["setFriendsFilter", "addNewFriend"]),

    findPeoples(event) {
      this.setFriendsFilter(event.target.value);
    },
    addFriendName(event) {
      this.newFriend = event.target.value;
    },

    addPerson() {
      this.newFriend = this.newFriend[0].toUpperCase() + this.newFriend.slice(1);
      this.addNewFriend(this.newFriend);
      this.newFriend = "";
    },

    selectFriend(e) {
      this.selectedFriend = e;
    },
  },

  watch: {
    newFriend(value) {
      if (value.length > 10) {
        this.showNotification = true;
      } else {
        this.showNotification = false;
      }
    },
  },
};
</script>
