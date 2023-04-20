<template>
    <div>
        <b-card
            :title="name"
            :img-src="avatar"
            img-alt="Image"
            img-top
            img-width="100px"
            tag="article"
            style="width: 80%; margin: auto"
            class="my-3 d-flex flex-column align-content-center"
        >
            <b-card-sub-title class="mb-2">{{age}} anos</b-card-sub-title>
            <b-card-text>
                {{descripition}}
            </b-card-text>

            <b-card-footer>
                <b-button class="align-self-end" href="#" variant="primary">Go somewhere</b-button>
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
    avatar: String,
    nameId: Number
  },
  created() {
      console.log(this.nameId)
  }
}
</script>