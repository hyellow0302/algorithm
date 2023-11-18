function solution(phone_book) {
  var answer = true;

  phone_book.sort();

  outer: for (var i = 0; i < phone_book.length; i++) {
    inner: for (var j = i + 1; j < phone_book.length; j++) {
      state = phone_book[j].split(phone_book[i]);
      if (state[0] == "") {
        answer = false;
        break outer;
      }
    }
  }

  return answer;
}
