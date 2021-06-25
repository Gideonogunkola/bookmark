<template>
  <div>
    <div
      role="button"
      class=" font-bold py-5 px-8 hover:bg-pry hover:text-white duration-300 ease-linear shadow-lg bg-white rounded-xl tracking-wider"
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
