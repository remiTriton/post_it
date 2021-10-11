<template>
  <router-link :to="'Form'">
    <v-btn
      @click="onClick"
      class="mx-auto mt-5 mr-5"
      outlined
      large
      fab
      color="#59CCDE"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "AddButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
