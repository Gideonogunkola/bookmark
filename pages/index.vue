<template>
  <div class="overflow-x-hidden">
    <!-- hero-section-starts -->
    <section class="hero-section">
      <div class="relative">
        <div class="w-11/12 xl:w-3/4 m-auto md:text-xl text-neut">
          <div
            class=" mt-14 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-10 content-area"
          >
            <div
              class="h-full flex items-center order-last lg:order-first -mt-20 lg:mt-0"
            >
              <div>
                <h2
                  class=" text-3xl text-center lg:text-left lg:text-5xl xl:text-6xl font-extrabold tracking-wide text-neut-dark"
                >
                  A Simple Bookmark Manager
                </h2>
                <p class=" text-xl pt-6 leading-9">
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instantly. Try it for free.
                </p>
                <div
                  class=" text-xl flex flex-wrap justify-center lg:justify-start mt-6"
                >
                  <PryBtn name="Get it on Chrome " />
                  <SecBtn
                    class="mt-6 lg:mt-0 lg:ml-8"
                    name=" Get it on Firefox"
                  />
                </div>
              </div>
            </div>

            <div class="order-first lg:order-last">
              <img
                class=" relative lg:absolute top-0 lg:inset-y-28 lg:right-0 xl:right-16 z-10"
                src="~/assets/images/illustration-hero.svg"
                alt=""
              />
              <img
                class="relative lg:absolute -right-20 lg:right-0 bottom-40 lg:-bottom-1 width"
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
    <section class="feature-section pt-72 lg:pt-0">
      <div class="relative">
        <div class="w-11/12 xl:w-3/4 m-auto text-xl text-neut">
          <div>
            <h3
              class=" text-2xl lg:text-4xl font-bold text-center text-neut-dark"
            >
              Features
            </h3>
            <p class="text-center w-full lg:w-6/12 m-auto leading-9 pt-6">
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
    <section class="extension-section lg:mt-10">
      <div class="w-11/12 xl:w-3/4 m-auto text-xl text-neut">
        <div>
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-neut-dark pt-16"
          >
            Download the extension
          </h3>
          <p class="text-center lg:w-6/12 m-auto leading-9 pt-6">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div class=" mt-14">
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
            <div
              class="lg:pb-40 justify-items-center lg:justify-items-start m-auto lg:m-0"
            >
              <div
                class="lg:w-11/12   flex flex-col items-center justify-center shadow-lg rounded-2xl"
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

            <div
              class="justify-items-center lg:justify-items-start m-auto lg:m-0"
            >
              <div
                class="lg:w-11/12  flex flex-col items-center justify-center shadow-lg rounded-2xl lg:mt-20"
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

            <div
              class="justify-items-center lg:justify-items-start m-auto lg:m-0"
            >
              <div
                class="lg:w-11/12  flex flex-col items-center justify-center shadow-lg rounded-2xl lg:mt-40"
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
    <!-- FAQ section starts -->
    <section class="faq-section">
      <div class="w-11/12 xl:w-3/4 m-auto text-xl text-neut">
        <div>
          <h3
            class=" text-2xl lg:text-4xl font-bold text-center text-neut-dark pt-16"
          >
            Frequently Asked Questions
          </h3>
          <p class="text-center lg:w-6/12 m-auto leading-9 pt-6">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us..
          </p>
        </div>

        <div class="lg:w-6/12 m-auto mt-10 leading-9">
          <Accordion>
            <Accordion-item>
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger" class="w-6/12">
                <div class="w-full flex justify-between items-center">
                  <h3
                    class="text-xl lg:text-2xl font-medium hover:text-pry-red text-neut-dark"
                  >
                    What is Bookmark?
                  </h3>
                  <img
                    class=" w-6 h-3 lg:w-8 lg:h-5"
                    src="~/assets/images/icon-arrow.svg"
                    alt="icon"
                  />
                </div>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <div class="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </template>
            </Accordion-item>
            <Accordion-item>
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger" class="w-6/12">
                <div class="w-full flex justify-between items-center">
                  <h3
                    class="text-xl lg:text-2xl font-medium hover:text-pry-red text-neut-dark"
                  >
                    How can I request a new browser?
                  </h3>
                  <img
                    class="w-6 h-3 lg:w-8 lg:h-5"
                    src="~/assets/images/icon-arrow.svg"
                    alt="icon"
                  />
                </div>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <div class="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </template>
            </Accordion-item>
            <Accordion-item>
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger" class="w-6/12">
                <div class="w-full flex justify-between items-center">
                  <h3
                    class="text-xl lg:text-2xl font-medium hover:text-pry-red text-neut-dark"
                  >
                    Is there a mobile app?
                  </h3>
                  <img
                    class="w-6 h-3 lg:w-8 lg:h-5"
                    src="~/assets/images/icon-arrow.svg"
                    alt="icon"
                  />
                </div>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <div class="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </template>
            </Accordion-item>
            <Accordion-item>
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger" class="w-6/12">
                <div class="w-full flex justify-between items-center">
                  <h3
                    class="text-xl lg:text-2xltext-2xl font-medium hover:text-pry-red text-neut-dark"
                  >
                    What about other Chromium browsers?
                  </h3>
                  <img
                    class="w-6 h-3 lg:w-8 lg:h-5"
                    src="~/assets/images/icon-arrow.svg"
                    alt="icon"
                  />
                </div>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <div class="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </template>
            </Accordion-item>
            <Accordion-item>
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger" class="w-6/12">
                <div class="w-full flex justify-between items-center">
                  <h3
                    class="text-xl lg:text-2xl font-medium hover:text-pry-red text-neut-dark"
                  >
                    What is Bookmark?
                  </h3>
                  <img
                    class="w-6 h-3 lg:w-8 lg:h-5"
                    src="~/assets/images/icon-arrow.svg"
                    alt="icon"
                  />
                </div>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <div class="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </template>
            </Accordion-item>
          </Accordion>
        </div>
        <div class="flex justify-center p-16">
          <PryBtn name="More Info" />
        </div>
      </div>
    </section>
    <!-- FAQ section endss -->
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
.extension-section,
.faq-section {
  @apply mt-20 lg:mt-32;
}
</style>
