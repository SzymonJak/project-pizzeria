import {select, templates} from '../settings.js';
import {utils} from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(bookingContainer){
    const thisBooking = this;
    thisBooking.render(bookingContainer);
    thisBooking.initWidgets();
  }

  render(bookingContainer) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    
    thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingContainer;
    thisBooking.dom.wrapper.element = utils.createDOMFromHTML(generatedHTML);
    bookingContainer.appendChild(thisBooking.dom.wrapper.element);

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }

  initWidgets() {
    const thisBooking = this;
    
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
  }
}

export default Booking;