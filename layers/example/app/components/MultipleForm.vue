<template>
  <div>
    <CustomInput
      v-model="firstName"
      label="First Name"
    />
    <CustomInput
      v-model="lastName"
      label="Last Name"
    />
  </div>
</template>

<script lang="ts" setup>
const firstName = defineModel < string > ('firstName')
const lastName = defineModel < string > ('lastName')
</script>

<style></style>
