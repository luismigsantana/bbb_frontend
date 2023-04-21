<template>
  <div class="container">
    <b-card  v-show="show" class="mt-3 foto" :img-src="form.avatar_url || avatar_default">
    </b-card>
    <b-form @submit="onSubmit" @reset="onReset" v-show="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nome"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Idade:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.idade"
          type="number"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Avatar Url:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.avatar_url"
          placeholder="Enter url img"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Sobre:" label-for="input-4">
        <b-form-textarea
        id="input-4"
        v-model="form.sobre"
        placeholder="Enter something..."
        :state="form.sobre.length <= 500"
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    
        <div class="buttons">
            <b-button class="mx-1" type="submit" variant="primary">Submit</b-button>
            <b-button class="mx-1" type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>

    <div class="buttons" v-show="!show">
        <b-button class="mx-1" type="reset" variant="primary" @click="novo()">Novo Cadastro</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          nome: '',
          sobre: '',
          idade: null,
          avatar_url: null
        },
        avatar_default: "https://blog.m2br.com/wp-content/uploads/2021/02/robo-bbb.jpg",
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: false
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.show = false
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        if (event){
            event.preventDefault()
        }
        // Reset our form values
        this.form.email = ''
        this.form.nome = ''
        this.form.sobre = ''
        this.form.idade = null
        this.form.avatar_url = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      novo() {
          this.onReset()
      }
    }
  }
</script>
<style scoped>

.foto{
    width: 20%;
    margin: auto;
}

.form {
    width: 70%;
    margin: auto;
}

.buttons {
    display: flex;
    justify-content: center;
    padding: 1em;
}

</style>>