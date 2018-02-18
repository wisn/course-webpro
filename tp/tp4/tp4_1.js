/*! TP4_1JS
 * @package Web Programming Preliminary Test #4
 * @author  Wisnu Adi Nurcahyo
 * @license MIT License
 * @warning Don't copy and paste my fuckin work. Feel free to use this as
 *          reference for your own work.
*/

const set = elm => value => {
  elm.value = value;
};

const append = elm => value => {
  const current = parseInt(elm.value);

  elm.value = (current * 10) + value;
};

const equal = a => b => b;
const addition = a => b => a + b;
const division = a => b => a / b;
const subtraction = a => b => a - b;
const multiplication = a => b => a * b;

const operate = opr => pair => {
  const { first, second } = pair;
  const a = first;
  const b = second;

  return opr === '='
    ? equal (a) (b)
    : opr === '+'
      ? addition (a) (b)
      : opr === '/'
        ? division (a) (b)
        : opr === '-'
          ? subtraction (a) (b)
          : opr === 'X'
            ? multiplication (a) (b)
            : 0;
};
