<template>
  <div>
    <SiteNavbar />
    <DetailsBody />
  </div>
</template>

<script>
import SiteNavbar from "../components/SiteNavbar.vue";
import DetailsBody from "../components/DetailsBody.vue";

export default {
  setup() {},
  components: { SiteNavbar, DetailsBody },
};
</script>

<style lang="scss" scoped>
SiteFooter {
  background: #f4f4f4;
}
</style>
