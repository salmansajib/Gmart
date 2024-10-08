<script setup></script>

<template>
  <section
    class="overflow-hidden max-w-[95%] mx-auto md:container md:px-2 mt-7"
  >
    <!-- Scrolling container -->
    <div
      class="flex items-center justify-start gap-4 animate-scroll whitespace-nowrap"
    >
      <!-- Duplicate images for infinite scroll effect -->
      <div v-for="i in 3" :key="i" class="flex gap-4">
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/1.png"
            alt="Partner 1"
          />
        </div>
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/2.png"
            alt="Partner 2"
          />
        </div>
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/3.png"
            alt="Partner 3"
          />
        </div>
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/4.png"
            alt="Partner 4"
          />
        </div>
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/5.png"
            alt="Partner 5"
          />
        </div>
        <div>
          <img
            class="max-w-[150px] md:max-w-[200px] lg:max-w-[230px]"
            src="/images/hero-image/partners/6.png"
            alt="Partner 6"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  animation: scroll 50s linear infinite;
}
</style>
