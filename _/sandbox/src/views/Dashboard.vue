<template>
  <!-- ! BEGIN DASHBOARD -->
  <div class="flex justify-center overflow-y-scroll">
    <!-- BOARDS -->
    <Board :students="students" :filterStudents="filterStudents"></Board>
    <!-- BOARDS -->
  </div>
  <!-- END DASHBOARD -->
</template>

<script>
import axios from "axios";
import Board from "../components/Board.vue";

export default {
  name: "Dashboard",
  components: { Board },
  data() {
    return {
      students: [],
    };
  },
  computed: {
    filterStudents() {
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
