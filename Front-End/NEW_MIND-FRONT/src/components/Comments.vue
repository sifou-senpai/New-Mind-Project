<template>
  <!-- client section -->
  <div class="client_section layout_padding-bottom">
    <div class="testimonial">
      <div class="container">
        <div id="testimonial" class="testimonial">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <div class="heading_container">
                    <h2>
                      Your Comments
                    </h2>
                    <p>
                      We value your feedback and encourage you to share your thoughts. Your comments help us improve and
                      provide a better experience for everyone. Join the conversation and let your voice be heard.
                    </p>

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div id="myCarousel" class="carousel slide testimonial_Carousel " data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="carousel-caption ">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="testimonial_box">
                                <h3>Client 2 <br><span class="blu">Name</span></h3>
                                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                <i><img src="../assets/images/test.png" alt="#" /></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="testimonial_box">
                                <h3>Client 2<br><span class="blu">Name</span></h3>
                                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                <i><img src="../assets/images/test.png" alt="#" /></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="full cross_layout">
                                <div class="testimonial_box">
                                  <h3>Client 3 <br><span class="blu">Name</span></h3>
                                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                  </p>
                                  <i><img src="../assets/images/test.png" alt="#" /></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <i class='fa fa-angle-left'></i>
                  </a>
                  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <i class='fa fa-angle-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end client section -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const carouselElement = document.getElementById('myCarousel');

  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 7000, // Set auto-rotate interval to 7 seconds
      ride: 'carousel'
    });

    // Optional: You can add custom behavior or event listeners here
  }
});
</script>