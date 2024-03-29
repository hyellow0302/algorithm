function solution(a, b) {
  return a.reduce((acc, val, idx) => acc + val * b[idx], 0);
}

/*
    function solution(a, b) {
    let answer = 0;
    
    for(let i = 0 ; i < a.length ; i++) answer += a[i]*b[i]
    
    return answer;
}
 */
