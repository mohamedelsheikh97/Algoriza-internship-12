<template>
  <div class="my-5">
    <header class="mb-4 container">
      <nav class="flex justify-between align-middle p-0">
        <div class="logo cursor-pointer w-40" @click="goHome">
          <img
            src="../assets/images/Vector.png"
            alt=""
            class="inline-flex mr-2"
          />
          <span class="text-dream-primary text-lg font-medium"
            >my Dream Place</span
          >
        </div>
        <div class="flex profile">
          <img src="../assets/images/notification 1.svg" alt="" />
          <div class="rounded-full bg-white ml-2 w-11 h-11 text-center py-2">
            <i class="fa-solid fa-user fa-xl" style="color: #1443d2"></i>
          </div>
        </div>
      </nav>
    </header>
    <div class="checkout-body py-10">
      <div class="container">
        <h2 class="text-3xl font-semibold mb-4">Secure your reservation</h2>
        <covid></covid>
        <div class="grid lg:grid-cols-3 mt-8 gap-9">
          <div class="col-span-2">
            <div class="personal-data rounded-md bg-white">
              <div class="bg-blue-1 px-4 py-3 rounded-tl-md rounded-tr-md">
                <img
                  src="../assets/images/security-user 1.svg"
                  class="inline-block mr-2"
                />
                <span class="mr-2 text-white">Room 1</span>
                <span class="text-white"
                  >2 adults, 1 double bed and 1 twin bed, Non-smoking</span
                >
              </div>
              <form class="px-5 py-4">
                <div class="mr-5 inline-block">
                  <label for="" class="block mb-1">First name</label>
                  <input type="text" placeholder="Julies" class="w-72 p-3" />
                </div>
                <div class="inline-block">
                  <label for="" class="block mb-1">Last name</label>
                  <input type="text" placeholder="Lorenzo" class="w-72 p-3" />
                </div>

                <div class="my-5">
                  <label for="" class="block mb-1">Mobile number</label>
                  <select name="" id="" class="mr-5 w-44 p-3">
                    <option value="+61">+61</option>
                    <option value="+20">+20</option>
                  </select>
                  <input type="text" class="w-96 p-3" placeholder="88672778" />
                </div>

                <div class="">
                  <input type="checkbox" class="inline-block" />
                  <label for="" class="text-sm font-normal text-gray-400 ml-2"
                    >Receive text alerts about this trip.</label
                  >
                </div>
              </form>
            </div>
            <div class="rounded-md bg-white my-6">
              <div class="bg-blue-1 px-4 py-3 rounded-tl-md rounded-tr-md">
                <img
                  src="../assets/images/card-tick 1.svg"
                  class="inline-block mr-2"
                />
                <span class="mr-2 text-white">Payment options</span>
              </div>
              <div class="px-4 pt-3 flex border-b-2 border-gray-200">
                <p class="px-2 border-b-2 border-blue-1">Debit/Credit Card</p>
              </div>
              <div>
                <div class="px-4 py-3">
                  <img
                    src="../assets/images/image 6.png"
                    class="inline-block bg-gray-200 p-1 mr-2 w-12 h-8 rounded-sm"
                  />
                  <img
                    src="../assets/images/image 7.png"
                    class="inline-block bg-gray-200 p-1 mr-2 w-12 h-8 rounded-sm"
                  />
                  <img
                    src="../assets/images/image 10.png"
                    class="inline-block bg-gray-200 p-1 mr-2 w-12 h-8 rounded-sm"
                  />
                  <img
                    src="../assets/images/image 8.png"
                    class="inline-block bg-gray-200 p-1 mr-2 w-12 h-8 rounded-sm"
                  />
                </div>
                <form class="px-5 py-4">
                  <div>
                    <label for="" class="block mb-1">Name on card</label>
                    <input
                      type="text"
                      placeholder="Julius Lorenzo"
                      class="w-2/3 p-3"
                    />
                  </div>
                  <div class="my-5">
                    <label for="" class="block mb-1"
                      >Debit/Credit card number</label
                    >
                    <input
                      type="text"
                      placeholder="Julius Lorenzo"
                      class="w-2/3 p-3"
                    />
                  </div>
                  <div>
                    <label for="" class="block mb-1">Expiration date</label>
                    <select name="" id="" class="mr-5 w-36 p-3">
                      <option value="April">April</option>
                      <option value="March">March</option>
                    </select>
                    <select name="" id="" class="w-36 p-3">
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>
                  <div class="mt-5">
                    <div class="inline-block mr-5">
                      <label for="" class="block mb-1">Security Code</label>
                      <input type="text" placeholder="543" class="w-full p-3" />
                    </div>
                    <div class="inline-block">
                      <label for="" class="block mb-1">Billing Zip Code</label>
                      <input
                        type="text"
                        placeholder="203846"
                        class="w-full p-3"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="rounded-md bg-white">
              <div class="bg-yellow-300 px-4 py-3 rounded-tl-md rounded-tr-md">
                <span class="text-lg font-medium"
                  >Important information about your booking</span
                >
              </div>
              <div class="px-5 py-4">
                <div class="my-4">
                  <p class="text-sm font-normal text-gray-2">
                    1. This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </p>
                  <p class="text-sm font-normal text-gray-2">
                    2. Stay extensions will require a new reservation.
                  </p>
                  <p class="text-sm font-normal text-gray-2">
                    3. Front desk staff will greet guests on arrival
                  </p>
                  <p class="text-sm font-normal text-gray-2">
                    4. No refunds will be issued for late check-in or early
                    check-out.
                  </p>
                </div>
                <span class="font-normal text-sm text-gray-2"
                  >By clicking the button below, I acknowledge that I have
                  reviewed the
                  <a href="" class="text-blue-2">Privacy Statement</a> and have
                  reviewd and accept the
                  <a href="" class="text-blue-2">Rules and Restrictions</a> and
                  <a href="" class="text-blue-2">Terms of Use.</a></span
                >

                <button
                  class="bg-blue-1 text-white text-center mt-4 py-3 px-5 rounded-md block"
                  @click="showingModal"
                >
                  Complete Booking
                </button>

                <div class="my-4">
                  <img
                    src="../assets/images/lock-circle 1.svg"
                    alt=""
                    class="inline-block mr-2"
                  />
                  <span class="text-sm font-normal text-gray-2"
                    >We use secure transmission and encrypted storage to protect
                    your personal information</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 rounded-md">
            <div class="bg-white">
              <img src="../assets/images/Rectangle 68 (1).png" class="w-full" />
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
            <div class="rounded-md bg-white mt-5">
              <div
                class="p-5 text-base font-medium text-dream-primary price rounded-t-md"
              >
                Price Details
              </div>
              <div class="border-b-2 border-gray-300 px-5 py-6">
                <div class="flex justify-between mb-2">
                  <p class="text-sm font-normal text-gray-2">
                    1 room X 2 nights
                  </p>
                  <span class="text-sm font-normal text-gray-2">$ 120.32</span>
                </div>
                <div class="flex justify-between">
                  <p class="text-sm font-normal text-gray-2">
                    Tax and service fees
                  </p>
                  <span class="text-sm font-normal text-gray-2">$ 8.32</span>
                </div>
              </div>
              <div class="flex justify-between px-5 py-6">
                <p class="text-base font-medium text-dream-primary">Total</p>
                <span class="text-xl font-semibold text-gray-800">$130</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Successfull v-if="showModal" @close="showingModal"></Successfull>
  </div>
</template>

<script>
import Covid from "../components/Covid.vue";
import Successfull from "../components/Successfull.vue";
import { ref } from "vue";
export default {
  components: { Covid, Successfull },
  setup() {
    let showModal = ref(false);
    const showingModal = () => {
      showModal.value = !showModal.value;
    };

    return { showModal, showingModal };
  },
};
</script>

<style lang="scss" scoped>
.checkout-body {
  background: #f4f4f4;
}

input,
select {
  border-radius: 4px;
  background: var(--Gray-6, #f2f2f2);
}

a {
  color: var(--Blue-1, #2f80ed);
}

.price {
  background: #85e0ab;
}
</style>
