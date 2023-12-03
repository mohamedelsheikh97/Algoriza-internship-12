<template>
  <div>
    <div class="grid lg:grid-cols-3 py-6 images-sec container sm:h-60">
      <img
        src="../assets/images/Rectangle 10.png"
        alt=""
        class="lg:col-span-2 main-img"
      />
      <div class="col-span-1 side-images">
        <img src="../assets/images/Rectangle 16.png" class="mb-4" />
        <img src="../assets/images/Rectangle 18.png" alt="" />
      </div>
    </div>
    <div class="container">
      <button class="mr-7">Overview</button>
      <button @click="scrollToRooms">Rooms</button>
    </div>

    <!--details-->
    <div class="hotel-info">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-5 py-6">
          <div class="col-span-2">
            <h2 class="text-4xl font-semibold text-black mb-5">
              {{ hotel.hotel_name }}
            </h2>
            <p class="text-sm font-normal text-gray-2 mb-4">
              4.5(1200 reviwes)
            </p>
            <span class="text-sm font-normal text-gray-2 mb-4"
              ><img
                src="../assets/images/location 1.svg"
                class="inline-block"
              />
              {{ hotel.address }}</span
            >
            <div class="overview py-7 px-6 bg-white rounded-md mt-4">
              <div class="border-b-2 border-b-gray-500 pb-4">
                <h3 class="text-lg font-medium text-dream-primary mb-3">
                  Overview
                </h3>
                <p class="text-base font-normal text-gray-2 mb-1">
                  Featuring free WiFi throughout the property, Lakeside Motel
                  Waterfront offers accommodations in Lakes Entrance, 19 mi from
                  Bairnsdale. Free private parking is available on site.
                </p>
                <p class="text-base font-normal text-gray-2 mb-1">
                  Free private parking is available on site. Each room at this
                  motel is air conditioned and comes with a flat-screen TV. You
                  will find a kettle, toaster and a microwave in the room. Each
                  room is fitted with a private bathroom. Guests have access to
                  barbecue facilities and a lovely large lawn area. Metung is
                  6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14
                  mi from the property.
                </p>
                <p class="text-base font-normal text-gray-2 mb-1">
                  Couples in particular like the location – they rated it 9.2
                  for a two-person trip.
                </p>
              </div>
              <div>
                <h6 class="text-lg font-medium my-4">Top facilities</h6>
                <div class="flex">
                  <div class="mr-10">
                    <div class="mb-2">
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/home-wifi 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Free wifi</span
                      >
                    </div>
                    <div class="mb-2">
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/wind 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Air Conditioning</span
                      >
                    </div>
                    <div>
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/car 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Parking available</span
                      >
                    </div>
                  </div>
                  <div>
                    <div class="mb-2">
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/bag-tick-2 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Business Services</span
                      >
                    </div>
                    <div class="mb-2">
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/lifebuoy 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Swimming pool</span
                      >
                    </div>
                    <div>
                      <span class="text-sm font-normal text-gray-2"
                        ><img
                          src="../assets/images/like-1 1.svg"
                          alt=""
                          class="mr-2 inline-block"
                        />Top rated in area</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <iframe :src="location" class="w-full rounded-md h-1/3"></iframe>
            <div class="mt-5">
              <h4 class="text-lg font-medium text-dream-primary">
                Explore the area
              </h4>
              <div class="mt-3">
                <div class="flex justify-between mb-2">
                  <div>
                    <img
                      src="../assets/images/bxs-plane-alt 2.svg"
                      alt=""
                      class="inline-block mr-1"
                    />
                    <span class="text-sm font-normal text-gray-2"
                      >Hotel Penselvenyia</span
                    >
                  </div>
                  <p class="text-sm font-normal text-gray-2">2 min drive</p>
                </div>
                <div class="flex justify-between mb-2">
                  <div>
                    <img
                      src="../assets/images/bxs-map 1.svg"
                      alt=""
                      class="inline-block mr-1"
                    />
                    <span class="text-sm font-normal text-gray-2"
                      >Travis Bakery store house</span
                    >
                  </div>
                  <p class="text-sm font-normal text-gray-2">10 min drive</p>
                </div>
                <div class="flex justify-between mb-2">
                  <div>
                    <img
                      src="../assets/images/bxs-map 1.svg"
                      alt=""
                      class="inline-block mr-1"
                    />
                    <span class="text-sm font-normal text-gray-2"
                      >Olivia Johnson Garden</span
                    >
                  </div>
                  <p class="text-sm font-normal text-gray-2">15 min drive</p>
                </div>
                <div class="flex justify-between mb-2">
                  <div>
                    <img
                      src="../assets/images/bxs-map 1.svg"
                      alt=""
                      class="inline-block mr-1"
                    />
                    <span class="text-sm font-normal text-gray-2"
                      >Norman Opera Circus</span
                    >
                  </div>
                  <p class="text-sm font-normal text-gray-2">18 min drive</p>
                </div>
                <div class="flex justify-between mb-2">
                  <div>
                    <img
                      src="../assets/images/bxs-map 1.svg"
                      alt=""
                      class="inline-block mr-1"
                    />
                    <span class="text-sm font-normal text-gray-2"
                      >Rockdeset hotel</span
                    >
                  </div>
                  <p class="text-sm font-normal text-gray-2">32 min drive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-7" ref="rooms">
        <div class="flex flex-wrap">
          <div class="promo-code relative mr-5">
            <div class="w-48 h-32 absolute top-20 left-12">
              <div class="mb-3">
                <img
                  src="../assets/images/bxs-plane-alt 1.svg"
                  class="inline-block mr-2"
                />
                <span class="text-lg font-medium text-white"
                  >my Dream Place</span
                >
              </div>
              <p class="text-2xl font-bold text-white">
                20% off Use Promotional Coupon Code:
                <span class="text-yellow-500"> Orlando</span>
              </p>
            </div>
            <img src="../assets/images/Frame.png" class="promo-image" />
          </div>

          <div
            class="suite-card mb-3 mr-5"
            v-for="index in hotel.available_rooms"
            :key="index"
          >
            <img src="../assets/images/Rectangle 70.png" alt="" />
            <div class="p-5">
              <p class="text-lg font-medium text-dream-primary mb-4">
                Standard twin ben, Multiple beds
              </p>
              <div class="mb-2">
                <img
                  src="../assets/images/bag-tick-2 1.svg"
                  class="inline-block mr-2"
                /><span class="text-sm font-normal text-gray-2">300 sq ft</span>
              </div>
              <div class="mb-2">
                <img
                  src="../assets/images/lifebuoy 1.svg"
                  alt=""
                  class="inline-block mr-2"
                /><span class="text-sm font-normal text-gray-2">Sleeps 3</span>
              </div>
              <div class="mb-2">
                <img
                  src="../assets/images/like-1 1.svg"
                  alt=""
                  class="inline-block mr-2"
                /><span class="text-sm font-normal text-gray-2"
                  >1 double bed and 1 twin bed</span
                >
              </div>
              <button
                class="bg-blue-1 text-white text-center mt-4 w-full py-3 px-5 rounded-md"
                @click="checkout"
              >
                Reserve suite
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-6"><covid></covid></div>

      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Covid from "./Covid.vue";
