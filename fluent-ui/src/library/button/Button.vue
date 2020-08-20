<template>
    <button :class="props.class">

    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    class: String,
    text: String
  }
}
</script>

<style lang="scss">

</style>