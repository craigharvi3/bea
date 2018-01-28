/**
 * Availability helper
 * Works out the availability of the program and returns it in a suitable format (i.e. 27d left)
 */

import moment from 'moment';

class Availability {

  get(endDate) {

    if (this.hasIndefinteAvailability(endDate)) {
      return 'Available now';
    }

    const endDateObj = moment(endDate);
    const nowDateObj = moment();
    const diff = endDateObj.diff(nowDateObj, 'days');
    return `${diff}d left`;
  }

  hasIndefinteAvailability(endDate) {
    return endDate === null;
  }

}

export default new Availability();
