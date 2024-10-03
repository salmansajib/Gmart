<script setup>
const categoryLinks = [
  {
    icon: "/icons/sidebar-icons/Groceries.png",
    name: "Grocery",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/Lamb.png",
    name: "Lamb",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/Meat.png",
    name: "Deshi Beef",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/Open-box.png",
    name: "Bundles Offer",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/Pawprint.png",
    name: "Pet Food & Accessories",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/Spinach.png",
    name: "Vegetable & Fruits",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/chicken.png",
    name: "Poultry Chicken",
    to: "#",
  },
  {
    icon: "/icons/sidebar-icons/seafood.png",
    name: "Seafood & Thai House",
    to: "#",
  },
];
</script>

<template>
  <section class="space-y-5">
    <NuxtLink
      to="#"
      v-for="category in categoryLinks"
      :key="category.name"
      class="flex items-center gap-3"
    >
      <div>
        <img :src="category.icon" alt="category icon" />
      </div>
      <div>
        <h2 class="text-sm text-textclr font-normal">{{ category.name }}</h2>
      </div>
    </NuxtLink>
  </section>
</template>
