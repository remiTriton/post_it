import { createStore } from "vuex";

const  randomBackground = () => {
  //const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const hex = ["913A64", "DFC964", ];

  let hexColor = '#';

  
    let getRandomNumber = Math.floor(Math.random() * hex.length);

    hexColor += hex[getRandomNumber];
  

  return hexColor;
};

export default createStore({
  state: {
    postItList: [],
  },
  mutations: {
    setPostItList(state, postItList) {
      state.postItList = postItList.map((p) => ({
        ...p,
        color: randomBackground(),
      }));
    },
  },
  actions: {
    // retrieve list of post list from the api
    async fetchPostItList(context) {
      const res = await fetch("http://5.135.119.239:3090/notes");

      const data = await res.json();

      context.commit('setPostItList', data.notes);
    },


    async updatePostIt(context, postIt) {
      await fetch("http://5.135.119.239:3090/notes/" + postIt._id, {
        method: "PUT",
        body: JSON.stringify(postIt),
        headers: {
          "Content-type": "application/json",
        },
      });

      // retrieve the good position of the updated postIt in the store
      const pos = context.state.postItList.findIndex((p) => p._id === postIt.id);
      if (pos > -1) {
        // remove from the store
        context.state.postItList.splice(pos, 1, postIt);
      }
      context.commit('setPostItList', context.state.postItList);
    },


    // delete a post it with the api
    // and update the store
    async deletePostIt(context, id) {
      // delete in db
      await fetch("http://5.135.119.239:3090/notes/" + id, {
        method: "DELETE",
      });

      // retrieve ths good position of the deleted postIt in the store
      const pos = context.state.postItList.findIndex((p) => p._id === id);
      if (pos > -1) {
        // remove from the store
        context.state.postItList.splice(pos, 1);
      }
      context.commit('setPostItList', context.state.postItList);
    },

    async addPostIt(context, postIt) {
      const res = await fetch("http://5.135.119.239:3090/notes/", {
        method: "POST",
        body: JSON.stringify(postIt),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();

      context.commit('setPostItList', [
        ...context.state.postItList, {
          _id: data.note_id,
          title: postIt.title,
          content: [postIt.content],
        },
      ])
    }
  },
  modules: {},
});



