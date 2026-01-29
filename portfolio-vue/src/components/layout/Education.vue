<script >
import ContentTitle from "@/components/ContentTitle.vue";
import Divider from "@/components/Divider.vue";
import EducationCard from "@/components/EducationCard.vue";

export default {
  components: {
    EducationCard,
    Divider,
    ContentTitle,
  },
};
</script>

<template >
  <div class="education">
    <Divider :class="['education__divider']" />

    <div class="education__content content-common">
      <ContentTitle :class="['education__title']" title="Education" />

      <ul class="education__list list-reset">
        <EducationCard />
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.education {
  display: flex;

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1300px) {
  .education {
    &__list {
      flex-direction: column;
    }
  }
}
</style>