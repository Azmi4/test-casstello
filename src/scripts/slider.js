import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
  el: ".project",
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        // autoPlay: 5000,
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
        resize: true
      }
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },

    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },
    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0) {
        this.$el.querySelector(".slider__button_prev").disabled = true;
      } else if (
        this.$refs.flickity.selectedIndex() ==
        this.$refs.flickity.slides().length - 1
      ) {
        this.$el.querySelector(".slider__button_next").disabled = true;
      } else {
        this.$el.querySelector(".slider__button_prev").disabled = false;
        this.$el.querySelector(".slider__button_next").disabled = false;
      }
    }
  }
});
