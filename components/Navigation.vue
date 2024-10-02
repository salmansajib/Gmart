<script setup>
const navLinks = [
  { text: "Home", to: "#" },
  { text: "Story", to: "#" },
  { text: "Combo", to: "#" },
  { text: "Offer", to: "#" },
  { text: "Explore", to: "#" },
];
</script>

<template>
  <nav>
    <ul class="flex items-center gap-10">
      <li class="flex items-center" v-for="link in navLinks" :key="link.text">
        <NuxtLink
          class="text-sm text-bgclr/90 p-1 hover:text-[#fff] transition-colors"
          :to="link.to"
          >{{ link.text }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
