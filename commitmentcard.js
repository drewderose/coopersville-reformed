const myInterval = setInterval(adderFunc, 100);

function adderFunc() {
  var annual = document.getElementsByName("5urH45uOzZQ5sZfaRC08")[0].value;
  var quarter = document.getElementsByName("gFpDPwgZbbLH54HoaR4H")[0].value;
  var month = document.getElementsByName("J6EzsPVs3AVlpxTnhkgC")[0].value;
  var week = document.getElementsByName("Ls19OFmpZFUA32xGoHac")[0].value;
  var random = document.getElementsByName("ORqwJ5WQRQsRshrAJvkX")[0].value;
  var initial = document.getElementsByName("gkRhOZYwm2ZPRYyPmFdq")[0].value;
  var monies = annual + quarter + month + week + random + initial;
  var total = "$" & monies;
  document.getElementById("total-contribution")[0].innerText = total;
  document.getElementsByName("UyOfXvinODfpfmr42qTP")[0].value = monies;
  document.getElementsByName("UyOfXvinODfpfmr42qTP")[0].value;
}
