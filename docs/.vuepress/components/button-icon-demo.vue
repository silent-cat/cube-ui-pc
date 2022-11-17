<template>
  <div>
    <wy-row>
      <wy-button icon="add" type="success">添加</wy-button>
      <wy-button icon="edit">编辑</wy-button>
      <wy-button icon="delete" type="danger">删除</wy-button>
    </wy-row>
    <wy-row>
      <wy-button icon="add" type="success" icon-position="right">添加</wy-button>
      <wy-button icon="edit" icon-position="right">编辑</wy-button>
      <wy-button icon="delete" type="danger" icon-position="right">删除</wy-button>
    </wy-row>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import Row from '../../../src/Row'
export default {
  components: {
    'wy-button': Button,
    'wy-row': Row
  }
}
</script>

<style></style>
