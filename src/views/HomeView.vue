<script>
import SiteNavbar from "../components/SiteNavbar.vue";
import hero from "../components/hero.vue";
import Covid from "../components/Covid.vue";
import HomeBody from "../components/HomeBody.vue";
import SiteFooter from "../components/SiteFooter.vue";
export default {
  components: { SiteNavbar, hero, Covid, HomeBody, SiteFooter },
  setup() {},
};
</script>

<template>
  <SiteNavbar />
  <hero />
  <div class="container">
    <Covid class="mt-16" />
  </div>

  <HomeBody />
  <SiteFooter />
</template>
