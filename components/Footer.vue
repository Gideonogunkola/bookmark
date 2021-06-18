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
          class="text-5xl font-bold leading-tight text-center tracking-wider py-12"
        >
          Stay up-to-date with what <br />
          we’re doing
        </h2>
        <form @click.prevent="" class="text-2xl text-neut">
          <input
            class="p-6 w-96 rounded-xl"
            type="email"
            placeholder="Enter your email address"
          />
          <input
            class="p-6 bg-pry-red text-white rounded-xl ml-4"
            type="submit"
            value="Contact us"
          />
        </form>
      </div>
    </section>
    <!-- newsletter-section-ends -->

    <!-- Footer-bottom-section-starts -->
    <div class="bg-neut-dark py-8 ">
      <div class="w-3/4 m-auto">
        <div class="grid grid-cols-3 text-white">
          <div class="flex col-span-2 w-full items-center uppercase">
            <img src="~/assets/images/logo-bookmark-2.svg" alt="" />
            <nuxt-link class="pl-14 hover:text-pry-red" to="/"
              >Features</nuxt-link
            >
            <nuxt-link class="pl-14 hover:text-pry-red" to="/"
              >Pricing</nuxt-link
            >
            <nuxt-link class="pl-14 hover:text-pry-red" to="/"
              >Contact</nuxt-link
            >
          </div>
          <div class="flex justify-end">
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
