<template>
  <div>
    <div
      role="button"
      class=" font font-bold py-5 px-8 ml-8 shadow-lg rounded-xl"
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
