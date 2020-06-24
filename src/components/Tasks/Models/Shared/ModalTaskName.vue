<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      clearable
      clear-icon="close"
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      label="Task name"
      ref="name"
      class="col"
    />
    <!-- <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      label="Task name"
      ref="name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          name="close"
          v-if="name"
          @click="name = ''"
          class="cursor-pointer"
        ></q-icon>
      </template>
    </q-input> -->
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>