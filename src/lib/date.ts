import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'dd.MM.yyyy');
}
