const myInterval = setInterval(adderFunc, 100);

function adderFunc() {
  var annual = Number(document.getElementsByName("5urH45uOzZQ5sZfaRC08")[0].value);
  var quarter = Number(document.getElementsByName("gFpDPwgZbbLH54HoaR4H")[0].value);
  var month = Number(document.getElementsByName("J6EzsPVs3AVlpxTnhkgC")[0].value);
  var week = Number(document.getElementsByName("Ls19OFmpZFUA32xGoHac")[0].value);
  var random = Number(document.getElementsByName("ORqwJ5WQRQsRshrAJvkX")[0].value);
  var initial = Number(document.getElementsByName("gkRhOZYwm2ZPRYyPmFdq")[0].value);
  var total = (annual*3) + (quarter*12) + (month*36) + (week*156) + random + initial;
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  document.getElementById("total-contribution").innerText = USDollar.format(total);
  document.getElementsByName("UyOfXvinODfpfmr42qTP")[0].value = total;
  document.getElementsByName("UyOfXvinODfpfmr42qTP")[0].dispatchEvent(new Event("input", {
    bubbles: true
  }));
  document.querySelector("input[value='Annually']").addEventListener('click', clearFunc);
  document.querySelector("input[value='Quarterly']").addEventListener('click', clearFunc);
  document.querySelector("input[value='Monthly']").addEventListener('click', clearFunc);
  document.querySelector("input[value='Weekly']").addEventListener('click', clearFunc);
  document.querySelector("input[value='Non-traditional (RMD, Stocks, Bonds, assets, etc.)']").addEventListener('click', clearFunc);
}

function clearFunc() {
  document.getElementsByName("5urH45uOzZQ5sZfaRC08")[0].value = Number("");
  document.getElementsByName("gFpDPwgZbbLH54HoaR4H")[0].value = 0;
  document.getElementsByName("J6EzsPVs3AVlpxTnhkgC")[0].value = 0;
  document.getElementsByName("Ls19OFmpZFUA32xGoHac")[0].value = 0;
  document.getElementsByName("ORqwJ5WQRQsRshrAJvkX")[0].value = 0;
}
