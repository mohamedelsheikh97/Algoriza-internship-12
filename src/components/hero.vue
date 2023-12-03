<template>
  <div class="container hero">
    <div class="relative align-middle text-white">
      <img src="../assets/images/Rectangle 2.png" alt="" class="w-full" />
      <div class="slogan absolute top-1/2 left-1/2 text-center">
        <h1 class="mb-3">Enjoy Your Dream Vacation</h1>
        <p>
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <!--form-->
      <SearchForm class="serchForm left-1/2" />
    </div>
  </div>
</template>

<script setup>
import SearchForm from "./SearchForm.vue";
</script>

<style lang="scss" scoped>
.slogan {
  transform: translate(-50%, -50%);
}
.hero img {
  height: 500px;
}
.slogan h1 {
  font-size: 32px;
  line-height: 38.19px;
  font-weight: 700;
}

.slogan p {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 20%;
}

.serchForm {
  transform: translate(-50%, -50%);
  width: 80%;
}
</style>
