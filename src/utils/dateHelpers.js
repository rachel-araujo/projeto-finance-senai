export function formatDate(date) {
  return format(parseISO(date), 'dd/MM/yyyy');
}