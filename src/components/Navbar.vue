<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-app-bar-title>Navbar</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link
        :class="$route.name == 'Home' ? 'active' : ''"
        :style="$vuetify.breakpoint.xs ? 'font-size: 16px;' : ''"
        class="mr-2 text-decoration-none link"
        :to="{name: 'Home'}"
        >Home</router-link
      >
      <router-link
        :class="$route.name == 'About' ? 'active' : ''"
        class="text-decoration-none link"
        :style="$vuetify.breakpoint.xs ? 'font-size: 16px;' : ''"
        :to="{name: 'About'}"
        >About</router-link
      >
      <router-link
        :class="$route.name == 'CafeCreate' ? 'active' : ''"
        class="text-decoration-none link"
        :style="$vuetify.breakpoint.xs ? 'font-size: 16px;' : ''"
        :to="{name: 'CafeCreate'}"
        >Add Cafe</router-link
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$vuetify);
  },
  methods: {
      Scroll(){
          console.log('Scroll')
      }
  }
};
</script>

<style>
.link {
  padding: 10px;
  color: indianred !important;
  font-size: 24px;
}
.active {
  color: black !important;
}
</style>
