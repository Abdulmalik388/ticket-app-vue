<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card shadow-sm border-0 h-100">
      <div class="card-body d-flex flex-column justify-content-between">
        <!-- Header -->
        <div>
          <div class="d-flex justify-content-between align-items-start">
            <h6 class="card-title fw-semibold text-dark mb-2">{{ ticket.title }}</h6>
            <span
              class="badge rounded-pill px-3 py-2 text-capitalize"
              :class="statusBadge"
            >
              {{ formatStatus(ticket.status) }}
            </span>
          </div>

          <!-- Description -->
          <p class="card-text text-muted small mb-3">
            {{ ticket.description }}
          </p>
        </div>

        <!-- Actions -->
        <div class="mt-auto d-flex justify-content-between">
          <button
            @click="$emit('edit', ticket)"
            class="btn btn-outline-primary btn-sm d-flex align-items-center"
          >
            <i class="bi bi-pencil me-1"></i> Edit
          </button>
          <button
            @click="$emit('delete', ticket.id)"
            class="btn btn-outline-danger btn-sm d-flex align-items-center"
          >
            <i class="bi bi-trash me-1"></i> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: ["ticket"],
  computed: {
    statusBadge() {
      switch (this.ticket.status) {
        case "open":
          return "bg-success text-white";
        case "in_progress":
          return "bg-warning text-dark";
        case "closed":
          return "bg-secondary text-white";
        default:
          return "bg-light text-dark";
      }
    },
  },
  methods: {
    formatStatus(status) {
      return status.replace("_", " ");
    },
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 180px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}
</style>
