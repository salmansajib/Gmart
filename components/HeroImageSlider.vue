<script setup></script>

<template>
  <section class="w-full relative">
    <div
      class="min-h-[500px] w-full bg-[url('/images/hero-image/raw-dry-steak-tomahawk-black-background-steak-cowboy-barbecue-top-view-free-space-text-1.png')] bg-cover bg-center rounded-[15px] overflow-hidden"
    ></div>
    <div class="absolute top-1/2 -translate-y-1/2 left-[80px]">
      <div class="space-y-7">
        <p
          class="text-[12px] text-bgclr font-normal px-4 py-1 bg-accentclr/20 max-w-max rounded-full"
        >
          Deshi Grass Beef
        </p>

        <h2
          class="leading-[1.1] text-[56px] font-semibold flex flex-col text-bgclr"
        >
          Grass Fed <span class="text-primaryclr">Beef Marrow</span> Bones
        </h2>

        <div class="hover:scale-95 transition-all max-w-max">
          <NuxtLink
            to="#"
            class="bg-accentclr px-7 py-3 rounded-full text-[18px] font-semibold text-[#363735]"
            >Shop Now
          </NuxtLink>
        </div>
      </div>
      <div
        class="absolute -top-[25px] -right-[70px] bg-accentclr size-[100px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:top-1 before:left-1 before:w-full before:h-full before:border-2 before:border-dashed before:border-bgclr before:rounded-full"
      >
        <h2 class="text-[20px] flex flex-col items-center leading-[1]">
          15% <span class="text-[30px] font-semibold">Off</span>
        </h2>
      </div>
    </div>
  </section>
</template>
