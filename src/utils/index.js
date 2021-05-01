import moment from 'moment';

export function getDateDiff(date) {
  let start = moment(new Date());
  let end = moment(date);

  const days = start.diff(end, 'days');

  if (days > 366) {
    const years = start.diff(end, 'years');
    return `${years} years ago`;
  }

  if (days > 31 && days < 366) {
    const months = start.diff(end, 'months');
    return `${months} months ago`;
  }

  if (days > 1 && days < 31) {
    const weeks = start.diff(end, 'weeks');
    return `${weeks} weeks ago`;
  }

  if (days === 1) {
    return `A few minutes`;
  }
}

export default {
  getDateDiff
};
