//mutiple promise thakte pare and ekta promise er result ke kaje lagiye arekta promise resolve hote pare.

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

// const addToCalendar = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

//     resolve(calender);
//   });
// };

//or

const addToCalendar = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calender);
};

//using promise

//promise resolve hole then() block e jabe, na hole catch block e jabe,

// meeting
//   .then(addToCalendar)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//amader then block er moto chain korte hosse na.

async function myMeeting() {
  try {
    const meetingDetails = await meeting;

    const calender = await addToCalendar(meetingDetails);

    console.log(calender);
  } catch {
    console.log("Something wrong happened");
  }
}

myMeeting();

console.log("hello world");
