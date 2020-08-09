<template>
  <subcomp/>
</template>

<script lang="ts">
/* eslint-disable import/no-duplicates */
import Vue from 'vue'

// not working
import subcomp from '@/views/subfolder/subcomp.vue'
import ExampleTS from '@/interface/ExampleTS'

// relative working
import ExampleTS1 from '../interface/ExampleTS'
import subcomp1 from './subfolder/subcomp.vue'

export default Vue.extend({
  name: 'rootcomp',
  mounted() {
    const ex = new ExampleTS()
    ex.doIt()
    console.log(subcomp1)
    console.log(ExampleTS1)
  },
  components: { subcomp }
})
</script>

<style scoped>

</style>
