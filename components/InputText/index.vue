<template>
  <div class="input-text__container">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      class="input-text"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    handleInput(e) {
      this.inputValue = e.target.value
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
.input-text__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
}

.input-text {
  min-width: 15rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border-color: $violet-heart;
  caret-color: $violet-heart;
  color: $daisy-bush;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px $sunflower;
  }

  @include input-placeholder {
    color: rgba($white, 0.6);
  }
}
</style>
