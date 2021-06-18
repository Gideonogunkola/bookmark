<template>
  <div>
    <div class="mt-14">
      <TabNav
        :tabs="['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>
      <div class="">
        <Tab :isSelected="selected === 'Simple Bookmarking'">
          <div class="grid grid-cols-2">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" z-10 absolute left-32 bottom-14"
                  src="~/assets/images/illustration-features-tab-1.svg"
                  alt=""
                />
                <img
                  class="width absolute left-0 -bottom-16"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center pt-32 pb-24">
              <div>
                <h3 class="text-4xl font-bold text-neut-dark pb-6 ">
                  Bookmark in one click
                </h3>
                <p class="leading-9">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-2xl mt-6"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Tab>

        <Tab :isSelected="selected === 'Speedy Searching'">
          <div class="grid grid-cols-2">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" z-10 absolute left-32 bottom-6"
                  src="~/assets/images/illustration-features-tab-2.svg"
                  alt=""
                />
                <img
                  class="width absolute left-0 -bottom-16"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center pt-32 pb-24">
              <div>
                <h3 class="text-4xl font-bold text-neut-dark pb-6 ">
                  Intelligent search
                </h3>
                <p class="leading-9">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.It gives you complete control.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-2xl mt-6"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Tab>

        <Tab :isSelected="selected === 'Easy Sharing'">
          <div class="grid grid-cols-2">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" z-10 absolute left-32 bottom-10"
                  src="~/assets/images/illustration-features-tab-3.svg"
                  alt=""
                />
                <img
                  class="width absolute left-0 -bottom-16"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center pt-32 pb-24">
              <div>
                <h3 class="text-4xl font-bold text-neut-dark pb-6 ">
                  Share your bookmarks
                </h3>
                <p class="leading-9">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button. It gives you complete control.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-2xl mt-6"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Tab>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Simple Bookmarking"
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
};
</script>

<style scoped>
.width {
  width: 35rem;
}
</style>
