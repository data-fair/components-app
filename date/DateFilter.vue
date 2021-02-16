<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
    <template v-slot:activator="{ on }">
      <v-btn
        v-model="date"
        icon
        color="white"
        class="pr-4"
        v-on="on"
      >
        <v-icon color="primary">mdi-calendar</v-icon>
      </v-btn>
    </template>
    <v-date-picker
      v-model="date"
      :range="rangeMode"
    />
  </v-menu>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: null
  }),
  computed: {
    ...mapState(['dataset']),
    ...mapGetters(['config']),
    rangeMode () {
      return this.config.filterByDate === 'interval'
    }
  },
  watch: {
    date() {
      if (!this.rangeMode || this.date.length === 2) {
        this.menu = false
        this.$store.commit('date/setAny', { dates: this.rangeMode ? this.date : [this.date] })
      }
    }
  },
  mounted() {
    if (this.rangeMode) this.date = [moment().toISOString().substr(0, 10), moment().add(1, 'days').toISOString().substr(0, 10)]
  }
}
</script>

<style lang="css">
</style>
