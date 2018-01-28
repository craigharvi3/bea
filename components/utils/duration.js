/**
 * Duration helper
 * Convers duration strings (e.g. PT3H) to correct format (e.g. 03:00:00)
 */

import moment from 'moment';

class Duration {

  format(isoDateString) {
    const duration = moment.duration(isoDateString);

    if (duration.hours() > 0) {
      // 1+ hours e.g. (1:23:45)
      return `${duration.hours()}:${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`;
    } else if (duration.minutes() > 0) {
      // 1+ minutes e.g. (1:23)
      return `${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`;
    }

    // Under 1 minute e.g. (0:12)
    return '00:' + duration.seconds();
  }

  pad(number) {
    const str = '' + number;
    const pad = '00';
    return pad.substring(0, pad.length - str.length) + str;
  }

}

export default new Duration();
