<template>
  <div>
    <div
      role="button"
      class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-2xl tracking-wider"
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
