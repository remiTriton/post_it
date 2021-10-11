<template>
  <router-link :to="`/print/${id}`">
    <v-btn @click="onClick" text-color="white" color="#418791"> More </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "VButton",
  props: ["id"],
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
