<template>
  <div class="mt-32">
    <!-- newsletter -section -->
    <section class="newsletter-section">
      <div
        class="flex flex-col justify-center items-center py-24 bg-pry text-white"
      >
        <p class="uppercase tracking-morewidest">
          35,000+ already joined
        </p>
        <h2
          class="hidden lg:block text-5xl font-bold leading-tight text-center tracking-wider py-12"
        >
          Stay up-to-date with what <br />
          we’re doing
        </h2>
        <h2
          class="lg:hidden text-3xl font-bold leading-tight text-center tracking-wider py-12"
        >
          Stay up-to-date with<br />
          what we’re doing
        </h2>
        <form @click.prevent="" class="text-2xl text-neut">
          <div class="flex flex-wrap justify-center w-11/12 lg:w-full m-auto">
            <input
              class="p-6 lg:w-96 rounded-xl"
              type="email"
              placeholder="Enter your email address"
            />
            <input
              class="p-6 w-full lg:w-max bg-pry-red text-white rounded-xl mt-4 lg:mt-0 lg:ml-4"
              type="submit"
              value="Contact us"
            />
          </div>
        </form>
      </div>
    </section>
    <!-- newsletter-section-ends -->

    <!-- Footer-bottom-section-starts -->
    <div class="bg-neut-dark py-8 ">
      <div class="w-11/12 xl:w-3/4 m-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 text-white">
          <div class="flex justify-center lg:justify-start ">
            <img src="~/assets/images/logo-bookmark-2.svg" alt="" />
          </div>
          <div class=" flex flex-col lg:flex-row w-full items-center uppercase">
            <nuxt-link class="pt-12 lg:pt-0 lg:pl-14 hover:text-pry-red" to="/"
              >Features</nuxt-link
            >
            <nuxt-link class="pt-6 lg:pt-0 lg:pl-14 hover:text-pry-red" to="/"
              >Pricing</nuxt-link
            >
            <nuxt-link class="pt-6 lg:pt-0 lg:pl-14 hover:text-pry-red" to="/"
              >Contact</nuxt-link
            >
          </div>
          <div
            class="flex justify-center lg:justify-end pt-12 pb-2 lg:pt-0 lg:pb-0 "
          >
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

    <!-- Footer-bottom-section-ends -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
