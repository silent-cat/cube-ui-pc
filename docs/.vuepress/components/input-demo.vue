<template>
    <div>
        <wy-input v-model="value" placeholder="请输入内容"></wy-input>
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
         value:''
     }
 }
}
</script>

<style>

</style>