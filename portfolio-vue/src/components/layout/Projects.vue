<script>
import ContentTitle from "@/components/ContentTitle.vue";
import Divider from "@/components/Divider.vue";
import ProjectsCard from "@/components/ProjectsCard.vue";

export default {
  components: {
    ProjectsCard,
    Divider,
    ContentTitle,
  },
};
</script>

<template >
  <div class="projects">
    <Divider :class="['projecrts__divider']" />

    <div class="projects__content content-common">
      <ContentTitle title="Latest projects" />

      <ul class="projects__list list-reset">
        <ProjectsCard />
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.projects {
  display: flex;

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1600px) {
  .projects {
    &__list {
      flex-direction: column;
    }

    &__list-item {
      width: 100%;
    }
  }
}
</style>