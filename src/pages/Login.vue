<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%; border-radius: 15px;">
      <h2 class="text-center mb-4 fw-bold">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Enter username"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>

      <p class="text-center mt-3">
        Don’t have an account?
        <router-link to="/auth/signup" class="text-decoration-none fw-semibold">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../store/useAuth";

const auth = useAuth();
const router = useRouter();

const username = ref("");
const password = ref("");

const handleLogin = () => {
  try {
    auth.login(username.value, password.value);
    router.push("/dashboard");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
}
</style>
