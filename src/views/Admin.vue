<template>
  <div class="container">
    <div class="row justify-content-center">
        <UserCard 
        name="Luis Miguel" 
        descripition="Some quick example text to build on the card title and make up the bulk of the card's content." 
        avatar="https://avatars.githubusercontent.com/u/35848866?v=4"
        :nameId="1"
        :age="28"
        />
    </div>

    <div class="row justify-content-center">
        <UserCard 
        name="Luis Miguel" 
        descripition="Some quick example text to build on the card title and make up the bulk of the card's content." 
        avatar="https://avatars.githubusercontent.com/u/35848866?v=4"
        :nameId="2"
        :age="34"
        />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'Admin',
  components: {
    HelloWorld,
    UserCard
  }
}
</script>
