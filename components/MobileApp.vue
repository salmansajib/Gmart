<script setup></script>

<template>
  <div
    class="bg-[#dfe4d5] bg-[url('/public/images/footer-card-background/illustration.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center text-textclr rounded-lg overflow-hidden py-10 px-5"
  >
    <!-- Left Side: Mobile Mockup -->
    <div class="-mb-[300px] hidden md:block">
      <img src="/public/images/footer-card-background/Phone.png" alt="" />
    </div>

    <!-- Right Side: Download Text and Buttons -->
    <div class="space-y-5">
      <h2 class="text-3xl md:text-5xl font-semibold">Download the App</h2>
      <p class="text-sm max-w-[75ch]">
        Aliqua donec officiis porta laboris faucibus sapien parturient
        voluptatibus nulla cupidiatat suscipit exercitationem template
        temporibus.
      </p>
      <div class="flex items-center gap-5">
        <a href="#" target="_blank" class="hover:scale-95 transition-all">
          <img
            src="/public/images/footer-card-background/google-play.png"
            alt="Google play"
          />
        </a>
        <a href="#" target="_blank" class="hover:scale-95 transition-all">
          <img
            src="/public/images/footer-card-background/app-store.png"
            alt="App store"
          />
        </a>
      </div>
    </div>
  </div>
</template>
