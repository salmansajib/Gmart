<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  reviewsCount: {
    type: Number,
    required: true,
    default: 0,
  },
  reviewColor: {
    type: String,
    required: false,
    default: "#CCE1A7",
  },
  starSize: {
    type: Number,
    required: false,
    default: 15,
  },
  reviewFontSize: {
    type: String,
    required: false,
    default: "14px",
  },
});

// Computed property to format the reviews count
const formattedReviews = computed(() => {
  if (props.reviewsCount >= 1000) {
    return (props.reviewsCount / 1000).toFixed(1) + "K";
  }
  return props.reviewsCount;
});
</script>

<template>
  <div class="flex items-center">
    <!-- Loop through 5 stars -->
    <span v-for="(star, index) in 5" :key="index" class="ml-1">
      <svg
        :width="starSize"
        :height="starSize"
        viewBox="0 0 17 15"
        :fill="index < Math.floor(rating) ? '#FFC700' : '#B5CF88'"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.55356 0.774127C7.86157 -0.128685 9.13843 -0.128687 9.44644 0.774124L10.6264 4.23272C10.7645 4.63765 11.145 4.90983 11.5728 4.90983H15.2834C16.2639 4.90983 16.6588 6.17425 15.8525 6.73216L12.9358 8.75034C12.5681 9.00477 12.414 9.47237 12.5584 9.89556L13.692 13.2184C14.0034 14.1312 12.9697 14.9124 12.1766 14.3636L9.06901 12.2134C8.72665 11.9765 8.27335 11.9765 7.93099 12.2134L4.82345 14.3636C4.03034 14.9124 2.99659 14.1312 3.308 13.2184L4.44164 9.89556C4.58602 9.47237 4.43191 9.00477 4.06421 8.75034L1.14754 6.73216C0.341251 6.17425 0.736055 4.90983 1.71655 4.90983H5.42717C5.85502 4.90983 6.23546 4.63765 6.37361 4.23272L7.55356 0.774127Z"
        />
      </svg>
    </span>

    <!-- Format the reviews count -->
    <span
      class="ml-2 text-lg"
      :style="{ color: reviewColor, fontSize: reviewFontSize }"
    >
      {{ formattedReviews }} review
    </span>
  </div>
</template>
