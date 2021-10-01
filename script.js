function compute() {
  var princ = document.getElementById("principal");
  var rat = document.getElementById("rate");
  var principal = princ.value;
  var rate = rat.value;
  var years = document.getElementById("years").value;

  if (principal <= 0) {
    alert("Please enter the principal in positive value");
    princ.focus();
    return false;
  }

  if (rate <= 0) {
    alert("Please enter the rate in positive value");
    rat.focus();
    return false;
  } else {
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");

    result.innerHTML = `  <br />
                          <br />If you deposit <mark>${principal}</mark>,<br />
                          at an interest rate of <mark>${rate}</mark>,<br />
                          You will receive an amount of <mark>${interest}</mark>,<br />
                          in the year <mark>${year}</mark>`;
  }
}
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
window.onload = () => {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
};
