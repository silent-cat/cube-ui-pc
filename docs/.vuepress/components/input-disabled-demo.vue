<template>
    <div>
        <wy-input v-model="value" placeholder="禁用输入框" disabled></wy-input>
    </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
 components:{
     'wy-input':Input
 },
 data(){
     return {
         value:'禁用'
     }
 }
}
</script>

<style>

</style>