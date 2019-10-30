<template>
      <div id="app">
        <div id="tab-bar"><slot></slot></div>
      </div>
</template>
<style lang="css">
#tab-bar{
  display: flex;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}


</style>