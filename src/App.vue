<template>
  <v-app>
    <v-main>
      <saper />
    </v-main>
  </v-app>
</template>

<script>
import saper from "./components/saper";

export default {
  name: "App",

  components: {
    saper,
  },

  data: () => ({
    //
  }),
};
</script>
