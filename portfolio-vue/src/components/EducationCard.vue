<script >
export default {
  data() {
    return {
      items: [
        {
          name: "Образовательная платформа Skillbox",
          images: "skillbox-logo",
          descr: "Профессия Frontend-разработчик",
          date: "2021-2022",
        },
        {
          name: "Донской Государственный Технический Университет",
          images: "dstu",
          descr: "Кафедра «Технология Машиностроения",
          date: "2013-2015",
        },
      ],
    };
  },
};
</script>

<template>
  <li
    class="education__list-item list-item"
    v-for="item in items"
    :key="item.name"
  >
    <div class="list-item__wrap wrap">
      <div class="wrap__name">
        <img
          :class="['wrap__img']"
          :src="'/assets/img/' + item.images + '.svg'"
          :width="50"
          :alt="item.images"
        />
        <span>{{ item.name }}</span>
      </div>
      <div :class="['wrap__descr']">{{ item.descr }}</div>
      <div :class="['wrap__date']">{{ item.date }}</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  flex: 0 0 50%;
  padding: 5px 5px;

  .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: #ebf2fc;

    &__name {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      span {
        width: 75%;
        padding-left: 15px;
      }
    }

    &__descr {
      margin-bottom: 10px;
    }

    &__date {
      margin-bottom: 10px;
      color: #79819a;
      font: 400 12px/128% "Manrope", sans-serif;
      letter-spacing: 0.101px;
    }

    &__percent {
      font: 400 14px/128% "Manrope", sans-serif;
      letter-spacing: 0.121px;

      span {
        color: #5d5fef;
      }
    }
  }
}
.list-item:first-child .wrap {
  border-radius: 10px 0 0 10px;
}
.list-item:last-child .wrap {
  border-radius: 0 10px 10px 0;
}

@media screen and (max-width: 1300px) {
  .list-item {
    .wrap {
      &__name {
        span {
          width: 100%;
        }
      }
    }
  }
  .list-item:first-child .wrap {
    border-radius: 10px 10px 0 0;
  }

  .list-item:last-child .wrap {
    border-radius: 0 0 10px 10px;
  }
}
</style>