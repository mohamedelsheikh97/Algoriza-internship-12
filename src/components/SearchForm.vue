<template>
  <div class="search-form m-auto shadow-xl p-3 absolute">
    <form @submit.prevent="handleSubmit" class="lg:flex justify-between">
      <label for="">
        <img
          src="../assets/images/search 1.svg"
          alt="Search Icon"
          class="search-icon"
        />
        <select
          name=""
          id=""
          placeholder="where are you going"
          required
          v-model="formData.dest_id"
          ref="cityOption"
        >
          <option value="" disabled selected>where are you going</option>
          <option
            v-for="city in filteredCities"
            :key="city.dest_id"
            :value="city.dest_id"
            class="text-black"
          >
            {{ city.city_name }}
          </option>
        </select>
      </label>
      <label class="form-checkin">
        <input
          required
          type="date"
          v-model="formData.arrival_date"
          placeholder="check in date"
          :min="formattedTomorrow"
        />
      </label>
      <label class="form-checkout">
        <input
          required
          type="date"
          v-model="formData.departure_date"
          placeholder="check out date"
          :min="departureDate"
        />
      </label>
      <label class="form-guests">
        <img
          src="../assets/images/user-square 1.svg"
          alt=""
          class="search-icon" />
        <input
          type="text"
          placeholder="Guests"
          required
          v-model="formData.adults"
      /></label>
      <label class="form-rooms">
        <img
          src="../assets/images/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg"
          alt=""
          class="search-icon" />
        <input
          type="text"
          placeholder="Rooms"
          required
          v-model="formData.room_qty"
      /></label>
      <input
        type="submit"
        value="Search"
        class="cursor-pointer"
        @click="$emit(getData)"
      />
    </form>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import axios from "axios";
import { ref, onMounted, watchEffect } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useVuelidate } from "@vuelidate/core";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import AboutView from "../views/AboutView.vue";

export default {
  components: { VueDatePicker, AboutView },
  setup() {
    const router = useRouter();
    const date = ref();
    const cities = ref([]);
    const datalist = ref(null);
    const filteredCities = ref([]);
    const token = localStorage.getItem("token");
    const cityOption = ref("");
    const formData = ref({
      dest_id: null,
      arrival_date: "",
      departure_date: "",
      adults: null,
      room_qty: null,
    });

    onBeforeRouteLeave((to, from, next) => {
      localStorage.setItem("searchData", JSON.stringify(formData.value));
      next();
    });

    //arrival date and depature date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
    const day = tomorrow.getDate().toString().padStart(2, "0");

    const formattedTomorrow = ref(`${year}-${month}-${day}`);

    const departureDate = computed(() => {
      const date = new Date(formData.value.arrival_date);
      date.setDate(date.getDate() + 1);

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      return `${year}-${month}-${day}`;
    });

    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
      params: { query: "egypt" },
      headers: {
        "X-RapidAPI-Key": "45e95f0087msheaf512a2c0af8d6p18b516jsna52c5e2b8b3b",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    onMounted(async () => {
      try {
        const response = await axios.request(options);
        const data = response.data.data;
        console.log(cityOption.value);
        filteredCities.value = data.filter(
          (item) => (item.search_type = "city")
        );
      } catch (error) {
        console.error(error);
      }
    });

    const handleSubmit = () => {
      if (
        !(
          Number.isNaN(Number(formData.value.adults)) &&
          Number.isNaN(Number(formData.value.room_qty))
        )
      ) {
        if (token) {
          router.push({
            name: "search",
            query: { data: JSON.stringify(formData.value) },
          });
        } else {
          router.push("/signin");
        }
      }
    };

    return {
      options,
      cities,
      date,
      formData,
      handleSubmit,
      datalist,
      router,
      filteredCities,
      formattedTomorrow,
      departureDate,
      cityOption,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  border-radius: 8px;
  background-color: white;
}

label {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
}

input,
select {
  font-family: Work Sans;
  background-color: #f2f2f2;
  color: #4f4f4f;
  font-size: 13px;
  font-family: sf Dis;
  padding: 10px 15px 10px 40px;
  width: 148px;
}

select {
  width: 206px;
}

input[type="submit"] {
  background-color: #2f80ed;
  color: white;
  text-align: center;
  padding: 8px 18px;
  width: 134px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
}
</style>
