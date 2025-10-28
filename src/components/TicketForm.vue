<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h4 class="card-title mb-3 text-primary fw-bold">
        {{ isEdit ? 'Edit Ticket' : 'Create Ticket' }}
      </h4>

      <div class="mb-3">
        <label class="form-label fw-semibold">Title</label>
        <input
          v-model="ticket.title"
          type="text"
          class="form-control"
          placeholder="Enter ticket title"
        />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Status</label>
        <select v-model="ticket.status" class="form-select">
          <option value="">Select status</option>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Description</label>
        <textarea
          v-model="ticket.description"
          class="form-control"
          rows="3"
          placeholder="Enter ticket description"
        ></textarea>
      </div>

      <div class="d-flex justify-content-end">
        <button class="btn btn-primary px-4" @click="submit">
          {{ isEdit ? 'Update Ticket' : 'Add Ticket' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { validateTicket } from '../utils/validators';

export default {
  props: ['initialTicket', 'isEdit'],
  emits: ['submit-ticket'],
  setup(props, { emit }) {
    const ticket = ref({ ...props.initialTicket });

    watch(
      () => props.initialTicket,
      (val) => (ticket.value = { ...val })
    );

    const submit = () => {
      const errors = validateTicket(ticket.value);
      if (Object.keys(errors).length)
        return alert(Object.values(errors).join('\n'));
      emit('submit-ticket', { ...ticket.value });
      if (!props.isEdit)
        ticket.value = { title: '', status: '', description: '' };
    };

    return { ticket, submit };
  },
};
</script>

<style scoped>
.card {
  max-width: 600px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
}
</style>
