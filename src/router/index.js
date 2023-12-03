import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SearchResults from "../views/SearchResults.vue";
import HotelDetails from "../views/HotelDetails.vue";
import SignIn from "../views/SignIn.vue";
import CheckOut from "../views/CheckOut.vue";
import MyTrips from "../views/MyTrips.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchResults,
    },
    {
      path: "/details",
      name: "details",
      component: HotelDetails,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOut,
    },
    {
      path: "/trips",
      name: "trips",
      component: MyTrips,
    },
  ],
});

export default router;
