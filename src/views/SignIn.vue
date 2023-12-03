<template>
  <div class="min-h-screen">
    <div class="container py-5">
      <div class="logo cursor-pointer w-40" @click="goHome">
        <img
          src="../assets/images/Vector.png"
          alt=""
          class="inline-flex mr-2"
        />
        <span class="text-dream-primary text-lg font-medium"
          >my Dream Place</span
        >
      </div>
      <div class="py-32">
        <div class="m-auto Signin-form p-5">
          <h2 class="text-center font-semibold text-3xl text-dream-primary">
            Sign in
          </h2>
          <div>
            <form @submit.prevent="handleSubmit">
              <label for="" class="text-sm font-medium text-dream-primary"
                >Email address</label
              >
              <input
                type="email"
                class="w-full mb-4"
                v-model="registerData.email"
                required
              />
              <label for="" class="text-sm font-medium text-dream-primary"
                >Password</label
              >
              <input
                type="password"
                class="w-full mb-4"
                v-model="registerData.password"
                required
              />
              <input
                type="submit"
                value="sign in"
                class="bg-blue-1 text-white text-center w-full py-3 px-5 rounded-md mt-4 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "../router";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const registerData = ref({ email: "", password: "" });
    const token = ref("");
    const handleSubmit = () => {
      token.value = btoa(registerData.value.email);
      localStorage.setItem("token", token.value);
      console.log(token.value);
      router.push("/");
    };
    return { token, registerData, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.Signin-form {
  width: 440px;
}

.Signin-form input {
  border-radius: 4px;
  background: var(--Gray-6, #f2f2f2);
  padding: 11px;
}

input[type="submit"] {
  border-radius: 6px;
  background: #2f80ed;
}
</style>
