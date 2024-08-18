<template>
  <!-- client section -->
  <div class="client_section layout_padding-bottom">
    <div class="testimonial">
      <div class="container">
          <div class="heading_container">
            <h2>
              Your Comments
            </h2>
            <p>
              paragraph
            </p>
          </div>
        <!-- start slider section -->
          <div class="col-md-12">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container-fluid">
                    <div class="carousel-caption d-none d-md-block">
                      <div class="row d_flex">
                        <div class="col-md-3">
                          <div class="test_box text_align_center">
                            <span><img src="../assets/images/test1.png" alt="Client 1" /></span>
                            <h4>Zoubir</h4>
                            <img class="img_responsive" src="../assets/images/te.png" alt="Quote" />
                            <p>unbelievable ou7ibouk</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="test_box white_bg text_align_center">
                            <span><img src="../assets/images/test2.png" alt="Client 2" /></span>
                            <h4>Ja3fer</h4>
                            <img class="img_responsive" src="../assets/images/te2.png" alt="Quote" />
                            <p>unbelievable ou7ibouk. If you are going to use a passage of bi tamaniya countiho, you
                              need to be sure</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="test_box text_align_center">
                            <span><img src="../assets/images/test3.png" alt="Client 3" /></span>
                            <h4>Hmimed</h4>
                            <img class="img_responsive" src="../assets/images/te.png" alt="Quote" />
                            <p>do u love me do you do you ...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container-fluid">
                    <div class="carousel-caption d-none d-md-block">
                      <div class="row d_flex">
                        <div class="col-md-3">
                          <div class="test_box text_align_center">
                            <span><img src="../assets/images/test2.png" alt="Client 4" /></span>
                            <h4>SIFOU</h4>
                            <img class="img_responsive" src="../assets/images/te.png" alt="Quote" />
                            <p>hans flick boy</p>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="test_box white_bg text_align_center">
                            <span><img src="../assets/images/test3.png" alt="Client 5" /></span>
                            <h4>AMINHO</h4>
                            <img class="img_responsive" src="../assets/images/te2.png" alt="Quote" />
                            <p>16 loading...</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="test_box text_align_center">
                            <span><img src="../assets/images/test1.png" alt="Client 6" /></span>
                            <h4>AMINE</h4>
                            <img class="img_responsive" src="../assets/images/te.png" alt="Quote" />
                            <p>fi al-etihad 9owa (pep theory)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
  <!-- end client section -->
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