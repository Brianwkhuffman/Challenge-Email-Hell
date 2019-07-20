const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here
  const emailTally = emailFile.emails.reduce(function(acc, current) {
    if (acc.hasOwnProperty(current.email)) {
      acc[current.email]++;
    } else {
      acc[current.email] = 1;
    }
    return acc;
  }, {});
  return emailTally;
}

console.log(countUniqueEmails(emailLog));
