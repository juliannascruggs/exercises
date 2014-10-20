//Create an array of objects
/*Array Type: Hotel
      Properties
        Name: Motel 8
        Rating: 4
        Rooms: 104
        Bookings: 87
        Gym: false
        Pool: true
      Properties
        Name: La Queso
        Rating: 10000
        Rooms: 100
        Bookings: 100
        Gym: false
        Pool: true
        Margaritas: always
        */



var hotelArray = [];

// var hotel = {
//   name: "Motel 8",
//   rating: 4,
//   rooms: 104,
//   bookings: 87,
//   gym: false,
//   pool: true
// };

hotelArray.push({
  name: "Motel 8",
  rating: 4,
  rooms: 104,
  bookings: 87,
  gym: false,
  pool: true
});

// var hotel = {
//   name: "La Quinta",
//   rating: 5000,
//   rooms: 200,
//   bookings: 30,
//   gym: false,
//   pool: true,
//   margaritas: "usually"
// };

hotelArray.push({
  'name': "La Quinta",
  'rating': 5000,
  'rooms': 200,
  'bookings': 30,
  'gym': false,
  'pool': true,
  'margaritas': "usually"
});

//Now we need to print out each one of these variables in the Array. Only want what is stored in the
//object, not the object keys.
//Create a for loop that will console.log the elements in our array

for (var i in hotelArray) {

  console.log(hotelArray[i]);

  for (var j in hotelArray[i]) {
    console.log(hotelArray[i][j]);
  }

 }

//Expected output:
/*
  Object {name: "Motel 8", rating: 4, rooms: 104, bookings: 87, gym: false…}
  Object {name: "La Queso", rating: 10000, rooms: 100, bookings: 100, gym: false…}
*/