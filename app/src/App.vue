<template>
  <div class="d-flex flex-row">
    <div class="col-2" style="border-right: 1px solid blue;">left panel</div>
    <div class="col-10 p-5">
      <GenerateTemplate></GenerateTemplate>
    </div>
  </div>
</template>

<script>
import GenerateTemplate from './views/office/GenerateTemplate.vue'

export default {
  name: 'App',
  components: {
    GenerateTemplate
  }
}
</script>
