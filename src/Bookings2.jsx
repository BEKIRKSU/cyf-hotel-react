import React from 'react';
import BookingTable from './BookingTable';
import bookingsData from './data/fakeBookings.json';

const Bookings2 = () => {
  return (
    <div>
      <h1>CYF Hotel Bookings</h1>
      <BookingTable bookings={bookingsData} />
    </div>
  );
};

export default Bookings2;