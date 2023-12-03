<template>
  <header class="my-5">
    <nav class="container flex justify-between align-middle p-0">
      <div class="logo cursor-pointer" @click="goHome">
        <img
          src="../assets/images/Vector.png"
          alt=""
          class="inline-flex mr-2"
        />
        <span class="text-dream-primary">my Dream Place</span>
      </div>
      <div class="links">
        <ul class="flex justify-between align-middle decoration-none">
          <li><a href="#" @click="goHome">home</a></li>
          <li><a href="#">discover</a></li>
          <li><a href="#">activities</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <button v-if="!token" @click="goSignIn">Sign In</button>
      <div v-if="token" class="flex profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.81998C17.9388 7.70401 17.6217 6.61119 17.0253 5.66795C16.4289 4.72471 15.5776 3.9696 14.57 3.48998C14.3128 3.03332 13.9377 2.65412 13.4838 2.39201C13.03 2.1299 12.5141 1.99451 11.99 1.99998C10.9 1.99998 9.92 2.58998 9.4 3.51998C7.45 4.48998 6.1 6.49998 6.1 8.81998V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z"
            fill="#BDBDBD"
          />
          <path
            d="M14.8302 20.01C14.6199 20.5922 14.2355 21.0954 13.7292 21.4515C13.2229 21.8075 12.6192 21.999 12.0002 22C11.2102 22 10.4302 21.68 9.88024 21.11C9.56024 20.81 9.32024 20.41 9.18024 20C9.31024 20.02 9.44024 20.03 9.58024 20.05C9.81024 20.08 10.0502 20.11 10.2902 20.13C10.8602 20.18 11.4402 20.21 12.0202 20.21C12.5902 20.21 13.1602 20.18 13.7202 20.13C13.9302 20.11 14.1402 20.1 14.3402 20.07L14.8302 20.01Z"
            fill="#BDBDBD"
          />
          <circle
            cx="17"
            cy="6"
            r="5"
            fill="#EB5757"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <div class="rounded-full bg-gray-200 ml-2 w-11 h-11 text-center py-2">
          <i class="fa-solid fa-user fa-xl" style="color: #1443d2"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const token = ref(localStorage.getItem("token"));
    const goHome = () => {
      router.push("/");
    };

    const goSignIn = () => {
      router.push("/signin");
    };
    return { goHome, router, goSignIn, token };
  },
};
</script>

<style lang="scss" scoped>
nav ul li {
  margin: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19.09px;
  letter-spacing: 2%;
  color: #333333;
  text-transform: capitalize;
}
.logo {
  width: 180px;
}
.logo img {
  width: 24px;
}
.logo span {
  font-size: 18px;
  font-weight: 500;
  line-height: 21.48px;
  letter-spacing: 2%;
}

header nav button {
  background-color: #2f80ed;
  border-radius: 6px;
  padding: 10px 18px;
  color: white;
  width: 92px;
  height: 40px;
}

header nav .links {
  width: 458px;
}

header nav {
  align-items: center;
}

.profile {
  align-items: center;
}
</style>
