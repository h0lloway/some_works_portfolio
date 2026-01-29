<script>
import AppButton from "@/components/UI/AppButton.vue";
import AppInput from "@/components/UI/AppInput.vue";
import Radio from "@/components/UI/Radio.vue";
import CheckboxForm from "@/components/CheckboxForm.vue";

export default {
  components: {
    AppButton,
    AppInput,
    Radio,
    CheckboxForm,
  },
  props: {
    infoForm: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      company: "",
      inputForm: false,

      stepsProgress: {
        steps: { 1: true, 2: false, 3: false, 4: false },
        step: ["1", "2", "3", "4"],
        currentStep: 1,
      },

      services: [
        {
          label: "Development",
          id: "development",
          checked: false,
        },
        {
          label: "Marketing",
          id: "marketing",
          checked: false,
        },
        {
          label: "Web Design",
          id: "design",
          checked: false,
        },
        { label: "Other", id: "other", checked: false },
      ],
      servicesChecked: [],

      prices: [
        { quantity: "$5.000 - $10.000", id: "pr1" },
        { quantity: "$10.000 - $20.000", id: "pr2" },
        { quantity: "$20.000 - $50.000", id: "pr3" },
        { quantity: "$50.000 +", id: "pr4" },
      ],
      selectedPriceVal: "",

      // localstorage
      submitObjData: {},

      // для кнопки "Submit"
      isDisabled: false,
    };
  },
  methods: {
    // step list
    activeBubble(index) {
      return {
        active: index <= this.stepsProgress.currentStep,
      };
    },
    lineFillFull(index) {
      return {
        "full-line": index + 1 <= this.stepsProgress.currentStep,
      };
    },
    lineFillHalf(index) {
      return {
        "half-line":
          this.stepsProgress.steps[this.stepsProgress.currentStep] &&
          index + 1 == this.stepsProgress.currentStep,
      };
    },

    // btns
    nextStep() {
      if (this.stepsProgress.currentStep <= 3) this.stepsProgress.currentStep++;
      this.stepsProgress.steps[this.stepsProgress.currentStep] = true;
    },
    previousStep() {
      if (this.stepsProgress.currentStep) this.stepsProgress.currentStep--;
    },

    // checkbox
    setCheckboxValue: function (value, arr) {
      const index = arr.indexOf(value);
      if (index !== -1) {
        arr.splice(index, 1);
      } else {
        arr.push(value);
      }
      return arr;
    },

    // radio
    selectedPrice: function (value, oldValue) {
      if (typeof value === "String") {
        oldValue = value;
      }
    },

    // localStorage
    submitData: function () {
      this.submitObjData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        company: this.company,
        radio: this.selectedPriceVal,
        check: this.servicesChecked,
      };

      localStorage.setItem("submitObjData", JSON.stringify(this.submitObjData));
    },

    disableButton: function () {
      this.isDisabled = true;
    },
  },
};
</script>

<template >
  <div class="form">
    <div class="form__content content-common">
      <!-- steps -->
      <ul class="form__step-list step-list list-reset">
        <li
          class="step-list__item item"
          v-for="(step, index) in stepsProgress.step"
          :key="step.index"
        >
          <div :class="['item__bubble', activeBubble(index + 1)]">
            {{ step }}
          </div>
          <div :class="['item__line']">
            <div :class="['item__line_fill', lineFillHalf(index)]"></div>
            <div :class="['item__line_fill', lineFillFull(index + 1)]"></div>
          </div>
        </li>
      </ul>

      <div :class="['form__question question']">
        <!-- input -->
        <div
          class="question__contact contact"
          v-if="1 === stepsProgress.currentStep"
        >
          <h2 class="contact__title heading-2 common-title">
            {{ infoForm[0].title }}
          </h2>
          <span class="contact__txt common-txt">{{
            infoForm[0].subtitle
          }}</span>
          <ul class="contact__items list-reset">
            <AppInput
              v-model:enterTxt.trim="name"
              name="Name"
              placeholder="John Carter"
              inputForm
              inputContact
            >
              <img
                class="input-img"
                width="20"
                height="25"
                src="/assets/img/person.svg"
                alt="user"
              />
            </AppInput>
            <AppInput
              v-model:enterTxt.trim="email"
              name="Email"
              placeholder="Email address"
              inputForm
              inputContact
            >
              <img
                class="input-img"
                width="20"
                height="25"
                src="/assets/img/email.svg"
                alt="email"
              />
            </AppInput>
            <AppInput
              v-model:enterTxt.trim="phone"
              name="Phone Number"
              placeholder="(123) 456 - 7890"
              inputForm
              inputContact
            >
              <img
                class="input-img"
                width="20"
                height="25"
                src="/assets/img/phone.svg"
                alt="phone"
              />
            </AppInput>
            <AppInput
              v-model:enterTxt.trim="company"
              name="Company"
              placeholder="Company name"
              inputForm
              inputContact
            >
              <img
                class="input-img"
                width="20"
                height="25"
                src="/assets/img/company.svg"
                alt="company"
              />
            </AppInput>
          </ul>
        </div>

        <!-- checkbox  -->
        <div
          class="question__check check"
          v-if="2 === stepsProgress.currentStep"
        >
          <h2 class="check__title common-title">
            {{ infoForm[1].title }}
          </h2>
          <span class="check__txt common-txt">{{ infoForm[1].subtitle }}</span>

          <div class="check__list list-reset">
            <CheckboxForm
              name="serv"
              v-model:value="servicesChecked"
              :services="services"
              @checkbox="setCheckboxValue"
            />
          </div>
        </div>

        <!-- radio  -->
        <div
          class="question__radio radio"
          v-if="3 === stepsProgress.currentStep"
        >
          <h2 class="radio__title common-title">
            {{ infoForm[2].title }}
          </h2>
          <span class="radio__txt common-txt">{{ infoForm[2].subtitle }}</span>

          <ul class="radio__items list-reset">
            <li v-for="price in prices" :key="price.id">
              <Radio
                :value="price.quantity"
                :label="price.quantity"
                :id="price.id"
                name="price"
                v-model:oldValue="selectedPriceVal"
                @update="selectedPrice"
              />
            </li>
          </ul>
        </div>

        <!-- submit -->
        <div
          class="question__submit submit"
          v-if="4 === stepsProgress.currentStep"
        >
          <img class="submit__img" src="/assets/img/submit.png" alt="submit" />
          <h2 class="submit__title heading-2 common-title">
            {{ infoForm[3].title }}
          </h2>
          <span class="submit__txt common-txt">{{ infoForm[3].subtitle }}</span>
          <div class="submit__btn">
            <AppButton
              label="Submit"
              :disabled="isDisabled"
              @click="disableButton(), submitData()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="[
      'form-btns',
      stepsProgress.currentStep > 1 ? '' : 'form-btns--none',
    ]"
  >
    <AppButton
      label="Previous step"
      transpButton
      @click="previousStep(infoForm.id)"
      v-if="stepsProgress.currentStep > 1"
    />
    <span></span>
    <AppButton
      label="Next step"
      @click="nextStep()"
      v-if="stepsProgress.currentStep <= 3"
    />
  </div>
