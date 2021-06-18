<template>
  <div class=" w-8/12 m-auto py-3">
    <div class="flex justify-around cursor-pointer shadow-lg px-0">
      <div v-for="tab in tabs" :key="tab">
        <div
          class="py-5 px-8"
          :class="{ active: tab === selected }"
          @click="setTab(tab)"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    }
  }
};
</script>

<style>
.active {
  @apply border-b-4 border-pry-red;
}
</style>
