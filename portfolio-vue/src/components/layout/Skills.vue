<script>
import ContentTitle from "@/components/ContentTitle.vue";
import Divider from "@/components/Divider.vue";
import SkillsCard from "@/components/SkillsCard.vue";

export default {
  components: {
    SkillsCard,
    Divider,
    ContentTitle,
  },
};
</script>

<template >
  <div class="skills">
    <Divider :class="['skills__divider']" />

    <div class="skills__content content-common">
      <ContentTitle title="Tools/Skills" />

      <ul class="skills__list list-reset grid-list">
        <SkillsCard />
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.skills {
  display: flex;

  &__list {
    display: flex;
    flex-wrap: wrap-reverse;
    margin-left: -10px;
    margin-right: -10px;

    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1300px) {
  .skills {
    &__list {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width: 1100px) {
  .skills {
  }
}
</style>