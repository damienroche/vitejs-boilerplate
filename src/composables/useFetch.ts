import { toRefs, reactive, watch } from 'vue'

const useFetch = (url: string, options: any) => {
  const state = reactive({
    response: null,
    error: null,
    fetching: true
  })

  const fetchData = async () => {
    try {
      state.fetching = true
      const res = await fetch(url, options)
      const json = await res.json()
      state.response = json
    } catch (errors) {
      state.error = errors
    } finally {
      state.fetching = false
    }
  }

  return {...toRefs(state), fetchData }
}

export default useFetch