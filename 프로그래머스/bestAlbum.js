function solution(genres, plays) {
  var answer = [];
  var addPlays = {};
  var topGenres = [];
  var bestGenres = {};
  var bestPlays = {};
  var bestSong = [];

  /* 1. 장르별로 누가 제일 합산이 큰지 계산 */
  for (let i = 0; i < genres.length; i++) {
    let keys = genres[i];
    if (Object.keys(addPlays).includes(genres[i])) {
      // console.log(genres[i]," 이미 저장되어있는 장르네요. ",plays[i],"추가")
      addPlays[keys] += plays[i];
    } else {
      // console.log(genres[i]," 처음 계산하는 장르네요. ",plays[i],"추가")
      addPlays[keys] = plays[i];
    }
    // console.log(addPlays)
  }

  // 장르:합산값, 합산값기준으로 정렬
  let sorted = Object.entries(addPlays).sort((a, b) => b[1] - a[1]);
  // console.log(sorted)

  // 가장 많이 들은 장르를 topGenres로 지정
  for (let element of sorted) {
    topGenres.push(element[0]);
  }
  // console.log(topGenres)

  /* top장르별로 최대 2개씩만 가장 큰거 answer에 집어넣기 */
  for (let k = 0; k < topGenres.length; k++) {
    bestSong = [];
    for (let l = 0; l < genres.length; l++) {
      // console.log("현재 탑 장르는 ", topGenres[k])
      if (topGenres[k] == genres[l]) {
        // console.log("현재 탑 장르 들어갑니다.", genres[l])
        bestSong.push(plays[l]);
      }
    }
    // console.log(bestSong)
    bestSong.sort(function (a, b) {
      return b - a;
    });
    if (bestSong.length > 2) {
      bestSong.splice(2);
    }

    for (let n = 0; n < bestSong.length; n++) {
      answer.push(bestSong[n]);
    }
    // console.log(answer)
  }

  /* 이제 answer값과 plays값의 idx를 비교해서 값 출력 */
  for (let m = 0; m < answer.length; m++) {
    let idx = plays.indexOf(answer[m]);
    answer[m] = idx;
    plays[idx] = 0;
  }
  // console.log(answer)

  return answer;
}
