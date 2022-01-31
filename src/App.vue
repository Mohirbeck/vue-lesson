<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  data() {
    return {
      
    };
  },
  
  components: {
    Nav: Navbar,
  },
};
</script>
