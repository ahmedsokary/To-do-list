
module.exports.date=date;//here i gave it the output of the module without() as not to activate it instantaneouslly
//i put it module.exports.date not module.exports only to be able to export more than 1 thing
function date(){

  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return today.toLocaleDateString("en-US", options);

}
