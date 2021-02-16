export const dateStoreBuilder = () => ({
  date: {
    namespaced: true,
    state: {
      dates: []
    },
    getters: {
      dateFields(state) {
        return {
          date: state.dataset && state.dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/Date'),
          startDate: state.dataset && state.dataset.schema.find(f => f['x-refersTo'] === 'https://schema.org/startDate'),
          endDate: state.dataset && state.dataset.schema.find(f => f['x-refersTo'] === 'https://schema.org/endDate')
        }
      }
    },
    mutations: {
      setAny(state, params) {
        Object.assign(state, params)
      }
    }
  }
})

export const dateStore = dateStoreBuilder()
