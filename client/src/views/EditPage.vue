<template>
  <section id="add-page" class="row align-items-center">
    <div class="col-6">
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            v-model="title"
            placeholder="Enter title here"
          />
        </div>
        <div class="form-group">
          <label for="tag">Tag</label>
          <input
            type="text"
            class="form-control"
            v-model="tag"
            placeholder="Enter tag here"
          />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control" v-model="date" />
        </div>
        <div class="form-group">
          <label for="imageUrl">imageUrl</label>
          <input
            type="text"
            class="form-control"
            v-model="imgUrl"
            placeholder="Enter imageUrl here"
          />
        </div>
        <button type="submit" class="btn btn-block btn-info">Submit</button>
      </form>
    </div>
    <div class="col-6">
      <h1 class="text-center">Add New Event</h1>
      <img class="w-100" src="../images/addForm.png" alt="image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddPage',
  data () {
    return {
      title: '',
      tag: '',
      date: '',
      imgUrl: ''
    }
  },
  methods: {
    fetchDetail () {
      this.$axios({
        method: 'GET',
        url: '/events/' + this.$route.params.id
      }).then(({ data }) => {
        this.title = data.title
        this.tag = data.tag
        this.date = new Date(data.date).toISOString().slice(0, 10)
        this.imgUrl = data.imgUrl
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.fetchDetail()
  }
}
</script>

<style>
</style>
