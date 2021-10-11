<template>
  <div id="app">
    <v-container fluid>
      <v-row dense>
        <v-card
          v-for="note in postItList"
          :key="note._id"
          class="mx-auto mt-5"
          max-width="344"
          text-color="white"
          :color="note.color"
        >
          <v-card-text>
            <DeletePostIt :id="note._id" />
            <v-card-title> 
            <h4 class="text--primary"> {{ note.title }}</h4> 
            </v-card-title>
            
            <div v-if="note.content.join().length < 15">
              <v-card-text>{{ note.content.join() }}</v-card-text>
            </div>
            <div v-else>
              <v-card-text>{{
                note.content.join().substring(0, 15 )+ ".."
              }}</v-card-text>
            </div>
          </v-card-text>
          <v-card-actions>
            <VButton :id="note._id" />
          </v-card-actions>
        </v-card>

        <div class="text-center">
          <AddButton />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VButton from "./VButton.vue";
import AddButton from "./AddButton.vue";
import DeletePostIt from "./DeletePostIt.vue";

export default {
  name: "HelloWorld",
  components: { VButton, AddButton, DeletePostIt },
  created() {
    this.$store.dispatch('fetchPostItList');
  },
  computed: {
    // create a readonly variable to wrapp store context
    postItList() {
      return this.$store.state.postItList;
    }
  },
};
</script>

<style scope>
.fas {
  color: red;
}
</style>
