// inputタグのHTML要素を変数'display'に代入する。
let display = document.querySelector('#calc-display');

function clickBtn(num) {
  if (display.value == '0' || display.value == '00') {
    // クリックされたボタンのvalueをinputタグのvalueに代入する。
    display.value = num;
    return;
  } 
  // 変数'last_number'にinputタグのvalueに入っている末尾1桁の値を代入する。
  let last_number = display.value.slice(-1);
  // inputタグのvalueに入っている末尾1桁の値が演算子、かつ、クリックされたボタンのvalueが演算子の値が入っている場合
  if ((last_number == '+' || last_number == '-' || last_number == '*' || last_number == '/' || last_number == '.') && (num == '+' || num == '-' || num == '*' || num == '/' || num == '.')) {
    display.value = display.value.slice(0, -1) + num;
  } else {
    display.value = display.value + num;
  }
}

function allClear() {
  display.value = '0';
}

function calc() {
  display.value = eval(display.value);
}
 