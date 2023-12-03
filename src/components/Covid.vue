<template>
  <div class="warning flex justify-start p-3 rounded-md">
    <img src="../assets/images/Group.svg" alt="" />
    <span class="text-dream-secondary text text-base"
      >Check the latest COVID-19 restrictions before you travel.
      <a href="">Learn more</a></span
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.warning {
  height: 72px;
  background-color: #fcefca;
  align-items: center;
}

.warning img {
  width: 32px;
  height: 32px;
  margin-right: 40px;
}

.warning a {
  color: #2f80ed;
}
</style>
