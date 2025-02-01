<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="fixed top-0 left-0 w-full backdrop-blur-md bg-black/50 border-b border-purple-800 shadow-lg flex justify-between items-center px-6 py-4 z-50">
    <a class="text-2xl font-bold text-purple-300">Ohio Values</a>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex space-x-6">
      <a href="#" class="text-purple-300 hover:text-white transition">Home</a>
      <a href="#" class="./values.html">Values</a>
      <a href="#" class="text-purple-300 hover:text-white transition">Forum</a>
      <a href="#" class="text-purple-300 hover:text-white transition">About</a>
    </div>

    <!-- Mobile Hamburger Icon -->
    <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white hover:text-purple-400 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMenuOpen" class="absolute top-16 right-6 bg-black/50 backdrop-blur-lg border border-purple-700 shadow-xl rounded-xl p-4 space-y-3 w-48 lg:hidden">
      <a href="#" class="block px-4 py-2 text-purple-300 hover:bg-purple-700 hover:text-white rounded transition">Home</a>
      <a href="./values.html" class="block px-4 py-2 text-purple-300 hover:bg-purple-700 hover:text-white rounded transition">Values</a>
      <a href="#" class="block px-4 py-2 text-purple-300 hover:bg-purple-700 hover:text-white rounded transition">Forum</a>
      <a href="#" class="block px-4 py-2 text-purple-300 hover:bg-purple-700 hover:text-white rounded transition">About</a>
    </div>
  </nav>

   <div class="hero min-h-screen bg-fixed bg-center bg-cover" style="background-image: url('https://tr.rbxcdn.com/180DAY-91a7136a95d9a7c887b5025b64581bcd/768/432/Image/Webp/noFilter');">
    <div class="hero-overlay bg-gradient-to-b from-black/70 via-purple-900/50 to-black/90"></div>
    <div class="hero-content text-center text-white">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold text-purple-300 drop-shadow-lg">Ohio Values</h1>
        <p class="py-6 text-lg text-purple-200 drop-shadow">
          Welcome to Ohio Values!!!
        </p>
        <a href="./values.html" class="btn bg-black/50 text-purple-300 border border-purple-600 hover:bg-purple-700 hover:text-white transition-all shadow-md">Browse Values</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Apply a translucent dark theme globally */
:deep(body) {
  background-color: #0d021a;
  color: white;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
