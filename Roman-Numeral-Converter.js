function convertToRoman(num) {
  var LengthOfNum = num.toString().length;
  var numString = num.toString();



  var ones  = '';
  var tens  = '';
  var hundreds  = '';
  var thousands = '';





  var output = '';
  var onesPlace = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tensPlace = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundredsPlace = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];
  var thousandsPlace = [ "", "M", "MM", "MMM"];
    if (LengthOfNum == 4)
    {
      thousands = thousandsPlace[numString.charAt(0)];
      hundreds = hundredsPlace[numString.charAt(1)];
      tens = tensPlace[numString.charAt(2)];
      ones = onesPlace[numString.charAt(3)];
    }
    if (LengthOfNum == 3)
    {
      hundreds = hundredsPlace[numString.charAt(0)];
      tens = tensPlace[numString.charAt(1)];
      ones = onesPlace[numString.charAt(2)];
    }
    if (LengthOfNum == 2)
    {
      tens = tensPlace[numString.charAt(0)];
      ones = onesPlace[numString.charAt(1)];
    }
    if (LengthOfNum == 1)
    { 
      ones = onesPlace[numString.charAt(0)];
    }
 

   /*switch (LengthOfNum) {
      case 4:
        output = thousandsPlace[numString.charAt(0)];
      case 3:
        output = hundredsPlace[numString.charAt(1)];
      case 2:
        output = tensPlace[numString.charAt(2)];
      case 1:
        output = onesPlace[numString.charAt(3)];
    }*/


  output = thousands + hundreds + tens + ones;
  return output;
}


console.log(convertToRoman(798));