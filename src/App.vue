<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <SideNav />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from "./components/SideNav"

export default {
  name: 'App',
  components: {
    SideNav
  },
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
