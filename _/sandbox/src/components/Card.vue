<template>
  <div>
    <div class="bg-white shadow rounded px-2 pt-3 mb-1 border border-white">
      <div class="flex justify-between items-center">
        <p class="text-gray-700 font-semibold font-sans text-sm">
          {{ student.name }}
        </p>
        <img
          class="w-4 h-4 rounded-full"
          src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
          alt="Avatar"
        />
      </div>
      <div class="flex mt-4 justify-between items-center"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["student"],
};
</script>

<style></style>
