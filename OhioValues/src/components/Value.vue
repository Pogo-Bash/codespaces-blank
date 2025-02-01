<script setup>
import { ref } from 'vue';

const categories = [
  { name: "Void Skins ⚫", expanded: ref(false) },
  { name: "Gold Skins 💰", expanded: ref(false) },
  { name: "Cyberpunk Skins 🚄", expanded: ref(false) },
  { name: "Obsidian Skins ⬛", expanded: ref(false) },
  { name: "Atomic Skins ⚛️", expanded: ref(false) },
  { name: "Future Skins 🩻", expanded: ref(false) },
  { name: "Tactical Skins 🥷", expanded: ref(false) },
  { name: "Elite Skins 🛡️", expanded: ref(false) },
  { name: "Halloween Skins 🎃", expanded: ref(false) },
  { name: "4th Of July Skins 🇺🇸", expanded: ref(false) },
  { name: "Crimson Blood Skins 🩸", expanded: ref(false) },
  { name: "Void Reaper Skins ☠️", expanded: ref(false) },
  { name: "Steampunk Skins ⚙️", expanded: ref(false) },
  { name: "Mystic Skins 🪽", expanded: ref(false) },
  { name: "Reaper Skins 🔪", expanded: ref(false) },
  { name: "Sakura Skins 🌸", expanded: ref(false) },
  { name: "Wasteland Skins 🏜️", expanded: ref(false) },
  { name: "Biohazard Skins 🦠", expanded: ref(false) },
  { name: "Dark Matter Skins 🟣", expanded: ref(false) },
  { name: "Anti Matter Skins 🔵", expanded: ref(false) },
  { name: "Sub Zero Skins 🥶", expanded: ref(false) },
  { name: "Dollar Skins 💸", expanded: ref(false) },
  { name: "Heart Skins ❤️", expanded: ref(false) },
  { name: "Christmas Toy Skins 🪀", expanded: ref(false) },
  { name: "Diamond Skins 💎", expanded: ref(false) },
  { name: "Gems 💠", expanded: ref(false) },
  { name: "Valuables 👑", expanded: ref(false) },
  { name: "Ores 💣", expanded: ref(false) },
  { name: "Super Rare Items 🎆", expanded: ref(false) },
  { name: "Pirate 🏴‍☠️", expanded: ref(false) },
  { name: "Hotdog 🌭", expanded: ref(false) },
  { name: "Ghost 👻", expanded: ref(false) },
  { name: "Underworld ❤️‍🔥", expanded: ref(false) },
  { name: "Easter Eggs 🥚", expanded: ref(false) },
];

const toggleExpand = (category) => {
  category.expanded.value = !category.expanded.value;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-6">
    <h1 class="text-4xl font-bold text-center text-purple-300 mb-8">Value Key 🔑</h1>

    <div class="max-w-2xl mx-auto space-y-4">
      <div v-for="category in categories" :key="category.name" class="bg-black/50 backdrop-blur-md border border-purple-700 p-4 rounded-xl shadow-md">
        <button @click="toggleExpand(category)" class="w-full text-left flex justify-between items-center text-lg text-purple-300 hover:text-white transition">
          <span>{{ category.name }}</span>
          <span :class="{ 'rotate-180': category.expanded.value }" class="transition-transform">▼</span>
        </button>
        <div v-if="category.expanded.value" class="mt-2 text-gray-300">
          <p>More details about {{ category.name }} go here...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transition for dropdown */
button span:last-child {
  transition: transform 0.3s ease-in-out;
}
</style>
