<script >
import SidebarTitle from "@/components/SidebarTitle.vue";

export default {
  props: {
    openSidebar: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      contacts: [
        {
          name: "Email",
          descr: "gvozdb27@gmail.com",
          img: "email",
          href: "mailto:gvozdb27@gmail.com",
        },
        {
          name: "Website",
          descr: "h0lloway.github.io/my-portfolio/",
          img: "website",
          href: "https://h0lloway.github.io/my-portfolio/",
        },
        {
          name: "Phone",
          descr: "+7 (989) 280 49-19",
          img: "phone",
          href: "tel:+79892804919",
        },
        {
          name: "Address",
          descr: "Aksai, Rostov-on-Don Region",
          img: "address",
        },
      ],
      socials: [
        {
          name: "Instagram",
          descr: "@mksm.17",
          img: "inst",
          href: "https://www.instagram.com/mksm.17",
        },
        {
          name: "Github",
          descr: "@h0lloway",
          img: "github",
          href: "https://github.com/h0lloway",
        },
        {
          name: "VK",
          descr: "@h0lloway",
          img: "vk",
          href: "https://vk.com/h0lloway",
        },
      ],
      langs: [
        {
          name: "Russian",
          descr: "Native",
          img: "rus",
        },
        {
          name: "English",
          descr: "Intermediate",
          img: "eng",
        },
      ],
      hobbies: [
        {
          descr: "Family/house",
          img: "family",
        },
        {
          descr: "Gaming",
          img: "computer",
        },
        {
          descr: "TV series",
          img: "tv",
        },
        {
          descr: "Fitness",
          img: "fitness",
        },
      ],
    };
  },
  components: {
    SidebarTitle,
  },
};
</script>


<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <div class="sidebar__img">
      <img src="/assets/img/me-squ.png" alt="my photo" />
    </div>

    <div class="sidebar__name">Dubrovin Maksim</div>

    <div class="sidebar__descr">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi facilis
      nostrum, culpa, dignissimos dicta aliquid ut commodi aspernatur harum
      voluptatum enim libero.
    </div>

    <!-- контакты -->

    <ul class="sidebar__contact-list contact-list list-reset">
      <li
        class="contact-list__item common-link"
        v-for="contact in contacts"
        :key="contact.name"
      >
        <div class="common-link__wrap">
          <div class="img">
            <img
              :src="'/assets/img/' + contact.img + '.svg'"
              :alt="contact.img"
            />
          </div>
          <div class="common-link__content">
            <span class="name"> {{ contact.name }} </span>
            <span class="descr">
              <a :href="contact.href" :target="['_blank']">
                {{ contact.descr }}
              </a>
            </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- соц.сети -->

    <SidebarTitle title="Socials" />
    <ul class="sidebar__social-list social-list list-reset">
      <li
        class="social-list__item common-link"
        v-for="social in socials"
        :key="social.name"
      >
        <div class="common-link__wrap">
          <div class="img">
            <img
              :src="'/assets/img/' + social.img + '.svg'"
              :alt="social.img"
            />
          </div>
          <div class="common-link__content">
            <span class="name">{{ social.name }}</span>
            <span class="descr">
              <a :href="social.href" :target="['_blank']">
                {{ social.descr }}
              </a>
            </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- языки -->

    <SidebarTitle title="Languages" />
    <ul class="sidebar__lang-list lang-list list-reset">
      <li
        class="lang-list__item common-link"
        v-for="lang in langs"
        :key="lang.name"
      >
        <div class="common-link__wrap">
          <div class="img">
            <img
              :src="'/assets/img/' + lang.img + '.svg'"
              :width="34"
              :alt="lang.img"
            />
          </div>
          <div class="common-link__content">
            <span class="name"> {{ lang.name }} </span>
            <span class="descr"> {{ lang.descr }} </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- хобби и увлечения -->

    <SidebarTitle title="Hobby & Interests" />
    <ul class="sidebar__hobby-list hobby-list list-reset">
      <li
        class="hobby-list__item common-link"
        v-for="hobby in hobbies"
        :key="hobby.descr"
      >
        <div class="common-link__wrap">
          <div class="img">
            <img :src="'/assets/img/' + hobby.img + '.svg'" :alt="hobby.img" />
          </div>
          <div class="common-link__content">
            <span class="descr"> {{ hobby.descr }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>