<template>
  <div :class="styles.post">
    <div :class="styles.inner"><slot></slot></div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
