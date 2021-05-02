import moment from 'moment';

export function getDateDiff(date) {
  let start = moment(new Date());
  let end = moment(date);

  const days = start.diff(end, 'days');

  if (days > 365) {
    const years = start.diff(end, 'years');
    return `${years} years ago`;
  }

  if (days > 31 && days < 366) {
    const months = start.diff(end, 'months');
    return `${months} months ago`;
  }

  if (days > 1 && days < 32) {
    const weeks = start.diff(end, 'weeks');
    const status = weeks > 1 ? `${weeks} weeks ago` : `1 week ago`;
    return status;
  }

  if (days < 2) {
    return `A few minutes`;
  }
}

export default {
  getDateDiff
};
