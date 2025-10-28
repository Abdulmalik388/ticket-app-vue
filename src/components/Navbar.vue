<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4" to="/">TicketApp</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- When not logged in -->
          <template v-if="!auth.user">
            <li class="nav-item">
              <router-link class="nav-link" to="/auth/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link btn btn-primary text-white ms-2 px-3" to="/auth/signup">
                Get Started
              </router-link>
            </li>
          </template>

          <!-- When logged in -->
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/tickets">Tickets</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-light ms-3" @click="handleLogout">Logout</button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "../store/useAuth";

const router = useRouter();
const auth = useAuth();

const handleLogout = () => {
  auth.logout();
  router.push("/"); // redirect to landing after logout
};
</script>

<style scoped>
.navbar-brand {
  letter-spacing: 0.5px;
}
</style>
