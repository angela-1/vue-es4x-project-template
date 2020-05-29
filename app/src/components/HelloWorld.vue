<template>
  <h1>{{ msg }}</h1>
  <button @click="fetchData">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    const fetchData = async () => {
      try {
        const url = 'http://127.0.0.1:8888'
        const response = await fetch(url)
        const data = await response.json()
        console.log('rep', data)
        count.value++

        // console.log(response, data)
        // fetch(url)
        //   .then(response => response.json()) //定义返回的类型和数据格式
        //   .then(data => console.log(data)) // 返回的数据
      } catch (e) {
        console.log('Oops, error', e)
      }
    }
    return {
      count,
      fetchData
    }
  }
}
</script>
