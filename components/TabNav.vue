<template>
  <div class="w-11/12 lg:w-8/12 m-auto py-3">
    <div class="flex flex-wrap justify-around cursor-pointer lg:shadow-lg px-0">
      <div v-for="tab in tabs" :key="tab">
        <div
          class=" first w-screen mx-6 lg:mx-0 lg:w-full border-gray-300 border-b-2 lg:border-0 te"
          :class="{ active: tab === selected }"
        >
          <div class=" text-center py-5 px-8 " @click="setTab(tab)">
            {{ tab }}
          </div>
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
.first:first-child {
  border-top: 2px solid #ebebeb;
}
</style>
