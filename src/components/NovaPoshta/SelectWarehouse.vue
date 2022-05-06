<template>
<div>

</div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SelectWarehouse',
  setup () {
    const store = useStore()
    return {
      isPreload: computed(() => store.getters.getIsPreload)
    }
  }
})
</script>

<style scoped>

</style>
