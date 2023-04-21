<template>
    <div>
        <b-card
            :title="name"
            :img-src="avatar || avatar_default"
            img-alt="Image"
            img-top
            img-width="100px"
            tag="article"
            style="width: 50%; margin: auto"
            class="my-3 d-flex flex-column align-content-center"
        >
            <b-card-sub-title class="mb-2">{{age}} anos</b-card-sub-title>
            <b-card-text>
                {{descripition}}
            </b-card-text>

            <b-card-footer>
                <b-button @click="deleteCandidato()" class="align-self-end" href="#" variant="primary">Go somewhere</b-button>
            </b-card-footer>
            
        </b-card>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String,
    age: Number,
    descripition: String,
    nameId: Number,
    avatar: {
        type: String,
        default: "../assets/robo_bbb.jpeg"
    }
  },
  data(){
      return {
         avatar_default: "https://blog.m2br.com/wp-content/uploads/2021/02/robo-bbb.jpg"
      }
  },
  methods: {
      deleteCandidato() {
          this.$emit("deleteCandidato", this.nameId)
      }
  }
}
</script>