<template>
  <!-- formations section -->

  <section class="formation_section layout_padding">
    <div class="container-xxl py-5">

      <div class="heading_container">
        <h2>
          Our Formations
        </h2>
        <p>
          Recently Launched Formations
        </p>
      </div>
      <div class="container px-lg-5">
        <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
          <div class="col-12 text-center">
            <ul class="list-inline mb-5" id="formations-flters">
              <li class="btn px-3 pe-4 active" data-filter="*">All</li>
              <li class="btn px-3 pe-4" data-filter=".first">Design</li>
              <li class="btn px-3 pe-4" data-filter=".second">Development</li>
            </ul>
          </div>
        </div>
        <div class="row g-4 formations-container">
          <div class="col-lg-4 col-md-6 formations-item first wow zoomIn" data-wow-delay="0.1s">
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="../assets/images/formation-1.jpg" alt="">
              <div class="formations-overlay">
                <a class="btn btn-light" href="../assets/images/formation-1.jpg" data-lightbox="portfolio"><i
                    class="fa fa-plus fa-2x text-primary"></i></a>
                <div class="mt-auto">
                  <small class="text-white"><i class="fa fa-folder me-2"></i>Web Design</small>
                  <a class="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 formations-item second wow zoomIn" data-wow-delay="0.3s">
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="../assets/images/formation-2.jpg" alt="">
              <div class="formations-overlay">
                <a class="btn btn-light" href="../assets/images/formation-2.jpg" data-lightbox="portfolio"><i
                    class="fa fa-plus fa-2x text-primary"></i></a>
                <div class="mt-auto">
                  <small class="text-white"><i class="fa fa-folder me-2"></i>Web Design</small>
                  <a class="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 formations-item first wow zoomIn" data-wow-delay="0.6s">
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="../assets/images/formation-3.jpg" alt="">
              <div class="formations-overlay">
                <a class="btn btn-light" href="../assets/images/formation-3.jpg" data-lightbox="portfolio"><i
                    class="fa fa-plus fa-2x text-primary"></i></a>
                <div class="mt-auto">
                  <small class="text-white"><i class="fa fa-folder me-2"></i>Web Design</small>
                  <a class="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="show-more-container">
        <button class="btn btn-show-more">Show More</button>
      </div>
    </div>
  </section>

  <!-- formations section end -->
</template>