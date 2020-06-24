<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs class="bg-primary text-white shadow-2">
        <q-route-tab
          v-for="nav in essentialLinks"
          :key="nav.title"
          :icon="nav.icon"
          :label="nav.title"
          :to="nav.link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-grey-4 text-weight-bold">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Todo",
          icon: "list",
          link: "/"
        },
        {
          title: "Settings",
          icon: "settings",
          link: "/settings"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
