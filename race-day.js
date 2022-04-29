/* this is an app to determine a runner's number
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
18 year olds must see the registration desk
*/

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;
var adult = '';
console.log(raceNumber);
console.log(age);
if (age > 18 && registeredEarly) {
    raceNumber += 1000;
    adult = true;
}
if (adult && registeredEarly) {
    console.log(`Number ${raceNumber} your race starts at 9.30 am.`)
} else if (adult && !registeredEarly) {
    console.log(`Number ${raceNumber} your race starts at 11 am.`)
} else if (!adult) {
    console.log(`Number ${raceNumber} your race starts at 12:30pm`)
} else {
    console.log(`Number ${raceNumber} please see the registration desk.`)
};