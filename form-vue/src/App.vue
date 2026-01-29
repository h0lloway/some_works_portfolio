<script >
import Form from "@/components/Form.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AppInput from "@/components/UI/AppInput.vue";
import Radio from "@/components/UI/Radio.vue";
import CheckboxForm from "@/components/CheckboxForm.vue";

export default {
  components: {
    Header,
    Form,
    Footer,
    AppInput,
    Radio,
    CheckboxForm,
  },
  data() {
    return {
      infoForm: [
        {
          title: "Contact details",
          subtitle: "Lorem ipsum dolor sit amet consectetur adipisc.",
          step: 1,
          id: "input",
        },
        {
          title: "Our services",
          subtitle: "Please select which service you are interested in.",
          step: 2,
          id: "checkbox",
        },
        {
          title: "What’s your project budget?",
          subtitle: "Please select the project budget range you have in mind.",
          step: 3,
          id: "radio",
        },
        {
          title: "Submit your quote request",
          subtitle:
            "Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.",
          step: 4,
          id: "submit",
        },
      ],
    };
  },
};
</script>

<template>
  <Header />
  <main class="main">
    <div class="main__container container">
      <div class="main__content content">
        <h1 class="main__title">Get a project quote</h1>
        <div class="main__text">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>

        <Form :infoForm="infoForm"> </Form>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/common.scss";

#app {
  min-height: 100%;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white-color);
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
}

.content {
  margin: auto;
  max-width: 700px;
  text-align: center;
}

.main {
  padding-top: 50px;
  padding-bottom: 100px;
  flex: 1 1 auto;

  &__title {
    margin-bottom: 12px;
    color: #170f49;
    text-align: center;
    font: 700 34px/46px "DM Sans", Arial, sans-serif;
  }

  &__text {
    margin: 0 auto;
    margin-bottom: 40px;
    width: 80%;
    color: #6f6c90;
    font: 400 18px/30px "DM Sans", Arial, sans-serif;
    @media screen and (max-width: 730px) {
      width: 90%;
    }
  }
}
</style>
