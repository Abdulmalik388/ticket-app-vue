export const validateTicket = (ticket) => {
  const errors = {};
  if(!ticket.title) errors.title = "Title is required";
  if(!['open','in_progress','closed'].includes(ticket.status)) errors.status = "Status must be open, in_progress, or closed";
  if(ticket.description && ticket.description.length > 500) errors.description = "Description max 500 chars";
  return errors;
}
