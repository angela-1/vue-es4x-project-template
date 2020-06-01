<template functional>
  <div>
    <slot name="title"></slot>
  </div>
  <div class="sticky-toolbar">
    <slot name="toolbar"></slot>
  </div>
  <div>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout'
}
</script>
<style scoped>
.sticky-toolbar {
  position: sticky;
  top: 6px;
  z-index: 9;
  background-color: white;
}
</style>
