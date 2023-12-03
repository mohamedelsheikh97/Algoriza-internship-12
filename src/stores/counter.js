import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  state: () => ({
    data: {
      dest_id: null,
      arrival_date: "",
      departure_date: "",
      adults: null,
      room_qty: null,
    },
  });
  return {};
});
