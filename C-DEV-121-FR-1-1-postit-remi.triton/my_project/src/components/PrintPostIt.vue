<template>
  <v-card class="mx-auto mt-5" max-width="344" color="#DED485">
    <v-card-text v-if="postIt._id">
      <input class="text--primary" v-model="postIt.title"/>

      <textarea class="text--primary" v-model="postIt.content"></textarea>

      <div>
        <router-link to="/">
          <v-btn class="ma-2" color="#418791" dark>
            <v-icon dark left> mdi-arrow-left </v-icon>Back
          </v-btn>
        </router-link>

        <v-btn class="ma-2" @click="update" color="orange darken-2" dark>
          <v-icon dark left> mdi-pencil </v-icon>Update
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PrintPostIt",
  props: ["id"],
  data() {
    return {
      postIt: {
        _id: null,
        title: '',
        content: '',
      },
    };
  },
  methods: {
    async update() {
      await this.$store.dispatch('updatePostIt', {
        _id: this.postIt._id,
        title: this.postIt.title,
        content: this.postIt.content,
      });

      this.$router.push({ name: 'home'});
    }
  },
  async created() {
    const res = await fetch("http://5.135.119.239:3090/notes/" + this.id);
    const data = await res.json();

    this.postIt._id = data.note._id;
    this.postIt.title = data.note.title;
    this.postIt.content = data.note.content.join();
  },
};
</script>
