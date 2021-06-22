<template>
  <!-- BOARDS -->
  <div class="bg-gray-100 rounded-lg px-2 py-2  rounded min-w-40 w-40">
    <p class="text-gray-700 font-sans text-sm">Phase {{ board.name }}</p>
    <!-- STUDENTS CARDS -->
    <Card
      v-for="student in studentList[board.name]"
      :key="student.id"
      :studentData="student"
    ></Card>
  </div>
  <!-- BOARDS -->
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Board",
  components: { Card },
  props: ["board", "studentList"],
};
</script>

<style></style>
