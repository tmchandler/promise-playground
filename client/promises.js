const makeChange = (availableChange) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableChange > 50) {
        resolve("Three cheers for currency!");
      } else {
        reject(new Error('Unusable amount of change given.'));
      }
    }, 1000);
  });
};

// Finish the chaining on this makeChange invocation to handle success and the error that should be happening
// HINT: If you are receiving a message starting with "Uncaught" in the console, you're not handling the error yet
// makeChange(10) 

// Finish the chaining on this to handle the success and error cases
// makeChange(/* IT'S OVER */9000) 

/* After you complete this section, comment out the above and uncomment the below down to the next dividing line */
// =====================================================================================================================

/* Promisify the below function so that the invocation chain starting on line 36 works */
const ajaxPromise = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3030/peanuts',
      success: (data) => {
        resolve(data);
      },
      error: (err) => {
        reject(err);
      },
    })
  });
};

ajaxPromise()
  .then((data) => {
    console.log('Successfully promisified! The data:', data);
  })
  .catch((err) => console.error(err));

/* Write axios requests to perform the same calls as the Ajax requests already written below */

// const peanuts = () => {
//   $.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:3030/peanuts',
//     success: (data) => {
//       console.log('Ajax Peanuts:', data);
//     }
//   })
// };

// peanuts();

// const checkPeanuts = () =>  {
//   // FILL ME IN
// };

// checkPeanuts();

// const pie = () => {
//   $.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:3030/pies',
//     success: (data) => {
//       console.log('Ajax Pies:', data);
//     },
//   })
// };

// pie();

// const pieCounter = () => {
//   // FILL ME IN
// };

// pieCounter();

// ===================================================================== //

/* 
*  The below is some extra practice using promises with some of the fs methods you worked with on a-sync-swim.
*  It involves writing Axios on the front end and promisifying your fs methods within the server.
*
*  =====================================================================
* 
*  Write an axios get request to retrieve the message in the .txt file in the server 
*  You'll need to fill out the server-side handling for this as well.
*
*  HINT: When your client static files are served from the same origin you're writing requests to, it allows axios to
*  handle some aspects of the url for you. 
*/
const getMessage = () => {
  // FILL ME IN
};

getMessage();

/* Write an axios request to send a message to the server.
*  You'll need to finish the routing on the server side to store the message.
*
*  HINT: The axios.post syntax for sending data is post(url, dataObject)
*/
const sendMessage = (msg) => {
  // FILL ME IN
};

sendMessage('Hi I am a person.');
