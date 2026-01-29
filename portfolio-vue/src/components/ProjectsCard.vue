<script>
export default {
  data() {
    return {
      items: [
        {
          descr: "Portfolio Webpage",
          subdescr: "Personal Portfolio webpage with resume",
          logoimg: "webpage",
          linktext: "LINK to project",
          link: "https://dubrovin-portfolio.netlify.app/",
          linkimg: "link",
        },
        {
          descr: "SitDownPls Webpage",
          subdescr: "Сайт магазина мебели (учебный проект)",
          logoimg: "webpage",
          linktext: "LINK to project",
          link: "https://h0lloway.github.io/SitDownPls__makdu/",
          linkimg: "link",
        },
      ],
    };
  },
};
</script>

<template>
  <li
    class="projects__list-item list-item"
    v-for="item in items"
    :key="item.name"
  >
    <div class="list-item__wrap wrap">
      <div class="wrap__top top">
        <img
          :class="['top__img']"
          :src="'/assets/img/' + item.logoimg + '.svg'"
          :width="48"
          :alt="item.logoimg"
        />
        <div class="top__name">
          <span class="descr"> {{ item.descr }} </span>
          <span class="subdescr"> {{ item.subdescr }} </span>
        </div>
      </div>
      <div class="wrap__link">
        <img
          :src="'/assets/img/' + item.linkimg + '.svg'"
          :width="24"
          :alt="item.linkimg"
        />
        <a :href="link" :class="['link']" :target="['_blank']">
          {{ item.linktext }}
        </a>
      </div>
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
    background: #ebf2fc;
    padding: 20px;

    &__link {
      margin-top: 15px;
      display: flex;
      align-items: center;

      a {
        padding-left: 5px;
      }
    }
    .top {
      display: flex;
      align-items: center;

      &__name {
        padding-left: 15px;
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

@media screen and (max-width: 1600px) {
  .list-item:first-child .wrap {
    border-radius: 10px 10px 0 0;
  }

  .list-item:last-child .wrap {
    border-radius: 0 0 10px 10px;
  }
}

@media screen and (max-width: 500px) {
  .wrap {
    .top {
      min-height: 48px;
      &__name {
        padding-left: 9px;
      }
    }
  }
}
</style>