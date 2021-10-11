<template>
  <div class="container">
    <form @submit.stop.prevent="onSubmit">
      <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="New title"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Message</label>
        <textarea
          v-model="content"
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Another message"
        ></textarea>
      </div>

      <v-card id="create">
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab"> mdi-close </v-icon>
            <v-icon v-else> mdi-account-circle </v-icon>
          </v-btn>
        </template>

        <v-btn type="submit" fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <router-link to="/">
          <v-btn class="ma-2" color="#418791" dark>
            <v-icon dark left> mdi-arrow-left </v-icon>Back
          </v-btn>
        </router-link>
      </v-card>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormPostIt",
  components: {},

  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('addPostIt', {
        title: this.title,
        content: this.content,
      });

      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-right: 30%;
  margin-left: 30%;
  margin-top: 25px;
}

.create {
  position: center;
}

.container {
  width: 200%;
  height: 100%;
}
</style>
