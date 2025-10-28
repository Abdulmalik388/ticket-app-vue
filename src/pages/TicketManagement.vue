<template>
  <div class="container py-5">
    <Navbar />

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mt-4">
      <h1 class="fw-bold text-white">Ticket Management</h1>
      <button class="btn btn-primary" @click="showModal = true">Add Ticket</button>
    </div>

    <!-- Ticket List -->
    <div class="row g- mt-3">
      <div
        v-for="t in tickets"
        :key="t.id"
        class="col-12 col-md-6 col-lg-4 d-flex "
      >
        <TicketCard
          :ticket="t"
          class="flex-fill mb-4"
          @edit="editTicket"
          @delete="deleteTicket"
        />
      </div>

      <div v-if="tickets.length === 0" class="text-center  text-muted py-5">
        <p>No tickets yet. Click "Add Ticket" to create one!</p>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal-content-custom">
        <div class="modal-header">
          <h5 class="modal-title">Add Ticket</h5>
          <button class="btn-close" @click="showModal = false"></button>
        </div>
        <div class="modal-body">
          <TicketForm
            :initialTicket="{ title: '', status: '', description: '' }"
            @submit-ticket="handleAddTicket"
          />
        </div>
      </div>
    </div>

    <Footer class="ticket-footer" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import TicketCard from '../components/TicketCard.vue';
import TicketForm from '../components/TicketForm.vue';
import { useTickets } from '../store/useTickets';

export default {
  components: { Navbar, Footer, TicketCard, TicketForm },
  setup() {
    const ticketsStore = useTickets();
    const showModal = ref(false);

    const handleAddTicket = (ticket) => {
      ticketsStore.addTicket({ ...ticket, id: Date.now() });
      showModal.value = false; // close modal
    };

    const editTicket = (ticket) => {
      const newTitle = prompt('Edit Title', ticket.title);
      const newStatus = prompt('Edit Status (open/in_progress/closed)', ticket.status);
      const newDesc = prompt('Edit Description', ticket.description);
      if (newTitle && newStatus && ['open', 'in_progress', 'closed'].includes(newStatus)) {
        ticketsStore.updateTicket({
          ...ticket,
          title: newTitle,
          status: newStatus,
          description: newDesc,
        });
      } else {
        alert('Invalid input');
      }
    };

    const deleteTicket = (id) => {
      if (confirm('Are you sure you want to delete this ticket?')) {
        ticketsStore.deleteTicket(id);
      }
    };

    return {
      tickets: ticketsStore.tickets,
      showModal,
      handleAddTicket,
      editTicket,
      deleteTicket,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  /* Background image */
  background-image: url('/assets/ticket-bg.png'); /* replace with your image path */
  background-size: cover;      /* cover whole container */
  background-position: center; /* center the image */
  background-repeat: no-repeat;
  min-height: 100vh;           /* ensure it covers full viewport height */
  padding: 50px 20px;
}

/* Optional: add a semi-transparent overlay for better readability */
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* white overlay with opacity */
  z-index: -1;
}

.text-primary {
  color: #0d6efd !important;
}

.card {
  border-radius: 10px;
}

/* Simple modal styling */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content-custom {
  background: white;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
