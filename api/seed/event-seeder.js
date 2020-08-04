const Event = require('../models/Event');
const mongoose = require('mongoose');

try {
  // connect database
  mongoose.connect(
    'mongodb+srv://haoranyu:12345677654321@mern-shopping-list.bzwhf.mongodb.net/mern-shopping-list?retryWrites=true&w=majority'
  );
  const events = [
    new Event({
      name: 'Graffiti Party',
      imagePath: 'https://i.ibb.co/r2khbH9/graffiti-party.jpg',
      flatNumber: '1256',
      street: 'Bellmanford Street',
      postCode: '95135',
      City: 'San Jose',
      state: 'CA',
      host: 'Doodos Official',
      // ticket can be found at online store
      ticketrequired: true,
      ticketPrice: 3.99,
    }),
    new Event({
      name: 'Doodos BBQ',
      imagePath: 'https://i.ibb.co/nQMLpds/doodos-BBQ.jpg',
      flatNumber: '1427',
      street: 'Dijkstra Park',
      postCode: '93135',
      City: 'San Francisco',
      state: 'CA',
      host: 'Doodos Official',
      ticketrequired: true,
      ticketPrice: 20.99,
    }),
    new Event({
      name: 'Doodos BootCamp',
      imagePath: 'https://i.ibb.co/y0r83XC/doodos-bootcamp.jpg',
      flatNumber: '1907',
      street: 'Silver Creek Valley Road',
      postCode: '95130',
      City: 'San Jose',
      state: 'CA',
      host: 'Doodos Official',
      ticketrequired: true,
      ticketPrice: 10.99,
    }),
  ];

  let i,
    done = 0;

  for (i = 0; i < events.length; i++) {
    events[i].save(() => {
      done++;
      if (done === events.length) {
        mongoose.disconnect();
      }
    });
  }
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
