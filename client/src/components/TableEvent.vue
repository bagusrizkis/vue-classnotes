<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Tag</th>
        <th scope="col">date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(event, i) in events" :key="event.id" >
        <th scope="row">{{ i + 1 }}</th>
        <td>
          <img
            :src="event.imgUrl"
            alt="image"
            style="width: 100px"
          />
        </td>
        <td>{{ event.title }}</td>
        <td>{{ event.tag }}</td>
        <td>{{ event.date }}</td>
        <td>
            <button class="btn btn-warning" @click="toEditPage(event.id)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableEvent',
  props: ['events'],
  methods: {
    toEditPage (id) {
      this.$router.push(`/edit/${id}`).catch(() => {})
    }
  }
}
</script>

<style>
</style>
