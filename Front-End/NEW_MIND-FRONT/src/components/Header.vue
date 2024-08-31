<template>
  <div class="hero_area">
    <!-- header section -->
    <div class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span>New Mind</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="s-1"></span>
            <span class="s-2"></span>
            <span class="s-3"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#about">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#formations">Formations</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#service">Services</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#contact">Contact Us</router-link>
                </li>
              </ul>
            </div>
            <div class="quote_btn-container">
              <router-link to="/sign-in" class="btn btn-primary">
                <i class="fa fa-user-plus"></i>
                <span>Join Us</span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- slider section -->
    <section class="slider_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail_box">
              <h1>Welcome</h1>
              <h1>&nbsp&nbsp To</h1>
              <h1>&nbsp&nbsp&nbsp&nbsp&nbsp New Mind</h1>
              <p>
                Your Hub for Learning, Services, and Exchange...<br>
                Offers everything you need to grow and connect.<br>
                Explore courses, access professional services,<br>
                and exchange ideas and resources.<br>
                Join us for a better, more connected future.
              </p>

              <div class="btn-box">
                <a href="" class="btn-1">Get A Formation</a>
                <a href="" class="btn-2">Our Services</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="img-box">
              <img src="../assets/images/slider-image-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
