<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeo}?h=${vimeo}`"
    width="640"
    height="360"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    vimeo: String,
  },
};
</script>
