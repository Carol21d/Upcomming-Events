<script setup>
import { ref } from 'vue';
import { useLoginStore } from '../../stores/loginStore'
import { useRouter } from 'vue-router';

const router = useRouter()
const useloginstore = useLoginStore()

const props = defineProps({
  title: {
    type: String,
    default: 'login'
  }
})


const username = ref("")
const password = ref("")

const submit = async () => {

  username.value.length || password.value.length < 4 ? alert("Fields must contain at least 8 characters") : null;

  let test = await useloginstore.loginSession(username.value, password.value);

  if (test.status == 202) router.push({ name: 'sessionLayout' });

};

const register = async () => {
  let test = await useloginstore.register();
}

function required(value) {
  return !!value || 'This field is required'
}

function counter(value) {
  return value.length < 20 || 'Max 20 characters'
}


</script>

<template>
  <div class="login-container">

    <img class="login-container__img" src="../../assets/img/people.png" alt="icon-person" />

    <!-- <div class="login-container__title">
      <h1>{{ props.title }}</h1>
    </div> -->

    <div class="login-container__inputs">

      <v-text-field class="login-container__inputs__textField" label="'User Name'" v-model="username" maxlength="20"
        :rules="[required, counter]" color="rgb(54, 127, 190)" required clearable counter></v-text-field>

      <v-text-field class="login-container__inputs__textField" label="'Password'" v-model="password" type="password"
        maxlength="20" :rules="[required, counter]" color="rgb(54, 127, 190)" required clearable counter></v-text-field>

    </div>

    <div class="login-container__button">

      <v-btn color="#F5BD02" width="28em" variant="elevated" type="submit" @click="submit()">

        Login to the account

      </v-btn>

    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  display: flex;
}

.login-container {
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: hidden;
  border-radius: 5%;
  row-gap: 5%;

  &__img {
    width: 6em;
  }

  &__inputs {
    width: 90%;
    color: black;

    &__textField {
      margin-block: 6%
    }
  }

  &__button {
    width: 80%;
  }
}
</style>