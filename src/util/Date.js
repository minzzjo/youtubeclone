import { format, register } from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';

register('ko', KoLocale)

export function formatAgo(date, lang = 'en-US') {
  return format(date, lang);
}