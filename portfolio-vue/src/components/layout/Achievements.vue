<script>
import ContentTitle from "@/components/ContentTitle.vue";
import Divider from "@/components/Divider.vue";
import AchievementsCard from "@/components/AchievementsCard.vue";

export default {
  components: {
    AchievementsCard,
    Divider,
    ContentTitle,
  },
};
</script>

<template >
  <div class="achievements">
    <Divider :class="['achievements__divider']" />

    <div class="achievements__content content-common">
      <ContentTitle title="Achievements" />

      <ul class="achievements__list list-reset">
        <AchievementsCard :class="['bg-color']"
        />

      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.achievements {
  display: flex;

  &__content {
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
}
</style>