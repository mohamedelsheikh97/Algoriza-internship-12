<template>
  <div class="container mt-10 mb-10">
    <section class="dream-vacation">
      <div>
        <h2 class="text-3xl text-dream-primary font-semibold mb-2">
          Enjoy your dream vacation
        </h2>
        <P class="text-base text-dream-secondary font-normal mb-5"
          >Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us</P
        >
      </div>
      <div class="countries grid lg:grid-cols-4 gap-3">
        <div class="australia">
          <img src="../assets/images/Rectangle 8.png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">Australia</p>
          <p class="font-normal text-sm text-dream-primary">2246 properties</p>
        </div>
        <div class="jaban">
          <img src="../assets/images/Rectangle 9.png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">Japan</p>
          <p class="font-normal text-sm text-dream-primary">1278 properties</p>
        </div>
        <div class="new zeland">
          <img src="../assets/images/Rectangle 10.png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">New Zeland</p>
          <p class="font-normal text-sm text-dream-primary">480 properties</p>
        </div>
        <div class="greece">
          <img src="../assets/images/Rectangle 11.png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">Greece</p>
          <p class="font-normal text-sm text-dream-primary">320 properties</p>
        </div>
      </div>
    </section>
    <!--inspiration-->
    <section class="inspiration mt-10">
      <h2 class="text-3xl font-semibold mb-5">
        Get inspiration for your next trip
      </h2>
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="relative">
          <img src="../assets/images/Rectangle 8 (1).png" alt="" />
          <div class="absolute top-36 left-6 caption">
            <p class="font-semibold text-xl">
              Sydeny’s 10 most fashionable 5 star hotels
            </p>
            <p class="text-base font-normal mt-2">
              Browse the fastest growing tourism sector in the heart of
              Australia tourism capital ....
            </p>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/images/Rectangle 16.png" alt="" />
          <div class="absolute top-36 left-6 caption">
            <p class="font-semibold text-xl">Top cities for Vegan Travellers</p>
            <p class="text-base font-normal mt-2">
              Top sites where you do not have to worry about being a vegan. Our
              tourist guide is here...
            </p>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/images/Rectangle 17.png" alt="" />
          <div class="absolute top-36 left-6 caption">
            <p class="font-semibold text-xl">
              World’s top destinations during and post covid timeline
            </p>
            <p class="text-base font-normal mt-2">
              Pandemic is still intact and will be here for a longer time.
              Here’s where your next destination...
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--popular hotels-->
    <section class="popular-hotels mt-10">
      <div>
        <h2 class="text-3xl text-dream-primary font-semibold mb-5">
          Popular hotels
        </h2>
      </div>
      <div class="countries grid lg:grid-cols-4">
        <div class="australia w-full">
          <img src="../assets/images/Rectangle 8 (2).png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">
            Lakeside Motel Warefront
          </p>
          <p class="font-normal text-sm text-dream-primary">2246 properties</p>
        </div>
        <div class="jaban">
          <img src="../assets/images/Rectangle 9 (1).png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">
            Recce Graham resort
          </p>
          <p class="font-normal text-sm text-dream-primary">1278 properties</p>
        </div>
        <div class="new zeland">
          <img src="../assets/images/Rectangle 10 (1).png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">
            Fireside Dinners
          </p>
          <p class="font-normal text-sm text-dream-primary">480 properties</p>
        </div>
        <div class="greece">
          <img src="../assets/images/Rectangle 11 (1).png" alt="" />
          <p class="font-semibold text-xl text-dream-primary">
            Oculous Inn Stay
          </p>
          <p class="font-normal text-sm text-dream-primary">320 properties</p>
        </div>
      </div>
    </section>
    <!--download mobile app-->
    <section class="mt-10 mobile-app">
      <div class="relative">
        <img
          src="../assets/images/Rectangle 18.png"
          alt=""
          class="w-full h-72 rec-image"
        />
        <img
          src="../assets/images/Isolated_right_hand_with_smartphone 1.png"
          alt=""
          class="hand-image left-2/3 top-1/2"
        />
        <div class="absolute top-16 left-16 w-1/2">
          <p class="font-semibold text-3xl text-white mb-7">
            Download the mobile application for bonus coupons and travel codes
          </p>
          <button
            class="bg-blue-1 text-white text-center mt-4 py-3 px-5 rounded-md block"
          >
            Download mobile app
          </button>
        </div>
      </div>
    </section>
    <section class="container text-center mt-10">
      <h3 class="font-bold text-3xl text-dream-primary mb-5">
        Explore the world with My Dream place
      </h3>
      <p class="font-normal text-base text-blue-1">
        Discover new places and experiences
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dream-vacation img {
  width: 295px;
  height: 220px;
}

.inspiration img {
  width: 400px;
  height: 280px;
}

.inspiration .caption {
  width: 360px;
  color: white;
}

.mobile-app .hand-image {
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 100%;
}

.mobile-app .rec-image {
  height: 280px;
}
</style>
