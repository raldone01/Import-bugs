<template>
  <div>Sub</div>
</template>

<script lang="ts">
import Vue from 'vue'

// works for whatever reason
import rootcomp from '@/views/rootcomp.vue'
import ExampleTS from '@/interface/ExampleTS'

export default Vue.extend({
  name: 'subcomp',
  mounted() {
    const ex = new ExampleTS()
    ex.doIt()
    console.log(rootcomp)
  }
})
</script>

<style scoped>

</style>
