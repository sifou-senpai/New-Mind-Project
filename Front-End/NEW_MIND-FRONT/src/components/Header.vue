<template>
  <div class="hero_area">

<!-- header section -->

<div class="header_section">
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg custom_nav-container ">
      <a class="navbar-brand" href="index.html">
        <span>
          New Mind
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="s-1"> </span>
        <span class="s-2"> </span>
        <span class="s-3"> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
          <ul class="navbar-nav  ">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about"> About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#formations"> Formations </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#service"> Services </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="quote_btn-container">
          <a href="sign-in-&-up.html" class="btn btn-primary">
            <i class="fa fa-user-plus"></i>
            <span>Join Us</span>
          </a>
          <form class="form-inline">
            <button id="searchButton" class="btn btn-secondary">
              <i class="fa fa-search"></i>
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</div>

<!-- end header section -->

<!-- Full Screen Search -->

<div class="modal fade" id="search" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content" style="background: rgba(29, 29, 39, 0.7);">
      <div class="modal-header border-0">
        <button id="closeButton" type="button" class="btn bg-white btn-close" aria-label="Close">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-center">
        <div class="input-group" style="max-width: 600px;">
          <input type="text" class="form-control bg-transparent border-light p-3" placeholder="Type search keyword">
          <button id="searchButton" class="btn btn-light px-4">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Full Screen Search End -->

<!-- slider section -->

<section class=" slider_section ">
  <div class="container">
    <div class="row">
      <div class="col-md-6 ">
        <div class="detail_box">
          <h1>
            Welcome</br> &nbsp&nbsp To</br> &nbsp&nbsp&nbsp&nbsp&nbsp New Mind
          </h1>
          <p>
            Your Hub for Learning, Services, and Exchange...
            offers everything you need to grow and connect. Explore courses, access professional services,
            and exchange ideas and resources. Join us for a better, more connected future.
          </p>
          <div class="btn-box">
            <a href="" class="btn-1">
              Get A Formation
            </a>
            <a href="" class="btn-2">
              Our Services
            </a>
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