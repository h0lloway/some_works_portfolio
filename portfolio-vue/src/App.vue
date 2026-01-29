<script setup>
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import LayoutEducation from "@/components/layout/Education.vue";
import LayoutAchievements from "@/components/layout/Achievements.vue";
import LayoutSkills from "@/components/layout/Skills.vue";
import LayoutProjects from "@/components/layout/Projects.vue";
import LayoutCertificates from "@/components/layout/Certificates.vue";
import { ref } from "vue";

const isOpenMenu = ref(true);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#8658;</div>
    <!-- <layout-header/> -->
    <layout-sidebar :openSidebar="isOpenMenu" />

    <div :class="['content', { content_full: !isOpenMenu }]">
      <layout-education />
      <layout-achievements />
      <layout-skills />
      <layout-projects />
      <layout-certificates />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/common.scss";
@import "./styles/sidebar.scss";

#app {
  padding: 0;
  font-family: "Manrope", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: left;
  max-width: 1400px;
  padding: 0 20px;
}

.content {
  position: relative;
  margin-left: 360px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}
@media screen and (max-width: 1560px) {
  .content {
    margin-left: 440px;
  }
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}

@media screen and (max-width: 800px) {
  #app {
    padding-left: 35px;
  }

  .content {
    padding: 30px 0;
  }
}

@media screen and (max-width: 500px) {
  #app {
    padding: 0 15px;
    padding-left: 30px;
  }

  .content {
    padding: 30px 0;
  }
}
</style>
