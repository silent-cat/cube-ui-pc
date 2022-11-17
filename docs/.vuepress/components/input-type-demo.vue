<template>
    <div>
        <wy-input type="password" placeholder="password"></wy-input>
        <wy-input type="time"></wy-input>
        <wy-input type="date"></wy-input>
        <wy-input type="search" placeholder="可清空"></wy-input>
        <wy-input type="week"></wy-input>
    </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
 components:{
     'wy-input':Input
 },
}
</script>

<style>

</style>