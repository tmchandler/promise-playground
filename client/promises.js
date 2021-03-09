  /**
   * PROMISES
   * ===========
   *
   * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
   *
   * Learning Objectives
   * --------------------
   *  - Anatomy of a Promise [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise ]
   *  - Promise chaining [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining ]
   *  - Promises & HTTP requests w/Axios [ https://github.com/axios/axios#axios-api ]
   */

/**
 * TO-DO
 * -----
 * [ ] Finish building the makeChange function.
 * The makeChange function should:
 *  - return a new promise
 *  - resolve with "Three cheers for currency!" when available change is > 50
 *  - reject when availableChange is < 50 and that rejection should throw a new Error with 'Unusable amount of change given.' as the messsage.
 */

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


/**
 * TO-DO
 * -----
 * [ ] Finish the chaining on this makeChange invocation to handle success and the error that should be happening
 * HINT: If you are receiving a message starting with "Uncaught" in the console, you're not handling the error yet
 */

const practiceChaining = (availableChange) => {
  return makeChange(availableChange)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      return "The error is handled";
    })
};


/**
 * TO-DO
 * -----
 * [ ] Promisify the below function so that the invocation chain starting on line 36 works
 */

// const ajaxPromise = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       type: 'GET',
//       url: 'http://127.0.0.1:3030/peanuts',
//       success: (data) => {
//         resolve(data);
//       },
//       error: (err) => {
//         reject(err);
//       },
//     })
//   });
// };


  /* After you complete this section, comment out the above and uncomment the below down to the next dividing line */
// =====================================================================================================================

/* Write axios requests to perform the same calls as the Ajax requests already written below */
  /**
   * TO-DO
   * -----
   * [ ] Refactor peanuts
   * [ ] Refactor checkPeanuts
   * [ ] Refactor pie
   * [ ] Complete picCounter
   */

// const peanuts = () => {
//   $.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:3030/peanuts',
//     success: (data) => {
//       console.log('Ajax Peanuts:', data);
//     }
//   })
// };

const peanuts = () => {
  return axios.get('http://127.0.0.1:3030/peanuts')
  .then(data => data.data)
  .catch(err => err);
}



const checkPeanuts = () =>  {
  // FILL ME IN
};


// const pie = () => {
//   $.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:3030/pies',
//     success: (data) => {
//       console.log('Ajax Pies:', data);
//     },
//   })
// };

const pie = () => {
  return axios.get('http://127.0.0.1:3030/pies')
  .then(data => data.data)
  .catch(err => err);
}

const pieCounter = () => {
  // FILL ME IN
};

// pieCounter();

// ========================================================================================================= //

/*
*  The content below is some extra practice using promises with some of the fs methods you worked with on a-sync-swim.
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

// getMessage();

/* Write an axios request to send a message to the server.
*  You'll need to finish the routing on the server side to store the message.
*
*  HINT: The axios.post syntax for sending data is post(url, dataObject)
*/
const sendMessage = (msg) => {
  // FILL ME IN
};
