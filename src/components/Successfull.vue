<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="m-auto text-center modal rounded-md">
      <div class="m-auto success w-60 h-52 p-5 mt-7">
        <img src="../assets/images/image 11.png" class="m-auto" />
      </div>
      <p class="text-xl font-semibold text-dream-primary mt-11">
        Booking successful
      </p>
      <p class="text-base font-normal text-gray-2 mt-3">
        Congratulations your reservation has been made. You will be notified 2
        days prior the date.
      </p>
      <button
        class="bg-blue-1 text-white text-center mt-11 w-full py-3 px-5 rounded-md"
        @click="goToTrips"
      >
        View trip
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const goToTrips = () => {
      router.push("/trips");
    };
    return { goToTrips };
  },
};
</script>

<style lang="scss" scoped>
.success {
  border-radius: 10px;
  background: rgba(111, 207, 151, 0.2);
}

.modal {
  width: 400px;
  height: 500px;
  padding: 20px;
  margin: 100px auto;
  background-color: white;
}

.backdrop {
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
</style>
