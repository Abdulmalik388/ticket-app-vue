import { defineStore } from 'pinia';

export const useTickets = defineStore('tickets', {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem('ticketapp_tickets')) || []
  }),
  actions: {
    saveTickets() {
      localStorage.setItem('ticketapp_tickets', JSON.stringify(this.tickets));
    },
    addTicket(ticket) {
      this.tickets.push(ticket);
      this.saveTickets();
    },
    updateTicket(updated) {
      const index = this.tickets.findIndex(t => t.id === updated.id);
      if (index !== -1) {
        this.tickets[index] = updated;
        this.saveTickets();
      }
    },
    deleteTicket(id) {
      this.tickets = this.tickets.filter(t => t.id !== id);
      this.saveTickets();
    }
  }
});
