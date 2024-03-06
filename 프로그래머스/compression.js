function solution(msg) {
  const answer = [];

  const dictionary = {};
  let wordIdx = 1;

  for (let i = 65; i < 65 + 26; i++)
    dictionary[String.fromCharCode(i)] = wordIdx++;

  const msgs = msg.split("");
  let msgsIdx = 0;
  let msgString = "";

  while (msgs.length !== msgsIdx) {
    msgString = msgString.concat(msgs[msgsIdx]);

    if (dictionary[msgString]) {
      msgsIdx++;
    } else {
      answer.push(dictionary[msgString.slice(0, msgString.length - 1)]);
      dictionary[msgString] = wordIdx++;
      msgString = "";
    }

    if (msgs.length === msgsIdx) {
      answer.push(dictionary[msgString]);
    }
  }
  return answer;
}
