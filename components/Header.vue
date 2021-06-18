<template>
  <div>
    <div class=" h-24 w-3/4 m-auto grid grid-cols-2">
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="~/assets/images/logo-bookmark.svg" alt="" />
        </nuxt-link>
      </div>

      <div class="flex items-center text-base font-medium uppercase tracking-widest text-neut-dark">
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
          <li >
              <div class=" font-bold h-14 bg-pry-red text-white py-4 px-12 rounded-xl shadow-lg">
                  <nuxt-link to="/">Login</nuxt-link>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
