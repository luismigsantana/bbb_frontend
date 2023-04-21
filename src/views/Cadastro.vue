<template>
  <div class="container">
      <div class="row justify-content-center">
          <FormTeste />
      </div>
  </div>
</template>
<script>
import FormTeste from '@/components/FormCandidato.vue'

export default {
    name: 'Home',
    components: {
        FormTeste
    }
}
</script>