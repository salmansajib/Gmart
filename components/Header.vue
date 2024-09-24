<script setup>
const totalItemsInCart = ref(8);
</script>

<template>
  <div>
    <!-- Upper part of the header -->
    <div class="flex items-center justify-between">
      <!-- logo -->
      <img src="../assets/images/logo/Layer_1.png" alt="logo" />
      <!-- search field -->
      <div class="relative max-w-[450px] w-full h-[45px]">
        <input
          class="bg-[#F7FCEE] w-full h-full px-3 placeholder:text-primaryclr border border-[#DCE8CA] rounded-[4px] text-slate-900"
          type="text"
          placeholder="search item"
        />
        <img
          class="absolute top-1/2 -translate-y-1/2 right-[12px] text-green-700 cursor-pointer"
          src="../assets/icons/header-icons/Magnifying glass.png"
          alt="magnifying glass icon"
        />
      </div>
      <!-- location, cart, sign in -->
      <div class="flex items-center gap-8">
        <button class="flex items-center gap-1">
          <img
            src="../assets/icons/header-icons/Address.png"
            alt="location icon"
          />
          <p class="text-[14px] font-normal text-textclr">New York, USA</p>
        </button>
        <NuxtLink to="/cart" class="flex items-center gap-1">
          <div class="relative">
            <img
              src="../assets/icons/header-icons/Shopping bag.png"
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
        <NuxtLink to="/signin" class="flex items-center gap-1">
          <img
            src="../assets//icons/header-icons/Refer.png"
            alt="sign in icon"
          />
          <p class="text-[14px] font-normal text-textclr">Sign in</p>
        </NuxtLink>
      </div>
    </div>

    <!-- lower part of the header -->
    <div></div>
  </div>
</template>
