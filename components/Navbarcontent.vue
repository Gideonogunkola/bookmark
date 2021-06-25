<template>
  <div>
    <div class="mt-14">
      <TabNav
        class="lg:mb-8"
        :tabs="['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>
      <div class="">
        <Tab :isSelected="selected === 'Simple Bookmarking'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" relative z-10 lg:absolute lg:left-14 xl:left-32 lg:bottom-8 -bottom-8"
                  src="~/assets/images/illustration-features-tab-1.svg"
                  alt=""
                />
                <img
                  class=" width relative lg:absolute -left-14 xl:left-0 lg:-bottom-16 bottom-16"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center lg:py-16 -mt-20 lg:mt-0">
              <div>
                <h3
                  class=" text-2xl lg:text-4xl font-bold text-neut-dark pb-6 "
                >
                  Bookmark in one click
                </h3>
                <p class="leading-9">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-xl mt-6 hover:bg-white hover:text-neut duration-300 ease-linear"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Tab>

        <Tab :isSelected="selected === 'Speedy Searching'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" z-10 relative lg:absolute lg:left-14 xl:left-40 lg:-bottom-10 -bottom-8"
                  src="~/assets/images/illustration-features-tab-2.svg"
                  alt=""
                />
                <img
                  class="width relative lg:absolute -left-14 xl:left-0 lg:-bottom-16 bottom-20"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center lg:py-16 -mt-20 lg:mt-0">
              <div>
                <h3
                  class=" text-2xl lg:text-4xl font-bold text-neut-dark pb-6 "
                >
                  Intelligent search
                </h3>
                <p class="leading-9">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.It gives you complete control.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-xl mt-6 hover:bg-white hover:text-neut duration-300 ease-linear"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </Tab>

        <Tab :isSelected="selected === 'Easy Sharing'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0">
            <div class="h-full flex items-center ">
              <div>
                <img
                  class=" z-10 relative lg:absolute lg:left-36 xl:left-52 lg:-bottom-3 -bottom-8"
                  src="~/assets/images/illustration-features-tab-3.svg"
                  alt=""
                />
                <img
                  class="width relative lg:absolute -left-14 xl:left-0 lg:-bottom-16 bottom-20"
                  src="~/assets/images/shape2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="flex items-center lg:py-16 -mt-20 lg:mt-0">
              <div>
                <h3 class="text-2xl lg:text-4xl font-bold text-neut-dark pb-6 ">
                  Share your bookmarks
                </h3>
                <p class="leading-9">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button. It gives you complete control.
                </p>
                <button
                  class=" font-bold py-5 px-8 shadow-lg bg-pry text-white rounded-xl mt-6 hover:bg-white hover:text-neut duration-300 ease-linear"
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
