<template>
  <div>
    <div
      role="button"
      class=" font-bold py-5 px-8 shadow-lg hover:bg-white hover:text-neut duration-300 ease-linear bg-pry text-white rounded-xl tracking-wider"
    >
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
