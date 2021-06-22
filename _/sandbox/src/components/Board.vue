<template>
  <div class="w-100 flex py-4 space-x-5">
    <div
      class="bg-gray-100 rounded-lg px-2 py-2 rounded min-w-40 w-40"
      v-for="board in boards"
      :key="board.id"
    >
      <p class="text-gray-700 font-sans text-sm">Phase {{ board.name }}</p>
      <!-- STUDENTS CARDS -->
      <Card
        v-for="student in filterStudents[board.name]"
        :key="student.id"
        :student="student"
      ></Card>
      <!-- <div v-for="student in filterStudents[board.name]" :key="student.id"> -->
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Board",
  props: ["students", "filterStudents"],
  components: { Card },
  data() {
    return {
      boards: [
        { id: 1, name: "prep" },
        { id: 2, name: "1" },
        { id: 3, name: "2" },
        { id: 4, name: "3" },
      ],
    };
  },
};
</script>

<style></style>
