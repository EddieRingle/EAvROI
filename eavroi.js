var currency = $('#eavtitle div.price span.currency');
var price = $('a', currency).html().trim();
var dividend;
try {
  dividend = $('#nmp-stats div:first > span:last > span:first > a').html().trim();
} catch(e) {
  dividend = $('#nmp-stats div:nth-child(4) > span:last > span:first > a').html().trim();
}
var roi = dividend / price;
var roip = roi * 100;

var color;
if (roip >= 0.55) {
  color = "#308A24";
} else if (roip <= 0.25) {
  color = "#BD4231";
} else {
  color = "#000";
}
currency.append('<br/><span style="font-size: 12px;">Daily ROI: <span style="color:' + color + ';">' + roip.toFixed(2) + '%</span></span>');
