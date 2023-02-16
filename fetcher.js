const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const url = args[0]; // first argurment of command line states URL
const saveLocation = args[1];

const content = request(url, (error, response, body) => {
  const wordCount = body.length;
  // if(error){
  //   console.log('invalid url please try again')
  //   return;
  // }
  // console.log('body:', body); // Print the HTML body for webpage
  fs.writeFile(saveLocation, body, err => {
    if (err) {
      console.error(err);
    }
    if (saveLocation) {
      console.log('file locaiton already exist');
      return;
    }
    // file written successfully
    console.log(`Downloaded and saved ${wordCount} bytes to ${url}`);
  });
});



