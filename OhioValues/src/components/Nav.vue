<script setup>
import { ref } from 'vue';
</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">Ohio Values</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><button class="btn btn-outline btn-success m-2">Success</button></li>
        <li><button class="btn btn-outline btn-warning m-2">Warning</button></li>
        <li><button class="btn btn-outline btn-error m-2">Error</button></li>
        <li><button class="btn btn-outline btn-info m-2">Info</button></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button class="btn">Sign Up</button>
    </div>
  </nav>
</template>

<style scoped>
</style>
