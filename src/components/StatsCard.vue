<template>
  <div class="p-5 rounded shadow bg-white">
    <h2 class="font-bold">{{ title }}</h2>
    <p class="text-2xl mt-2">{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'value']
}
</script>
