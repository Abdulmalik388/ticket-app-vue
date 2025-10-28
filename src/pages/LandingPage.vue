<template>
  <div class="container-fluid px-0">
    <!-- Navbar -->
    <Navbar />
    <!-- Hero Section -->
  <section class="hero-section d-flex align-items-center justify-content-center">
  <div class="container text-center position-relative" style="z-index: 2;">
    <h1 class="display-3 fw-bold text-white">Welcome to TicketApp</h1>
    <p class="lead text-white mt-3">Manage and track your support tickets seamlessly.</p>

    <div class="mt-4">
      <router-link v-if="!auth.user" class="btn btn-light btn-lg me-3" to="/auth/login">
        Login
      </router-link>
      <router-link v-if="!auth.user" class="btn btn-outline-light btn-lg" to="/auth/signup">
        Get Started
      </router-link>
      <router-link v-else class="btn btn-light btn-lg me-3" to="/dashboard">
        Go to Dashboard
      </router-link>
    </div>
  </div>

  <!-- Circles as separate divs -->
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
</section>



    <!-- Features Section -->
    <section class="container py-5 position-relative" style="z-index: 2;">
      <div class="row g-4 text-center">
        <div class="col-md-4">
          <div class="card shadow-sm h-100 p-4">
            <h5 class="card-title">Create Tickets</h5>
            <p class="card-text">Easily create tickets and track their progress.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm h-100 p-4">
            <h5 class="card-title">Dashboard</h5>
            <p class="card-text">View total, open, and resolved tickets at a glance.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm h-100 p-4">
            <h5 class="card-title">Secure Access</h5>
            <p class="card-text">Authentication ensures only authorized users access tickets.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useAuth } from "../store/useAuth";

// ✅ Import your images properly
import circle1 from "/assets/circle1.png";
import circle2 from "/assets/circle2.png";
import wave from "/assets/wave.png";

const auth = useAuth();
</script>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
  background: url('/assets/wave.png') center/cover no-repeat; /* main background only */
}

/* Circle common styles */
.circle {
  position: absolute;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
}

/* Top-left circle */
.circle-1 {
  width: 180px;
  height: 180px;
  top: 100px;    /* lowered a bit */
  left: 50px;
  background-image: url('/assets/circle1.png');
  animation: rotate 20s linear infinite;
}

/* Bottom-right circle */
.circle-2 {
  width: 180px;
  height: 180px;
  bottom: 50px;
  right: 80px;
  background-image: url('/assets/circle2.png');
  animation: rotate 25s linear infinite reverse;
}

/* Keyframes for rotation */
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>