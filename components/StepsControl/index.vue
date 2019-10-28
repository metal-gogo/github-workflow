<template>
  <nav class="steps-control__container">
    <button
      v-if="previousStep"
      :disabled="previousStep.isDisabled"
      class="main-cta steps-control__previous-step"
      @click="previousStep.action"
    >
      {{ previousStep.label }}
    </button>
    <button
      v-if="nextStep"
      :disabled="nextStep.isDisabled"
      class="main-cta steps-control__next-step"
      @click="nextStep.action"
    >
      {{ nextStep.label }}
    </button>
  </nav>
</template>

<script>
import stepValidator from '~/utils/propValidators/stepValidator.js'

export default {
  props: {
    nextStep: {
      type: Object,
      required: false,
      default: null,
      validator: stepValidator
    },
    previousStep: {
      type: Object,
      required: false,
      default: null,
      validator: stepValidator
    }
  }
}
</script>

<style lang="scss">
.steps-control__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
}

.steps-control__previous-step {
  position: relative;
  margin-right: auto;
  padding-left: 1.5rem;

  &::after {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    width: 0.75rem;
    height: 0.75rem;
    content: ' ';
    background-image: url('/images/chevron-right.svg');
    transform: scaleX(-1) translateY(calc(-50% + 1px));
    // The pixel is added to give a visual centering of the item
    // I decided to flip the image instead of adding another image
  }
}

.steps-control__next-step {
  position: relative;
  margin-left: auto;
  padding-right: 1.5rem;

  &::after {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    width: 0.75rem;
    height: 0.75rem;
    content: ' ';
    background-image: url('/images/chevron-right.svg');
    transform: translateY(calc(-50% + 1px));
    // The pixel is added to give a visual centering of the item
  }
}
</style>
