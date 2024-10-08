<script setup>
const props = defineProps({
  title: String,
  onNext: Function,
  onPrev: Function,
});
</script>

<template>
  <div class="flex items-center gap-5 mb-5">
    <!-- title -->
    <h2 class="whitespace-nowrap text-[20px] font-semibold text-textclr">
      {{ title }}
    </h2>

    <!-- horizontal line -->
    <div class="w-full flex items-center">
      <div class="size-2 rounded-full bg-textclr"></div>
      <hr class="border-none flex-1 h-[1px] bg-[#A2AF8B]" />
    </div>

    <!-- buttons -->
    <div class="flex items-center gap-2">
      <!-- prev button -->
      <button
        @click="onPrev"
        class="p-[5px] border text-[#9BAB80] border-[#9BAB80] rounded-full hover:bg-[#9BAB80] hover:text-[#fff] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
          />
        </svg>
      </button>
      <!-- next button -->
      <button
        @click="onNext"
        class="p-[5px] border text-[#9BAB80] border-[#9BAB80] rounded-full hover:bg-[#9BAB80] hover:text-[#fff] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
