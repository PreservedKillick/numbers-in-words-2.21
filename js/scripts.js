var DigitConverter = function(digit) {
  var digitObject = {0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"};
  var twoDigitObjectExct = {10:"ten", 11:'eleven', 12:'twelve', 13:'thirteen', 15:'fifteen'};
  var twoDigitReg = [14, 16, 17, 18, 19];
  
   var digitLength = digit.toString().length;

  if (digitLength === 1) {
    return digitObject[digit];
  } else if (digitLength === 2) {
    if (twoDigitReg.indexOf(digit) !== -1) {
      var stringNumber = String(digit).charAt(1);
      var digitAsNumber = Number(stringNumber);
      //console.log(digitObject[digitAsNumber] + "teen");
      return (digitObject[digitAsNumber] + "teen");

    } else {
      switch(digit) {
        case 11:
        case 12:
        case 13:
        case 15:
          console.log(twoDigitObjectExct[digit]);
          return twoDigitObjectExct[digit];
        break;

        default: break;
      }  
    }
  }
};


/*var multiDigitConverter = function(digit) {
  switch(digit.length) {
    case '1':
      return singleDigitConverter(digit);
    break;

    case '2':
      if (digit.substr(1) === 0) {
        var dig1 = digit.substr(0,1);
        switch(dig1) {
          case 1: return 'ten'; break;
          case 2: return 'twenty'; break;
          case 3: return 'thirty'; break;
          case 4: return 'forty'; break;
          case 5: return 'fifty'; break;
          case 6: return 'sixty'; break;
          case 7: return 'seventy'; break;
          case 8: return 'eighty'; break;
          case 9: return 'ninety'; break;
          default: break;
        }
      } else {

      }
        }
      }


      switch(digit.substr(1)) {
        case 0: 10; break;

      }

  }*/

