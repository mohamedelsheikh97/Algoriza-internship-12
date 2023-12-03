<template>
  <div class="relative mb-16">
    <header class="">
      <nav class="container flex justify-between align-middle py-6">
        <div class="logo w-72 cursor-pointer" @click="goHome">
          <img
            src="../assets/images/Vector.png"
            alt=""
            class="inline-flex mr-2"
          />
          <span class="text-white">my Dream Place</span>
        </div>
        <div class="links">
          <ul class="flex justify-between align-middle decoration-none">
            <li><a href="#" @click="goHome">home</a></li>
            <li><a href="#">discover</a></li>
            <li><a href="#">activities</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </div>
        <div class="flex profile">
          <img src="../assets/images/notification 1.svg" class="w-7" />
          <div class="rounded-full bg-white ml-3 w-10 text-center py-2">
            <i class="fa-solid fa-user fa-xl" style="color: #1443d2"></i>
          </div>
        </div>
      </nav>
    </header>
    <SearchForm class="search-form left-1/2" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import SearchForm from "./SearchForm.vue";
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
nav ul li {
  margin: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19.09px;
  letter-spacing: 2%;
  color: white;
  text-transform: capitalize;
}
.logo {
  width: 180px;
}
.logo img {
  width: 24px;
}
.logo span {
  font-size: 18px;
  font-weight: 500;
  line-height: 21.48px;
  letter-spacing: 2%;
}

header nav button {
  background-color: #2f80ed;
  border-radius: 6px;
  padding: 10px 18px;
  color: white;
  width: 92px;
  height: 40px;
}

header nav .links {
  width: 458px;
}

header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
  height: 200px;
}

.search-form {
  width: 70%;
  transform: translate(-50%, -50%);
}
</style>
