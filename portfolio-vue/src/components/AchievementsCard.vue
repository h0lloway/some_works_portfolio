<script>
export default {
  data() {
    return {
      items: [
        {
          descr: "Frontend-developer",
          subdescr: "МТС Финтех",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi facilis nostrum, culpa, dignissimos dicta aliquid ut commodi aspernatur harum voluptatum enim libero.",
          live: "Present",
          locatetext: "Online",
          locateimg: "geo",
          mainimg: "MTC",
        },
        {
          descr: "Frontend-developer",
          subdescr: "Актион",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi facilis nostrum, culpa, dignissimos dicta aliquid ut commodi aspernatur harum voluptatum enim libero.",
          live: "Dec 2022 - Jule 2023",
          locatetext: "Online",
          locateimg: "geo",
          mainimg: "action",
        },
        {
          descr: "HTML coder",
          subdescr: "Adcome labs",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi facilis nostrum, culpa, dignissimos dicta aliquid ut commodi aspernatur harum voluptatum enim libero.",
          live: "April 2022 - Dec 2022",
          locatetext: "Online",
          locateimg: "geo",
          mainimg: "adcome",
        },
      ],
    };
  },
};
</script>

<template>
  <li
    class="achievements__list-item list-item"
    v-for="item in items"
    :key="item.subdescr"
  >
    <div class="list-item__wrap wrap">
      <div class="wrap__left left">
        <div class="left__date">
          <div class="small-circle"></div>
          <span class="live"> {{ item.live }} </span>
          <span class="locate">
            <img
              :src="'/assets/img/' + item.locateimg + '.svg'"
              :width="20"
              :alt="logoimg"
            />
            {{ item.locatetext }}
          </span>
        </div>
        <div class="left__place">
          <img
            :src="'/assets/img/' + item.mainimg + '.svg'"
            :width="43"
            :alt="item.mainimg"
          />

          <div class="left__name">
            <span class="descr"> {{ item.descr }} </span>
            <span class="subdescr"> {{ item.subdescr }} </span>
          </div>
        </div>
      </div>
      <div class="wrap__text">{{ item.text }}</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  position: relative;
  padding: 20px 35px;
  width: 100%;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      flex-direction: column;

      &__date {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 8px;
        color: #47516b;
        font: 400 12px/128% "Manrope", sans-serif;
        letter-spacing: 0.101px;

        .locate {
          display: inline-flex;
          align-items: center;
          padding-left: 7px;
        }
      }

      &__place {
        display: flex;
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

    &__text {
      width: 60%;
      color: #47516b;
      font: 400 14px/128% "Manrope", sans-serif;
      letter-spacing: 0.117px;
    }
  }
}

.bg-color {
  .wrap {
    .left {
      .live {
        color: #9251f7;
        background: #efe2f9;
        padding: 3px;
        border-radius: 4px;
      }
    }
  }
}

.list-item::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 85%;
  background: #ededed;
  top: 39px;
  left: -1px;
}
.list-item:not(:last-child) {
  margin-bottom: 10px;
}

.list-item:last-child::before {
  height: 60%;
}

@media screen and (max-width: 1300px) {
  .achievements {
    .list-item {
      .wrap {
        display: block;

        &__text {
          margin-top: 15px;
          width: 100%;
        }
      }
    }
  }
}
</style>