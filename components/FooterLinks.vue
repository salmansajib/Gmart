<script setup>
import { useMediaQuery } from "@vueuse/core";

const footerLinks = [
  {
    id: 1,
    category: "About Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "FAQ", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Refund Policy", url: "#" },
      { name: "Contact Us", url: "#" },
    ],
  },
  {
    id: 2,
    category: "Breakfast & Dairy",
    links: [
      { name: "Milk & Flavoured Milk", url: "#" },
      { name: "Butter & Margarine", url: "#" },
      { name: "Cheese", url: "#" },
      { name: "Egg Substitutes", url: "#" },
      { name: "Honey", url: "#" },
      { name: "Marmalades", url: "#" },
      { name: "Cake", url: "#" },
    ],
  },
  {
    id: 3,
    category: "Meat & Seafood",
    links: [
      { name: "Breakfast Sausage", url: "#" },
      { name: "Diner Sausage", url: "#" },
      { name: "Beef", url: "#" },
      { name: "Chicken", url: "#" },
      { name: "Shrimp", url: "#" },
      { name: "Sliced Deli Meat", url: "#" },
      { name: "Crab & Shellfish", url: "#" },
      { name: "Farm Raised Fillets", url: "#" },
    ],
  },
  {
    id: 4,
    category: "Beverages",
    links: [
      { name: "Water", url: "#" },
      { name: "Sparkling Water", url: "#" },
      { name: "Soda & Pop", url: "#" },
      { name: "Coffee", url: "#" },
      { name: "Milk & Plant", url: "#" },
      { name: "Tea & Kombucha", url: "#" },
      { name: "Black Coffee", url: "#" },
    ],
  },
  {
    id: 5,
    category: "Breads & Bakery",
    links: [
      { name: "Milk & Flavoured Milk", url: "#" },
      { name: "Butter & Margarine", url: "#" },
      { name: "Cheese", url: "#" },
      { name: "Egg Substitutes", url: "#" },
      { name: "Honey", url: "#" },
      { name: "Marmalades", url: "#" },
      { name: "Yogurt", url: "#" },
    ],
  },
];

const expandedSection = ref(null);
const showAllSections = ref(false);
const isLargeScreen = useMediaQuery("(min-width: 768px)");

// Initialize the showAllSections based on screen size
onMounted(() => {
  showAllSections.value = isLargeScreen.value;

  // Watch for changes in screen size
  watch(isLargeScreen, (newValue) => {
    showAllSections.value = newValue;
  });
});

const toggleDropdown = (id) => {
  if (!isLargeScreen.value) {
    expandedSection.value = expandedSection.value === id ? null : id;
  }
};
</script>

<template>
  <div
    class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <div v-for="section in footerLinks" :key="section.id">
      <!-- Header Section -->
      <h3
        class="text-[16px] md:text-[18px] font-semibold text-textclr flex gap-1 items-center justify-start cursor-pointer md:cursor-auto"
        @click="toggleDropdown(section.id)"
      >
        {{ section.category }}
        <!-- Icon to indicate dropdown -->
        <span class="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
            />
          </svg>
        </span>
      </h3>

      <!-- List of links -->
      <transition name="dropdown">
        <ul
          class="mt-4 space-y-2"
          v-show="expandedSection === section.id || showAllSections"
        >
          <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <NuxtLink
              class="text-textclr/70 text-[14px] md:text-[16px] hover:text-textclr"
              :to="link.url"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Transition classes for the dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 400ms ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 500px; /* Adjust according to content height */
  opacity: 1;
  overflow: hidden;
}
</style>
