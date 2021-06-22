<template>
  <!-- ! BEGIN DASHBOARD -->
  <div class="flex justify-center overflow-y-scroll">
    <div class="w-100 flex py-4 space-x-5">
      <!-- BOARD -->
      <Board
        v-for="board in boards"
        :key="board.id"
        :board="board"
        :studentList="filteredStudents"
      ></Board>
      <!-- ADD -->
    </div>
  </div>
  <!-- END DASHBOARD -->
</template>

<script>
import axios from "axios";
import Board from "../components/Board.vue";

export default {
  components: { Board },
  data() {
    return {
      boards: [
        { id: 1, name: "prep" },
        { id: 2, name: "1" },
        { id: 3, name: "2" },
        { id: 4, name: "3" },
      ],
      students: [],
    };
  },
  computed: {
    filteredStudents() {
      let a = {};
      this.students.forEach((e) => {
        if (a[e.phase] == undefined) a[e.phase] = [];
        a[e.phase].push(e);
      });
      return a;
    },
  },
  methods: {
    fetchStudents() {
      axios({
        method: "GET",
        url: "http://localhost:3000/students",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.students = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchStudents();
  },
};
</script>

<style></style>
