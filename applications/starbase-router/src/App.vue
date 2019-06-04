<template>
  <div id="app">
    <h3>Starbase Router</h3>
    <h3>
      <router-link class="link" to="/data/people">Meet the Character</router-link> |
      <router-link class="link" to="/data/planets">Explore the Planets</router-link>
    </h3>
    <router-view></router-view>
  </div>
</template>
