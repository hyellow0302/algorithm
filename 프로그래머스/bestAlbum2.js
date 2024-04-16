function solution(genres, plays) {
  var answer = [];
  let genresList = new Map();
  let playNumber = new Map();
  let idxList = [];

  genres.forEach((genre, idx) => {
    if (genresList.has(genre)) {
      genresList.set(genre, genresList.get(genre) + plays[idx]);
      playNumber.set(genre, [...playNumber.get(genre), plays[idx]]);
    } else {
      genresList.set(genre, plays[idx]);
      playNumber.set(genre, [plays[idx]]);
    }
    idxList.push(`${genre}-${plays[idx]}`, idx);
  });

  genresList = Array.from(genresList).sort((a, b) => b[1] - a[1]);
  playNumber = Array.from(playNumber).map((arr) => [
    arr[0],
    arr[1].sort((a, b) => b - a),
  ]);

  for (let i = 0; i < genresList.length; i++) {
    let nowGenre = genresList[i][0];
    let nowPlay = [];
    let nowIdx = 0;
    for (let j = 0; j < playNumber.length; j++) {
      if (playNumber[j][0] == nowGenre) {
        nowPlay = playNumber[j][1];
        break;
      }
    }
    for (let k = 0; k < 2; k++) {
      nowIdx = idxList.splice(idxList.indexOf(nowGenre + "-" + nowPlay[k]), 2);
      answer.push(nowIdx[1]);
      if (nowPlay.length == 1) break;
    }
  }
  return answer;
}
