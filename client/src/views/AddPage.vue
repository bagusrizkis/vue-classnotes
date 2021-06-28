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
        <button @click.prevent="addEvent" type="submit" class="btn btn-block btn-info">Submit</button>
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
    addEvent () {
      this.$axios({
        method: 'POST',
        url: '/events',
        data: {
          title: this.title,
          tag: this.tag,
          date: this.date,
          imgUrl: this.imgUrl
        }
      }).then(() => {
        // pindah halaman
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
