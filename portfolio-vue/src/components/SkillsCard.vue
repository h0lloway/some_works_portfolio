<script>
export default {
  data() {
    return {
      items: [
        {
          mainimg: "figma",
          name: "Figma",
          descr: "Верстка по макетам Figma",
        },
        {
          mainimg: "vscode",
          name: "VS Code",
          descr: "Редактор кода",
        },
        {
          mainimg: "git",
          name: "Git",
          descr: "Система контроля версий",
        },
        {
          mainimg: "gulp",
          name: "Gulp",
          descr: "Быстрый сборщик проектов",
        },
        {
          mainimg: "notion",
          name: "Notion",
          descr: "Project managment",
        },
        {
          mainimg: "html",
          name: "HTML5",
          descr: "Семантическая разметка кода Использование БЭМ",
        },
        {
          mainimg: "sass",
          name: "SCSS",
          descr: "Стилизация элементов на странице",
        },
        {
          mainimg: "JS",
          name: "JavaScript",
          descr: "Скрипты для динамичности страницы",
        },
      ],
    };
  },
};
</script>

<template>
  <li
    class="skills__list-item list-item"
    v-for="item in items"
    :key="item.name"
  >
    <div class="list-item__wrap wrap">
      <img
        :class="['wrap-img']"
        :src="'/assets/img/' + item.mainimg + '.svg'"
        :alt="item.mainimg"
      />
      <div :class="['tools-name']">{{ item.name }}</div>
      <div :class="['tools-descr']">{{ item.descr }}</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  display: block;

  flex: 1 0 20%;
  padding: 5px 5px;
  min-height: 220px;

  .wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 100%;
    background: #ebf2fc;

    .wrap-img {
      width: 60px;
    }

    .tools-name {
      margin-top: 15px;
      margin-bottom: 10px;
      color: #2e2e48;
      font: 500 16px/128% "Manrope", sans-serif;
    }
    .tools-descr {
      color: var(--gray-default, #79819a);
      font: 400 12px/128% "Manrope", sans-serif;
      letter-spacing: 0.101px;
    }
  }
}

.list-item:nth-child(6) {
  .wrap {
    border-radius: 10px 0 0 0;
  }
}

.list-item:nth-child(1) {
  .wrap {
    border-radius: 0 0 0 10px;
  }
}
.list-item:nth-child(5) {
  .wrap {
    border-radius: 0 0 10px 0;
  }
}
.list-item:nth-child(8) {
  .wrap {
    border-radius: 0 10px 0 0;
  }
}

@media screen and (max-width: 1300px) {
  .skills {
    .list-item {
      flex: 0 0 33.333%;
    }

    .list-item:nth-child(3) {
      .wrap {
        border-radius: 0 10px 0 0;
      }
    }

    .list-item:nth-child(6) {
      .wrap {
        border-radius: 0 0 0 0;
      }
    }

    .list-item:nth-child(1) {
      .wrap {
        border-radius: 10px 0 0 0;
      }
    }
    .list-item:nth-child(4) {
      .wrap {
        border-radius: 0 0 0 0;
      }
    }
    .list-item:nth-child(5) {
      .wrap {
        border-radius: 0 0 0 0;
      }
    }
    .list-item:nth-child(7) {
      .wrap {
        border-radius: 0 0 0 10px;
      }
    }
    .list-item:nth-child(8) {
      .wrap {
        border-radius: 0 0 10px 0;
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  .skills {
    .list-item {
      flex: 0 0 50%;
    }

    .list-item:nth-child(3) {
      .wrap {
        border-radius: 0 0 0 0;
      }
    }

    .list-item:nth-child(2) {
      .wrap {
        border-radius: 0 10px 0 0;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .skills {
    .list-item {
      &__wrap {
        padding: 20px 10px;

        img {
          width: 40px;
        }

        .tools-descr {
          width: 80%;
        }
      }
    }
  }
}
</style>