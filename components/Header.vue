<script setup>
import { Search } from "lucide-vue-next";

const totalItemsInCart = ref(8);
</script>

<template>
  <div>
    <!-- Upper part of the header -->
    <div class="flex items-center justify-between">
      <!-- logo -->
      <img src="../assets/images/logo/Layer_1.png" alt="logo" />
      <!-- search field -->
      <div class="relative max-w-[400px] w-full h-[40px]">
        <input
          class="bg-green-100 w-full h-full px-5 placeholder:text-green-500 border border-green-300 rounded-[4px]"
          type="text"
          placeholder="search item"
        />
        <Search
          class="absolute top-1/2 -translate-y-1/2 right-[20px] text-green-700 cursor-pointer"
          :size="20"
        />
      </div>
      <!-- location, cart, sign in -->
      <div class="flex items-center gap-8">
        <button class="flex items-center gap-1">
          <img
            src="../assets/icons/header-icons/Address.png"
            alt="location icon"
          />
          <p class="text-[14px] font-normal text-green-700">New York, USA</p>
        </button>
        <NuxtLink to="/cart" class="flex items-center gap-1">
          <div class="relative">
            <img
              src="../assets/icons/header-icons/Shopping bag.png"
              alt="shopping cart icon"
            />
            <p
              class="absolute -top-[8px] -left-[10px] text-[10px] text-slate-50 font-semibold size-[17px] flex items-center justify-center rounded-full bg-green-600"
            >
              {{ totalItemsInCart }}
            </p>
          </div>
          <p class="text-[14px] font-normal text-green-700">My Bag</p>
        </NuxtLink>
        <NuxtLink to="/signin" class="flex items-center gap-1">
          <img
            src="../assets//icons/header-icons/Refer.png"
            alt="sign in icon"
          />
          <p class="text-[14px] font-normal text-green-700">Sign in</p>
        </NuxtLink>
      </div>
    </div>

    <!-- lower part of the header -->
    <div></div>
  </div>
</template>
