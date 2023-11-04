$(document).ready(() => {
  $('#gallery').lightGallery({
    selector: 'a',
    thumbnail: true,
    thumbWidth: 120,
    thumbContHeight: 100,
    thumbMargin: 5,
    thumbBorderWidth: 1,
    thumbBorderColor: '#ddd',
    thumbOpacity: 0.5,
    thumbBorderRadius: 3,
    thumbUrl: 'data-src',
    enableSwipe: true,
    autoplayControls: false,
    flipHorizontal: false,
    flipVertical: false,
    rotate: false,
    fullScreen: false,
  });
});
