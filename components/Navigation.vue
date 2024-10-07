<script setup>
const navLinks = [
  { id: 1, text: "Home", to: "#" },
  { id: 2, text: "Story", to: "#" },
  { id: 3, text: "Combo", to: "#" },
  { id: 4, text: "Offer", to: "#" },
  { id: 5, text: "Explore", to: "#" },
];
</script>

<template>
  <nav>
    <ul class="flex items-center gap-10">
      <li class="flex items-center" v-for="link in navLinks" :key="link.id">
        <NuxtLink
          class="text-sm text-bgclr/90 p-1 hover:text-[#fff] transition-colors"
          :to="link.to"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
