<template>
  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="dateRangeText" v-bind="attrs" :label="field.title ? field.title : field.key" prepend-icon="mdi-calendar" readonly v-on="on"/>
    </template>
    <v-date-picker v-model="dates" :max="max" :first-day-of-week="1" :min="min" data-iframe-height scrollable range locale="fr">
      <v-btn text @click="clearInput()">Réinitialiser</v-btn>
      <v-btn text @click="$emit('input', orderedDates);menu=false">Ok</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    value: { type: Array, required: true, default: Array },
    field: { type: Object, required: true },
    min: { type: String, default: undefined },
    max: { type: String, default: undefined }
  },
  data: () => ({
    menu: false,
    dates: []
  }),
  computed: {
    orderedDates() {
      if (!this.dates[1]) return this.dates
      return dayjs(this.dates[0]).isBefore(dayjs(this.dates[1])) ? this.dates : [this.dates[1], this.dates[0]]
    },
    dateRangeText() {
      return this.orderedDates.join(' ~ ')
    }
  },
  watch: {
    value(val) {
      this.dates = val
    }
  },
  mounted() {
    this.dates = this.value
  },
  methods: {
    clearInput() {
      this.dates = this.min && this.max ? [this.min, this.max] : []
      this.$emit('input', this.orderedDates)
    }
  }
}
</script>

<style></style>
