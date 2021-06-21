<template>
  <div>
    <div
      v-if="show"
      class=" h-24 w-11/12 xl:w-3/4 m-auto grid grid-cols-2 items-center"
    >
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="~/assets/images/logo-bookmark.svg" alt="" />
        </nuxt-link>
      </div>

      <div class="lg:hidden justify-self-end">
        <img
          src="~/assets/images/icon-hamburger.svg"
          alt="harmburger"
          @click="loader"
        />
      </div>
      <div class="hidden lg:block">
        <div
          class="flex items-center text-base font-medium uppercase tracking-widest text-neut-dark"
        >
          <ul class="flex w-full justify-evenly">
            <li>
              <div class="h-14 pt-4">
                <nuxt-link to="/">Features</nuxt-link>
              </div>
            </li>
            <li>
              <div class="h-14 pt-4">
                <nuxt-link to="/">Pricing</nuxt-link>
              </div>
            </li>
            <li>
              <div class="h-14 pt-4">
                <nuxt-link to="/">Contact</nuxt-link>
              </div>
            </li>
            <li>
              <div
                class=" font-bold h-14 bg-pry-red text-white py-4 px-12 rounded-xl shadow-lg"
              >
                <nuxt-link to="/">Login</nuxt-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- mobile-menu -->
    <div v-if="load" class="absolute top-0 z-50">
      <div class="bg-neut-dark bg-opacity-95 h-screen w-screen">
        <div class="w-4/5 m-auto flex justify-between h-28">
          <div class="flex items-center">
            <nuxt-link to="/">
              <img src="~/assets/images/logo-bookmark-2.svg" alt="" />
            </nuxt-link>
          </div>
          <div class="flex items-center" @click="shower">
            <img src="~/assets/images/icon-close.svg" alt="" />
          </div>
        </div>

        <div
          class="flex items-center text-base font-medium uppercase text-white w-4/5 m-auto"
        >
          <ul class="flex flex-col w-full">
            <li>
              <div
                class="py-5 border-white border-t-0.5 text-center tracking-widest"
              >
                <nuxt-link to="/">Features</nuxt-link>
              </div>
            </li>
            <li>
              <div
                class="py-5 border-white border-t-0.5 text-center tracking-widest"
              >
                <nuxt-link to="/">Pricing</nuxt-link>
              </div>
            </li>
            <li>
              <div
                class="py-5 border-white border-t-0.5 border-b-0.5 text-center tracking-widest"
              >
                <nuxt-link to="/">Contact</nuxt-link>
              </div>
            </li>
            <li>
              <div
                class=" font-bold h-14 bg-transparent border-2 border-white text-white py-4 px-12 rounded-xl shadow-lg text-center mt-6 tracking-widest"
              >
                <nuxt-link to="/">Login</nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex justify-center lg:justify-end pt-44 pb-2  ">
          <img
            class="pr-12"
            src="~/assets/images/icon-facebook.svg"
            alt="facebook-icon"
          />
          <img src="~/assets/images/icon-twitter.svg" alt="twitter-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      show: true
    };
  },
  methods: {
    loader() {
      this.show = false;
      this.load = true;
    },
    shower() {
      this.show = true;
      this.load = false;
    }
  }
};
</script>

<style></style>
