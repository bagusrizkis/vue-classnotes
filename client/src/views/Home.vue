<template>
  <section id="home-page" class="row">
    <div class="col-4 d-flex align-items-center" id="home-image">
      <img class="w-100" src="../images/list.png" alt="image" />
    </div>
    <div class="col-8" style="height: 400px">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="../images/map.png" alt="map" style="width: 50px" />
          <h3>Event list</h3>
        </div>
        <button @click="toAddPage" class="btn btn-info float-right">Add Event</button>
      </div>
      <!-- table data -->
      <TableEvent :events="events" />
    </div>
  </section>
</template>

<script>
import TableEvent from '../components/TableEvent.vue'

export default {
  name: 'Home',
  data () {
    return {
      events: []
    }
  },
  components: { TableEvent },
  methods: {
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
    },
    fetchData () {
      this.$axios({
        methods: 'GET',
        url: '/events'
      }).then(({ data }) => {
        this.events = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
