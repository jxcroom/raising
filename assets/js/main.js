  /**
   * topslider carousel indicators
   */
  let topsliderCarouselIndicators = select("#topslider-carousel-indicators")
  let topsliderCarouselItems = select('#topsliderCarousel .carousel-item', true)

  topsliderCarouselItems.forEach((item, index) => {
    (index === 0) ?
    topsliderCarouselIndicators.innerHTML += "<li data-bs-target='#topsliderCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      topsliderCarouselIndicators.innerHTML += "<li data-bs-target='#topsliderCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  