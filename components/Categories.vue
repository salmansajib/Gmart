<script setup>
const categoryLinks = [
  {
    id: 1,
    icon: "/icons/sidebar-icons/Groceries.png",
    name: "Grocery",
    to: "#",
  },
  {
    id: 2,
    icon: "/icons/sidebar-icons/Lamb.png",
    name: "Lamb",
    to: "#",
  },
  {
    id: 3,
    icon: "/icons/sidebar-icons/Meat.png",
    name: "Deshi Beef",
    to: "#",
  },
  {
    id: 4,
    icon: "/icons/sidebar-icons/Open-box.png",
    name: "Bundles Offer",
    to: "#",
  },
  {
    id: 5,
    icon: "/icons/sidebar-icons/Pawprint.png",
    name: "Pet Food & Accessories",
    to: "#",
  },
  {
    id: 6,
    icon: "/icons/sidebar-icons/Spinach.png",
    name: "Vegetable & Fruits",
    to: "#",
  },
  {
    id: 7,
    icon: "/icons/sidebar-icons/chicken.png",
    name: "Poultry Chicken",
    to: "#",
  },
  {
    id: 8,
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
      :key="category.id"
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
