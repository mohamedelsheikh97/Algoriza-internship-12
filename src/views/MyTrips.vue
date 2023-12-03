<template>
  <div>
    <SiteNavbar></SiteNavbar>
    <div class="trips-body min-h-screen">
      <div class="container">
        <div class="w-9/12 m-auto pt-11 mb-10">
          <h2 class="text-3xl font-semibold">My trips</h2>
          <div
            class="lg:flex w-full justify-between bg-white p-5 rounded-md mt-7"
            v-for="index in 2"
            :key="index"
          >
            <div class="flex">
              <img
                src="../assets/images/Rectangle 32.png"
                alt=""
                class="w-1/2"
              />
              <div class="p-5">
                <p class="text-lg font-medium text-dream-primary mb-2">
                  Lakeside Motel Warefront
                </p>
                <p class="text-sm font-normal text-gray-2 mb-5">
                  4.5 (1200 reviews)
                </p>
                <p class="text-sm font-normal text-red-500 mb-2">
                  Non refundable
                </p>
                <p class="text-sm font-normal text-gray-2 mb-2">
                  Check in: Sunday, March 18, 2022
                </p>
                <p class="text-sm font-normal text-gray-2 mb-2">
                  Check out: Tuesday, March 20, 2022
                </p>
                <p class="text-sm font-normal text-gray-2">2 night stay</p>
              </div>
            </div>
            <div class="flex flex-col-reverse pricing">
              <button
                class="bg-blue-1 text-white text-center mt-4 py-3 px-5 rounded-md block"
              >
                view trip details
              </button>
              <p class="text-sm font-light">Includes taxes and fees</p>
              <div class="flex justify-end align-middle">
                <s class="mr-2 text-sm font-medium text-red-500">$150</s
                ><span class="text-xl font-medium">$130</span>
              </div>
            </div>
          </div>
        </div>
        <Covid></Covid>
        <SiteFooter></SiteFooter>
      </div>
    </div>
  </div>
</template>

<script>
import SiteNavbar from "../components/SiteNavbar.vue";
import Covid from "../components/Covid.vue";
import SiteFooter from "../components/SiteFooter.vue";
export default {
  components: { SiteNavbar, Covid, SiteFooter },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  align-items: end;
}

.pricing div {
  align-items: center;
}

.trips-body {
  background: #f4f4f4;
}
</style>
