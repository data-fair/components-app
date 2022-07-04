<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="36"
    :nudge-bottom="20"
    direction="bottom"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="field.title ? field.title : field.key"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        hide-details="auto"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      show-week
      :min="min"
      :max="max"
      first-day-of-week="1"
      no-title
      scrollable
      locale="fr"
      @input="menu=false;$emit('input', date)"
    />
  </v-menu>
</template>

<script>
export default {
  props: {
    value: { type: String, default: null },
    field: { type: Object, required: true },
    min: { type: String, default: undefined },
    max: { type: String, default: undefined }
  },
  data: function () {
    return {
      date:  (this.value && this.value.substr(0, 10)) || this.max || this.min || new Date().toISOString().substr(0, 10),
      menu: null
    }
  },
  watch: {
    value (val) {
      this.date = val ? val.substr(0, 10) : val
    }
  },
  mounted () {
    this.date = this.value
  }
}
</script>
