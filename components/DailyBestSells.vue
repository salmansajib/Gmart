<script setup>
import products from "/public/data/best-sells.json";
import { ref } from "vue";

// ref for the product container
const productCardContainer = ref(null);

// Scroll to the next set of products
const scrollToNext = () => {
  if (productCardContainer.value) {
    productCardContainer.value.scrollBy({ left: 300, behavior: "smooth" });
  }
};

// Scroll to the previous set of products
const scrollToPrev = () => {
  if (productCardContainer.value) {
    productCardContainer.value.scrollBy({ left: -300, behavior: "smooth" });
  }
};
</script>

<template>
  <section class="mt-12">
    <!-- Header -->
    <div>
      <SectionHeader
        title="Daily Best Sells"
        :onNext="scrollToNext"
        :onPrev="scrollToPrev"
      />
    </div>

    <!-- products -->
    <div
      class="flex gap-5 flex-nowrap justify-left overflow-x-hidden scroll-smooth"
    >
      <!-- Free delivery card -->
      <div
        class="bg-[#fff] rounded-lg p-6 text-center relative overflow-hidden h-[450px] w-[300px] flex-shrink-0"
      >
        <!-- Background image -->
        <div
          class="absolute bg-[url('/images/product-images/daily-best-sells/free-delivery-bg-img.png')] inset-0 bg-cover bg-no-repeat bg-center"
        ></div>

        <!-- Content -->
        <div class="relative z-10">
          <h3 class="text-[32px] text-secondaryclr leading-tight">
            Free delivery starts from <span class="font-bold">$500</span>
          </h3>
          <button
            class="bg-secondaryclr px-6 py-2 text-bgclr rounded-full mt-3 hover:bg-primaryclr transition-colors"
          >
            <NuxtLink to="#">Shop Now</NuxtLink>
          </button>
        </div>
      </div>

      <!-- Products card container -->
      <div
        ref="productCardContainer"
        class="flex gap-5 flex-nowrap justify-left overflow-x-hidden scroll-smooth"
      >
        <!-- Product card -->
        <div
          class="bg-[#fff] w-[260px] text-center p-5 pt-2 rounded-lg overflow-hidden shadow-sm flex-shrink-0"
          v-for="product in products"
          :key="product.id"
        >
          <!-- Discount -->
          <div>
            <p
              class="text-[10px] text-bgclr font-semibold bg-secondaryclr max-w-max px-[10px] py-[6px] rounded-full"
            >
              {{ product.discount }}
            </p>
          </div>
          <!-- Product Image -->
          <div class="border-b border-[#DFE4D5]/75 pb-5 mb-4">
            <img
              class="h-[150px] object-cover"
              :src="product.image"
              :alt="product.name"
            />
          </div>
          <!-- Product details -->
          <div class="space-y-2">
            <h2 class="font-medium text-[16px] text-textclr">
              {{ product.name }}
            </h2>
            <p class="text-textclr">
              <span class="text-[14px] font-bold">{{ product.price }}</span> /
              <span class="text-[12px]">{{ product.weight }}</span>
            </p>
            <div class="flex items-center justify-center">
              <StarRating
                :rating="product.rating.stars"
                :reviews-count="product.rating.reviews"
                :star-size="12"
                review-color="#747E65"
                review-font-size="12px"
              />
            </div>
          </div>
          <!-- Progress bar and product availability -->
          <div class="mt-5">
            <div class="w-full h-[5px] bg-[#E8EEDD] rounded-full mt-2">
              <div
                class="h-full bg-primaryclr rounded-full"
                :style="{ width: product.availability }"
              ></div>
            </div>
            <div class="flex items-center justify-between mt-2">
              <p class="text-secondaryclr text-[12px]">
                Sold: {{ product.sold.current }} / {{ product.sold.total }}
              </p>
              <p class="text-primaryclr text-[12px]">
                {{ product.availability }}
              </p>
            </div>
          </div>
          <!-- Add to cart -->
          <button
            class="bg-primaryclr text-[14px] px-12 py-[5px] rounded-full text-bgclr mt-5 hover:bg-secondaryclr transition-colors"
          >
            {{ product.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
