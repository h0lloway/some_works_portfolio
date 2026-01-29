<script>
import ContentTitle from "@/components/ContentTitle.vue";
import Divider from "@/components/Divider.vue";
import CertificatesCard from "@/components/CertificatesCard.vue";

export default {
  components: {
    CertificatesCard,
    Divider,
    ContentTitle,
  },
};
</script>

<template >
  <div class="certificates">
    <Divider :class="['certificates__divider']" />

    <div class="certificates__content content-common">
      <ContentTitle title="Certificates & Awards" />

      <ul class="certificates__list list-reset">
        <CertificatesCard />
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.certificates {
  display: flex;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
}
</style>