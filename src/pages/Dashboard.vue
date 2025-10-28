<template>
  <div class="dashboard-page text-dark" style="min-height: 100vh; background: url('/assets/dashboard-bg.png') no-repeat center center/cover;">
    <!-- Navbar -->
    <Navbar />

    <!-- Dashboard Container -->
    <div class="container py-5" style="margin-top: 80px;">
      <div class="text-center mb-5">
        <h1 class="fw-bold display-5 text-white">Welcome to Your Dashboard</h1>
        <p class="text-light">Track and manage your support tickets easily</p>
      </div>

      <!-- Stats Section -->
      <div class="row g-4 justify-content-center">
        <div class="col-md-4">
          <div class="card shadow-lg border-0 text-center p-4 bg-light bg-opacity-75">
            <h5 class="fw-bold text-primary">Total Tickets</h5>
            <h2 class="fw-bold display-6 text-dark">{{ tickets.length }}</h2>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-lg border-0 text-center p-4 bg-light bg-opacity-75">
            <h5 class="fw-bold text-warning">Open Tickets</h5>
            <h2 class="fw-bold display-6 text-dark">{{ openTickets }}</h2>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-lg border-0 text-center p-4 bg-light bg-opacity-75">
            <h5 class="fw-bold text-success">Resolved Tickets</h5>
            <h2 class="fw-bold display-6 text-dark">{{ closedTickets }}</h2>
          </div>
        </div>
      </div>

      <!-- Manage Tickets Button -->
      <div class="text-center mt-5">
        <router-link to="/tickets" class="btn btn-primary btn-lg px-5 shadow-sm">
          Manage Tickets
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <Footer class="position-absolute bottom-0 start-0 end-0" />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { useTickets } from '../store/useTickets';

const ticketsStore = useTickets();
const tickets = ticketsStore.tickets;

// Derived values
const openTickets = tickets.filter(t => t.status === 'open').length;
const closedTickets = tickets.filter(t => t.status === 'closed').length;
</script>

<style scoped>
.dashboard-page {
  background-color: #f8f9fa;
  position: relative;
}

/* Optional overlay for better readability */
.dashboard-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
}
</style>
