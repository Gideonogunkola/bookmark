<template>
  <div>
    <!-- hero-section-starts -->
    <section class="hero-section">
      <div class="relative">
        <div class="w-3/4 m-auto text-xl text-neut">
          <div class="grid grid-cols-2 gap-10 content-area">
            <div class="h-full flex items-center ">
              <div>
                <h2
                  class="text-6xl font-extrabold tracking-wide text-neut-dark"
                >
                  A Simple Bookmark Manager
                </h2>
                <p class="pt-6 leading-9">
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instantly. Try it for free.
                </p>
                <div class="flex mt-6">
                  <PryBtn name="Get it on Chrome " />
                  <SecBtn name=" Get it on Firefox" />
                </div>
              </div>
            </div>

            <div class="">
              <img
                class="absolute inset-y-28 right-16 z-10"
                src="~/assets/images/illustration-hero.svg"
                alt=""
              />
              <img
                class="absolute right-0 -bottom-1 width"
                src="~/assets/images/shape1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hero-section-ends -->
    <!-- feature-section-starts -->
    <section class="feature-section">
      <div class="relative">
        <div class="w-3/4 m-auto text-xl text-neut">
          <div>
            <h3 class="text-4xl font-bold text-center text-neut-dark">
              Features
            </h3>
            <p class="text-center w-6/12 m-auto leading-9 pt-6">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <Navbarcontent />
        </div>
      </div>
    </section>
    <!-- feature-section-ends -->
    <!-- extension section starts -->
    <section class="extension-section mb-20">
      <div class="w-3/4 m-auto text-xl text-neut">
        <div>
          <h3 class="text-4xl font-bold text-center text-neut-dark pt-16">
            Download the extension
          </h3>
          <p class="text-center w-6/12 m-auto leading-9 pt-6">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div class=" mt-20 mb-14">
          <div class="grid grid-cols-3 gap-2">
            <div class="pb-40">
              <div
                class="w-11/12  flex flex-col items-center justify-center shadow-lg rounded-2xl"
              >
                <img
                  class="pt-10"
                  src="~/assets/images/logo-chrome.svg"
                  alt="chrome"
                />
                <h4 class="text-2xl pt-10 pb-2 font-bold text-neut-dark">
                  Add to Chrome
                </h4>
                <p>Minimum version 62</p>
                <img
                  class="py-10"
                  src="~/assets/images/bg-dots.svg"
                  alt="chrome"
                />
                <PryBtn class="pb-6" name="Add & Install Extension" />
              </div>
            </div>

            <div class="pb-40">
              <div
                class="w-11/12  flex flex-col items-center justify-center shadow-lg rounded-2xl mt-20"
              >
                <img
                  class="pt-10"
                  src="~/assets/images/logo-firefox.svg"
                  alt="chrome"
                />
                <h4 class="text-2xl pt-10 pb-2 font-bold text-neut-dark">
                  Add to Firefox
                </h4>
                <p>Minimum version 55</p>
                <img
                  class="py-10"
                  src="~/assets/images/bg-dots.svg"
                  alt="chrome"
                />
                <PryBtn class="pb-6" name="Add & Install Extension" />
              </div>
            </div>

            <div class="pb-40">
              <div
                class="w-11/12  flex flex-col items-center justify-center shadow-lg rounded-2xl mt-40"
              >
                <img
                  class="pt-10"
                  src="~/assets/images/logo-opera.svg"
                  alt="chrome"
                />
                <h4 class="text-2xl pt-10 pb-2 font-bold text-neut-dark">
                  Add to Opera
                </h4>
                <p>Minimum version 46</p>
                <img
                  class="py-10"
                  src="~/assets/images/bg-dots.svg"
                  alt="chrome"
                />
                <PryBtn class="pb-6" name="Add & Install Extension" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- extension section endss -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.content-area {
  height: calc(100vh - theme("spacing.24"));
}

.width {
  width: 35rem;
}
.feature-section,
.extension-section {
  @apply mt-40;
}
</style>
