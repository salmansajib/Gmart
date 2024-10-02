<script setup>
const totalItemsInCart = ref(8);
</script>

<template>
  <section>
    <!-- Upper part of the header -->
    <div
      class="flex items-center justify-between w-full max-w-[95%] md:container mx-auto"
    >
      <!-- logo -->
      <NuxtLink to="/" class="mb-2">
        <img src="/images/logo/Layer_1.png" alt="logo" />
      </NuxtLink>
      <!-- search field -->
      <div class="relative max-w-[450px] w-full h-[45px]">
        <input
          class="bg-[#F7FCEE] w-full h-full px-3 placeholder:text-primaryclr border border-[#DCE8CA] rounded-[4px] text-slate-900"
          type="text"
          placeholder="search item"
        />
        <img
          class="absolute top-1/2 -translate-y-1/2 right-[12px] text-green-700 cursor-pointer"
          src="/icons/header-icons/Magnifying glass.png"
          alt="magnifying glass icon"
        />
      </div>
      <!-- location, cart, sign in -->
      <div class="flex items-center gap-8">
        <button class="flex items-center gap-1">
          <img src="/icons/header-icons/Address.png" alt="location icon" />
          <p class="text-[14px] font-normal text-textclr">New York, USA</p>
        </button>
        <NuxtLink to="#" class="flex items-center gap-1">
          <div class="relative">
            <img
              src="/icons/header-icons/Shopping bag.png"
              alt="shopping cart icon"
            />
            <p
              class="absolute -top-[8px] -left-[10px] text-[10px] text-bgclr font-semibold size-[17px] flex items-center justify-center rounded-full bg-primaryclr"
            >
              {{ totalItemsInCart }}
            </p>
          </div>
          <p class="text-[14px] font-normal text-textclr">My Bag</p>
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-1">
          <img src="/icons/header-icons/Refer.png" alt="sign in icon" />
          <p class="text-[14px] font-normal text-textclr">Sign in</p>
        </NuxtLink>
      </div>
    </div>

    <!-- lower part of the header -->
    <div class="bg-primaryclr mt-7 h-[44px] flex items-center w-full">
      <div
        class="flex items-center justify-between max-w-[95%] md:container mx-auto"
      >
        <div class="flex items-center gap-3">
          <button
            class="group bg-secondaryclr size-[44px] p-0 border-none bg-transparent cursor-pointer inline-flex items-center justify-center"
          >
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="top-line transition-all duration-300"
                x="5"
                width="15"
                height="2"
                rx="1"
                fill="white"
              />
              <rect
                class="middle-line"
                y="7"
                width="25"
                height="2"
                rx="1"
                fill="white"
              />
              <rect
                class="bottom-line transition-all duration-300"
                x="5"
                y="14"
                width="15"
                height="2"
                rx="1"
                fill="white"
              />
            </svg>
          </button>

          <button class="text-[15px] font-medium text-bgclr">Categories</button>
        </div>

        <!-- Navigation Links -->
        <div>
          <Navigation />
        </div>

        <!-- Rating -->
        <div>
          <StarRating :rating="4.5" :reviewsCount="3400" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .top-line,
.group:hover .bottom-line {
  width: 25px;
  x: 0;
}
</style>
