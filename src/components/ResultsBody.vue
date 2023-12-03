<template>
  <div>
    <div class="container">
      <div class="flex">
        <!--sideBar (filters)-->
        <div class="mr-10">
          <div class="property-name px-4 py-5 mb-7">
            <p class="text-dream-primary text-base font-medium mb-3">
              Search by property name
            </p>
            <label class="form-property">
              <input
                type="text"
                placeholder="eg. Beach westpalm"
                v-model="propertyName"
            /></label>
          </div>

          <p class="p text-lg font-semibold text-dream-secondary ml-5 mb-5">
            Filter by
          </p>
          <div class="filter-by">
            <div class="budget px-5 mb-4">
              <p class="text-dream-primary text-base font-medium">
                Your budget ber day
              </p>
            </div>
            <div class="px-5">
              <div py-3>
                <label
                  for="filterBy"
                  class="text-sm font-normal text-dream-secondary mb-4"
                  ><input
                    type="radio"
                    name="filterBy"
                    class="mr-2"
                    value="0-200"
                    v-model="minMaxPrice"
                    @change="getByBudget"
                  />$0 - $ 200</label
                >
              </div>
              <div>
                <label
                  for="filterBy"
                  class="text-sm font-normal text-dream-secondary mb-4"
                  ><input
                    type="radio"
                    name="filterBy"
                    class="mr-2"
                    value="200-500"
                    v-model="minMaxPrice"
                    @change="getByBudget"
                  />$ 200 - $ 500</label
                >
              </div>
              <div>
                <label
                  for="filterBy"
                  class="text-sm font-normal text-dream-secondary mb-4"
                  ><input
                    type="radio"
                    name="filterBy"
                    class="mr-2"
                    value="500-1000"
                    v-model="minMaxPrice"
                    @change="getByBudget"
                  />$ 500 - $ 1000</label
                >
              </div>
              <div>
                <label
                  for="filterBy"
                  class="text-sm font-normal text-dream-secondary mb-4"
                  ><input
                    type="radio"
                    name="filterBy"
                    class="mr-2"
                    value="1000-2000"
                    v-model="minMaxPrice"
                    @change="getByBudget"
                  />$ 1000 - $ 2000</label
                >
              </div>
              <div>
                <label
                  for="filterBy"
                  class="text-sm font-normal text-dream-secondary mb-4"
                  ><input
                    type="radio"
                    name="filterBy"
                    class="mr-2"
                    value="2000-5000"
                    v-model="minMaxPrice"
                    @change="getByBudget"
                  />$ 2000 - $ 5000</label
                >
              </div>
              <div class="flex justify-between mt-5">
                <p class="text-sm font-normal text-gray-2">
                  Set your own budget
                </p>
                <div class="">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="flex justify-between mt-5">
                <input
                  type="text"
                  placeholder="Min budget"
                  class="p-3 w-28 budget-input"
                />
                <input
                  type="text"
                  placeholder="Max budget"
                  class="p-3 w-28 budget-input"
                />
              </div>
            </div>
          </div>
          <div class="rating mt-5">
            <div class="budget px-5 mb-4">
              <p class="text-dream-primary text-base font-medium">Rating</p>
            </div>
            <div class="px-5">
              <p class="text-sm font-normal text-gray-2">
                show only ratings more than
              </p>
              <div class="flex mt-2">
                <div
                  class="w-12 h-11 rounded-l text-center rating-nums flex p-3 cursor-pointer"
                  @click="setRating(1)"
                >
                  <span>1</span>
                  <img src="../assets/images/star-s-fill 1.svg" alt="" />
                </div>
                <div
                  class="w-12 h-11 rating-nums text-center flex p-3 cursor-pointer"
                  @click="setRating(2)"
                >
                  <span>2</span>
                  <img src="../assets/images/star-s-fill 1.svg" alt="" />
                </div>
                <div
                  class="w-12 h-11 rating-nums text-center flex p-3 cursor-pointer"
                  @click="setRating(3)"
                >
                  <span>3</span>
                  <img src="../assets/images/star-s-fill 1.svg" alt="" />
                </div>
                <div
                  class="w-12 h-11 rating-nums text-center flex p-3 cursor-pointer"
                  @click="setRating(4)"
                >
                  <span>4</span>
                  <img src="../assets/images/star-s-fill 1.svg" alt="" />
                </div>
                <div
                  class="w-12 h-11 rounded-r rating-nums text-center flex p-3 cursor-pointer"
                  @click="setRating(5)"
                >
                  <span class="align-middle">5</span>
                  <img
                    src="../assets/images/star-s-fill 1.svg"
                    alt=""
                    class="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!--card items-->
          <div class="">
            <div class="flex justify-between mb-7">
              <p class="text-2xl font-semibold">
                {{ `Melbourne : ${metaNum * 20} search results found` }}
              </p>
              <select
                name="sort by"
                id=""
                v-model="hotels.params.sort_by"
                @change="sortResults"
                class="rounded-md w-48 p-2 border-gray-300 border-2"
              >
                <option value="" disabled selected>Sort by</option>
                <option v-for="sort in sortBy" :key="sort.id" :value="sort.id">
                  {{ sort.title }}
                </option>
              </select>
            </div>
            <div v-if="!filteredProperties.length" class="text-center">
              <h2 class="text-xl font-bold">No properties Found</h2>
            </div>
            <div
              class="card mb-3"
              v-for="hotel in filteredProperties"
              :key="hotel.hotel_id"
            >
              <div class="flex justify-between p-5">
                <div class="flex">
                  <img
                    :src="[hotel.property.photoUrls[0]]"
                    alt=""
                    class="mr-5 w-96"
                  />
                  <div>
                    <h3 class="text-xl font-medium mb-4">
                      {{ hotel.property.name }}
                    </h3>
                    <p class="text-sm font-normal text-gray-2 mb-4">
                      {{
                        `${hotel.property.reviewScore / 2} (${
                          hotel.property.reviewCount
                        } reviwes)`
                      }}
                    </p>
                    <p class="text-sm font-medium text-gray-2 mb-2">
                      Live a little and celbrate with champagne
                    </p>
                    <p class="text-sm font-medium text-gray-2 mb-6">
                      Reats include a glass of French champagne, parking and a
                      late checkout. Gym included. Flexible cancellation applies
                    </p>
                    <button
                      class="text-sm font-medium"
                      @click="getDetails(hotel.hotel_id)"
                    >
                      See avilabilty
                    </button>
                  </div>
                </div>
                <div class="flex flex-col-reverse w-1/2 price">
                  <p class="text-sm font-medium text-gray-2 mb-1">
                    included taxes and fees
                  </p>

                  <div>
                    <s
                      v-if="hotel.property.priceBreakdown.strikethroughPrice"
                      class="mx-5 inline-block text-red-700"
                      >{{
                        `${Math.floor(
                          hotel.property.priceBreakdown.strikethroughPrice.value
                        )} ${hotel.property.priceBreakdown.grossPrice.currency}`
                      }}</s
                    >
                    <span class="text-gray-800 text-xl font-medium">{{
                      `${Math.floor(
                        hotel.property.priceBreakdown.grossPrice.value
                      )} ${hotel.property.priceBreakdown.grossPrice.currency}`
                    }}</span>
                  </div>

                  <div
                    v-if="hotel.property.priceBreakdown.strikethroughPrice"
                    class="discount text-xs font-medium text-white mb-8"
                  >
                    {{
                      `${Math.floor(
                        ((hotel.property.priceBreakdown.strikethroughPrice
                          .value -
                          hotel.property.priceBreakdown.grossPrice.value) /
                          hotel.property.priceBreakdown.strikethroughPrice
                            .value) *
                          100
                      )}% off`
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              v-if="filteredProperties.length"
              @click="previous"
              class="w-10 h-10 px-2 shadow-md"
            >
              &lt;
            </button>
            <button
              v-for="index in metaNum"
              :key="index"
              @click="getPage(index)"
              class="mb-3 w-10 h-10 px-2 bg-white text-gray-2 rounded-md border-spacing-1 border-blue-1 pagination"
            >
              {{ index }}
            </button>
            <button
              @click="next"
              v-if="filteredProperties.length"
              class="w-10 h-10 px-2 shadow-md"
            >
              >
            </button>
          </div>
        </div>
      </div>
      <covid class="mt-7"></covid>
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import Covid from "./Covid.vue";
import SiteFooter from "./SiteFooter.vue";
export default {
  components: { Covid, SiteFooter },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let searchedData = JSON.parse(route.query.data);
    console.log(searchedData);
    let searchedHotels = ref([]);
    let propertyName = ref("");
    const metedata = ref("");
    const n = ref(113);
    const metaNum = ref(0);
    const rating = ref(null);
    const currentPage = ref(1);
    const sortBy = ref([]);

    const hotels = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: searchedData.dest_id,
        search_type: "CITY",
        arrival_date: searchedData.arrival_date,
        departure_date: searchedData.departure_date,
        adults: searchedData.adults,
        room_qty: searchedData.room_qty,
        page_number: "1",
        price_min: null,
        price_max: null,
        sort_by: null,
        languagecode: "en-us",
        currency_code: "AED",
      },
      headers: {
        "X-RapidAPI-Key": "45e95f0087msheaf512a2c0af8d6p18b516jsna52c5e2b8b3b",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    const minMaxPrice = ref("");
    const numbers = computed(() => {
      const [firstNumber, secondNumber] = minMaxPrice.value
        .split("-")
        .map(Number);
      return { firstNumber, secondNumber };
    });

    let filteredProperties = computed(() => {
      if (rating.value !== null) {
        return searchedHotels.value.filter(
          (hotel) =>
            hotel.property.name
              .toLowerCase()
              .includes(propertyName.value.toLowerCase()) &&
            Math.floor(hotel.property.reviewScore / 2) === rating.value
        );
      } else {
        return searchedHotels.value.filter((hotel) =>
          hotel.property.name
            .toLowerCase()
            .includes(propertyName.value.toLowerCase())
        );
      }
    });

    const setRating = (rate) => {
      rating.value = rate;
      console.log(rating.value);
    };

    const sorting = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
      params: {
        dest_id: "-2092174",
        search_type: "CITY",
        arrival_date: "2023-12-01",
        departure_date: "2023-12-02",
        adults: "1",
        children_age: "1,17",
        room_qty: "1",
      },
      headers: {
        "X-RapidAPI-Key": "45e95f0087msheaf512a2c0af8d6p18b516jsna52c5e2b8b3b",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    onMounted(async () => {
      try {
        const response = await axios.request(hotels);
        const response2 = await axios.request(sorting);

        searchedHotels.value = response.data.data.hotels;
        metedata.value = response.data.data.meta[0].title;
        sortBy.value = response2.data.data;
        console.log(sortBy.value);
        metaNum.value = Math.ceil(parseInt(metedata.value.match(/\d+/)) / 20);
      } catch (error) {
        console.error(error);
      }
    });

    const getPage = async (index) => {
      hotels.params.page_number = index;
      currentPage.value = index;
      try {
        const response = await axios.request(hotels);
        searchedHotels.value = response.data.data.hotels;
      } catch (error) {
        console.error(error);
      }
    };

    const getDetails = (id) => {
      searchedData.id = id;
      const queryData = JSON.stringify(searchedData);
      router.push({
        name: "details",
        query: { queryData },
      });
    };

    const next = () => {
      currentPage.value++;
      getPage(currentPage.value);
      console.log(currentPage.value);
    };

    const previous = () => {
      currentPage.value--;
      getPage(currentPage.value);
    };

    const sortResults = async () => {
      try {
        const response = await axios.request(hotels);
        searchedHotels.value = response.data.data.hotels;
      } catch (error) {
        console.error(error);
      }
    };

    const getByBudget = async () => {
      hotels.params.price_min = numbers.value.firstNumber;
      hotels.params.price_max = numbers.value.secondNumber;
      try {
        const response = await axios.request(hotels);
        searchedHotels.value = response.data.data.hotels;
      } catch (error) {
        console.error(error);
      }
    };

    return {
      hotels,
      searchedHotels,
      searchedData,
      propertyName,
      filteredProperties,
      setRating,
      n,
      metaNum,
      getPage,
      getDetails,
      next,
      previous,
      currentPage,
      sortBy,
      sortResults,
      getByBudget,
      minMaxPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-property::before {
  background: url("../assets/images/search\ 1.svg") center / contain no-repeat;
}

.property-name {
  width: 295px;
  height: 119px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Gray-6, #f2f2f2);
}

.property-name input {
  display: flex;
  width: 259px;
  padding: 11px 12px 12px 45px;
  align-items: center;
}

label {
  position: relative;
}

label::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 5px;
  width: 20px;
}

.filter-by {
  width: 295px;
  height: 336px;
  border-radius: 6px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
}

.rating {
  width: 295px;
  height: 170px;
  border-radius: 6px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
}

.rating-nums {
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
  align-items: center;
}

.budget {
  border-radius: 6px 6px 0px 0px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: var(--Gray-6, #f2f2f2);
  padding: 18px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.budget-input {
  border-radius: 4px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
}

.card {
  width: 915px;
  border-radius: 5px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
}

.card img {
  border-radius: 5px;
}

.card button {
  border-radius: 6px;
  background: var(--Blue-1, #2f80ed);
  display: inline-flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
}

.pagination:focus {
  background-color: #2f80ed;
  color: white;
}

.price {
  align-items: end;
}

.discount {
  border-radius: 6px;
  background: var(--Green-1, #219653);
  padding: 4px 8px;
}
</style>
