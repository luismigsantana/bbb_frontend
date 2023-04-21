<template>
  <div class="container">
    <div v-for="pessoa in candidatos" :key="pessoa.id" class="row justify-content-center">
      <UserCard 
        :name="pessoa.nome" 
        :descripition="pessoa.sobre" 
        :avatar="pessoa.avatar_url"
        :nameId="pessoa.id"
        :age="pessoa.idade"
        v-on:deleteCandidato="submitDelete"
        />
    </div>

    <div v-show="candidatos.length == 0" class="row justify-content-center text-center p-3">
      <h4>Sem candidatos inscritos</h4>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import api from '@/api.js'

export default {
  name: 'Admin',
  components: {
    UserCard
  },
  data() {
    return {
      candidatos: []
    }
  },
  beforeCreate() {
    api.get('/api/candidatos').then( (response ) => {
      this.candidatos = response.data
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    submitDelete(nameId){
      var resposta = confirm("Deseja mesmo deletar candidato?");
      if (!resposta) {
        return null
      }

      this.candidatos = this.candidatos.filter( (candidato) => {
        return candidato.id !== nameId
      } )

      api.delete(`/api/candidatos/${nameId}`).then( () => {
        console.log('candidato excluido')
      }).catch( (err) => {
        console.log(`Erro para excluir candidato: ${err.message}`)
      } )
    }
  }
}
</script>
