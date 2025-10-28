<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4 fw-bold">Sign Up</h2>

      <form @submit.prevent="handleSignup">
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

        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
      </form>

      <p class="text-center mt-3">
        Already have an account?
        <router-link to="/auth/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useAuth } from '../store/useAuth';
import { ref } from 'vue';

export default {
  setup() {
    const auth = useAuth();

    // Use ref for reactive primitive values
    const username = ref('');
    const password = ref('');

    const handleSignup = () => {
      if (!username.value || !password.value) {
        alert('Please enter a username and password.');
        return;
      }

      try {
        auth.login(username.value, password.value); // Mock signup = login
      } catch (err) {
        alert(err.message);
      }
    };

    return { username, password, handleSignup };
  }
};
</script>
