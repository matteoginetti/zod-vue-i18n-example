<script setup lang="ts">
import { ref } from 'vue';
import { z } from 'zod';

const schemaValidation = z.object({
  name: z.string().min(3).max(10),
  surname: z.number(),
});

console.log();
type SchemaValidation = z.infer<typeof schemaValidation>;

const value = ref({} as SchemaValidation);
const errors = ref();

let validate = null;

const onSubmit = () => {
  validate = schemaValidation.safeParse(value.value);
  console.log(validate);
  if (!validate.success) {
    const errorFormatted = validate.error.format();
    errors.value = Object.keys(errorFormatted).reduce((acc, value) => {
      if (value == '_errors') return acc;
      let res = { ...acc };
      res[value] = errorFormatted[value]._errors[0];
      return res;
    }, {} as Record<string, string>);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="name">{{ $t('name') }}</label>
      <input v-model="value.name" type="text" id="name" />
      <span v-if="errors && errors.name">{{ errors.name }}</span>
      <label for="surname">{{ $t('surname') }}</label>
      <input v-model="value.surname" type="text" id="surname" />
      <span v-if="errors && errors.surname">{{ errors.surname }}</span>

      <button type="submit">{{ $t('submit') }}</button>
    </form>
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: start;
}

span {
  color: red;
  margin-bottom: 1em;
}
</style>
