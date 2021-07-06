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
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'TrendingEvent'}">Trending</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="{name: 'OnlineEvent'}">Online</router-link>
            </li>
            </ol>
        </nav>
        <router-view />
    </div>
  </section>
</template>

<script>
import TableEvent from '../components/TableEvent.vue'

export default {
  name: 'Home',
  components: { TableEvent },
  computed: {
    // untuk component ini saja
    // modifikasi data
    events () {
      return this.$store.state.events
    },
    concertEvents () {
      return this.$store.getters.concertEvents
    }
  },
  methods: {
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
    }
  },
  created () {
    this.$store.dispatch('fetchDataEvents')
  }
}
</script>
