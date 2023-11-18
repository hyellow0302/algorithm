function solution(phone_book) {
  var answer = true;

  phone_book.sort();

  outer: for (var i = 0; i < phone_book.length - 1; i++) {
    state = phone_book[i + 1].split(phone_book[i]);
    if (state[0] == "") {
      answer = false;
      break outer;
    }
  }

  return answer;
}