</template>




<style lang="scss" scoped>
.form {
  min-height: 600px;
  display: flex;
  border-radius: 34px;
  border: 1px solid #eff0f6;
  background: var(--white-color);
  box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);

  @media (max-width: 730px) {
    min-height: max-content;
  }

  &__content {
    width: 100%;
    padding: 30px 45px;
  }

  .step-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #d9dbe9;
    padding-bottom: 30px;
    @media (max-width: 575px) {
      justify-content: space-between;
    }

    .item {
      display: flex;
      align-items: center;

      &:last-child .item__line {
        display: none;
      }
      &__bubble {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #eff0f6;
        width: 34px;
        height: 34px;
        border-radius: 100%;

        font: 400 16px/23px "DM Sans", Arial, sans-serif;
        color: rgb(111, 108, 144);
      }

      &__bubble.active {
        -webkit-animation: 0.1s linear both wd2;
        animation: 0.1s linear both wd2;
        animation-delay: 0.5s;
        @media (max-width: 575px) {
          animation: none;
          background-color: #4a3aff;
          color: var(--white-color);
        }
      }

      &__line {
        background-color: #eff0f6;
        width: 100px;
        height: 6px;
        border-radius: 40px;
        margin: 0 18px;

        @media (max-width: 730px) {
          width: 12vw;
        }
        @media (max-width: 575px) {
          display: none;
        }

        .half-line {
          height: 100%;
          width: 50%;
          border-radius: 40px;
          background-color: #4a3aff;

          -webkit-animation: 0.5s linear both wd;
          animation: 0.5s linear both wd;
          animation-delay: 0.5s;
        }

        .full-line {
          height: 100%;
          width: 100%;
          border-radius: 40px;
          background-color: #4a3aff;

          -webkit-animation: 0.5s linear both wd1;
          animation: 0.5s linear both wd1;
        }
      }
    }
  }
  // анимация степ листа
  @keyframes wd {
    0% {
      width: 0%;
    }

    100% {
      width: 50%;
    }
  }

  @keyframes wd1 {
    0% {
      width: 50%;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes wd2 {
    0% {
      background-color: #eff0f6;
    }

    100% {
      background-color: #4a3aff;
      color: var(--white-color);
    }
  }

  .question {
    margin-top: 64px;
    text-align: start;

    .contact {
      &__items {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: center;

        .input-img {
          position: absolute;
          top: 32%;
          right: 38px;
        }

        @media screen and (max-width: 730px) {
          flex-direction: column;
        }
      }
    }

    .check {
      &__list {
        margin-top: 38px;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;

        @media screen and (max-width: 730px) {
          flex-direction: column;
        }
      }
    }

    .radio {
      &__items {
        margin-top: 38px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: center;

        @media screen and (max-width: 730px) {
          flex-direction: column;
        }
      }
    }

    .submit {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        margin-top: 20px;
        text-align: center;
      }

      &__txt {
        display: block;
        text-align: center;
        margin-bottom: 20px;
        width: 80%;
      }
    }
  }

  &-btns {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 575px) {
      flex-direction: column;
      gap: 10px;
    }

    &--none {
      &:first-child {
        display: none;
      }
    }
  }
}
</style>