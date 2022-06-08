// kisu korar ekta promise judi condition ta true hoy

// judi ekta promise rakha somvob hoy, tahole js er term e bole 'promise has been resolved'

// r rakha somvob na hole, bola hobe 'promise has been rejected'

//promise use kora hoy mainly, kono ekta asynchronous operation er  result ke handle korar jonno

const hasMeeting = false;

//creating promise

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };

    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled"));
  }
});

//using promise

//promise resolve hole then() block e jabe, na hole catch block e jabe,

meeting
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });


  console.log('hello');
