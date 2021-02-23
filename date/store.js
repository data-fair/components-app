export const dateStoreBuilder = () => ({
  date: {
    namespaced: true,
    state: {
      dates: []
    },
    getters: {
      dateFields(state, getters, rootState) {
        return {
          date: rootState.dataset && rootState.dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/Date'),
          startDate: rootState.dataset && rootState.dataset.schema.find(f => f['x-refersTo'] === 'https://schema.org/startDate'),
          endDate: rootState.dataset && rootState.dataset.schema.find(f => f['x-refersTo'] === 'https://schema.org/endDate')
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
