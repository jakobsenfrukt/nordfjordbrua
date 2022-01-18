<template>
  <div class="video">
    <iframe
      :src="`https://player.vimeo.com/video/${vimeo}?h=${vimeo}`"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    vimeo: String,
  },
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