import SiteFooter from "./SiteFooter.vue";
export default {
  components: { Covid, SiteFooter },
  setup() {
    const rooms = ref(null);
    const router = useRouter();
    const route = useRoute();
    const hotel = ref({});
    const location = ref("");
    const data = JSON.parse(route.query.queryData);
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
      params: {
        hotel_id: data.id,
        arrival_date: data.arrival_date,
        departure_date: data.departure_date,
        adults: data.adults,
        children_age: "1,17",
        room_qty: data.room_qty,
        languagecode: "en-us",
        currency_code: "EUR",
      },
      headers: {
        "X-RapidAPI-Key": "45e95f0087msheaf512a2c0af8d6p18b516jsna52c5e2b8b3b",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    onMounted(async () => {
      try {
        const response = await axios.request(options);

        hotel.value = response.data.data;
        location.value = `//maps.google.com/maps?q=${hotel.value.latitude},${hotel.value.longitude}&z=15&output=embed`;
        console.log(hotel.value);
        console.log(location.value);
        console.log(options);
      } catch (error) {
        console.error(error);
      }
    });

    const scrollToRooms = () => {
      if (rooms.value) {
        window.scrollTo({
          top: rooms.value.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const checkout = () => {
      router.push("/checkout");
    };

    return { rooms, scrollToRooms, hotel, location, checkout };
  },
};
</script>

<style lang="scss" scoped>
.images-sec {
  min-height: 510px;
}
.main-img {
  width: 95%;
  height: 66%;
}

.side-images img {
  width: 95%;
  height: 32%;
}

.hotel-info {
  background: #f4f4f4;
}

.promo-code {
  border-radius: 6px;
  background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
  width: 400px;
  height: 340px;
  flex-shrink: 0;
}

.promo-image {
  position: absolute;
  top: 45px;
  left: 150px;
}

.suite-card {
  width: 400px;
  height: 432px;
  border-radius: 6px;
  background: #fff;
}
</style>
