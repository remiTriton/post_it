<template>
  <a @click="onDelete" class="fas fa-times"></a>
</template>

<script>
export default {
  name: "DeletePostIt",
  props: ["id"],
  data() {
    return {
      postIt: {},
    };
  },
  methods: {
    onDelete() {
      if (confirm("Are you sure?")) {
        this.$store.dispatch('deletePostIt', this.id);
      }
    },
  },
};
</script>
