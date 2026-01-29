<script >
export default {
  data() {
    return {
      items: [
        {
          mainimg: "skillbox-logo",
          descr: "Skillbox",
          subdescr: "Frontend-developer",
          date: "Dec\u00A02021 - Aug\u00A02022",
        },
      ],
    };
  },
};
</script>

<template>
  <li
    class="certificates__list-item list-item"
    v-for="item in items"
    :key="item.name"
  >
    <div class="list-item__wrap wrap">
      <div class="wrap__left left">
        <img
          :class="['left__img']"
          :src="'/assets/img/' + item.mainimg + '.svg'"
          :width="47"
          :alt="item.mainimg"
        />

        <div class="left__name">
          <span :class="['descr']"> {{ item.descr }} </span>
          <span :class="['subdescr']"> {{ item.date }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 20px 35px;
  width: 100%;
  background: #ebf2fc;
  border-radius: 10px;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      &__img {
        padding: 0 5px;
        border: 0.4px solid #a19999;
        height: 47px;
        border-radius: 12px;
      }

      &__name {
        padding-left: 15px;
      }

      .descr {
        color: #79819a;
        font: 400 14px/128% "Manrope", sans-serif;
        letter-spacing: 0.136px;
      }
      .subdescr {
        color: #2e2e48;
        font: 500 16px/128% "Manrope", sans-serif;
      }
    }

    &__date {
      padding-left: 15px;
      color: #47516b;
      font: 400 14px/128% "Manrope", sans-serif;
      letter-spacing: 0.117px;
    }
  }
}
.list-item:not(:last-child) {
  margin-bottom: 10px;
}

@media screen and (max-width: 1300px) {
  .certificates {
    .list-item {
      padding: 20px 20px;
    }
  }
}
</style>