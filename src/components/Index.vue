<template>
  <div class="Index clearfix"  id="Index">
    <div class="Menu" id="Menu">
      <div class="userImg" >
        <img src="../images/default2.jpg"/>
      </div>
      <ul class="menuList">
        <li :class="['message',{'current':$store.state.menu.cause === true && $store.state.menu.other === false}]" @click="$store.commit('menustate',{type:true,flag:false,messageNum:$store.state.menu.messageNum,applyNum:$store.state.menu.applyNum})">
           <div class="icon"></div>
           <span class="messageNum" v-show="$store.state.menu.messageNum > 0">{{$store.state.menu.messageNum > 99 ? '99+' : $store.state.menu.messageNum}}</span>
        </li>
        <li :class="['friends',{'current':$store.state.menu.cause === false && $store.state.menu.other === false}]" @click="$store.commit('menustate',{type:false,flag:false,messageNum:$store.state.menu.messageNum,applyNum:$store.state.menu.applyNum})">
           <div class="icon"></div>
           <span class="messageNum" v-show="$store.state.menu.applyNum > 0">{{$store.state.menu.applyNum > 99 ? '99+' : $store.state.menu.applyNum}}</span>
        </li>
        <li :class="['collection',{'current':$store.state.menu.cause === false && $store.state.menu.other === true}]" @click="$store.commit('menustate',{type:false,flag:true,messageNum:$store.state.menu.messageNum,applyNum:$store.state.menu.applyNum})">
           <div class="icon"></div>
           <span class="messageNum" v-show="$store.state.menu.applyNum > 0">{{$store.state.menu.applyNum > 99 ? '99+' : $store.state.menu.applyNum}}</span>
        </li>
      </ul>
      <ul class="otherList">
         <li class="addFriends" @click="$store.commit('menustate',{type:false,flag:true,messageNum:$store.state.menu.messageNum,applyNum:$store.state.menu.applyNum})">
             <div class="icon"></div>
         </li>
      </ul>
    </div>
    <div class="Content" id="Content">
      <Chat v-show="$store.state.menu.cause === true && $store.state.menu.other === false"></Chat>
      <Contacts v-show="$store.state.menu.cause === false && $store.state.menu.other === false"></Contacts>
      <collection v-show="$store.state.menu.other === true && $store.state.menu.cause === false "></collection>
    </div>
    <RulePop v-show="$store.state.rule.status === true"></RulePop>
  </div>
</template>
<script>
import RulePop from './RulePop.vue'
import Chat from './Chat.vue'
import Contacts from './Contacts.vue'
import collection from './collection.vue'
import store from '@/store/index.js'
export default {
  name: 'Index',
  components: {
    RulePop:RulePop,
    Chat: Chat,
    Contacts: Contacts,
    collection: collection
  },
  data () {
    return {
      iscurrent:this.$store.state.menu.cause,
      collection:this.$store.state.menu.other,
    }
  },
  methods: {
  },
  mounted(){

  },
  created: function () {
  
  }
}
</script>
<style scoped>
  @import '../sass/stylesheets/Index.css'
</style>
