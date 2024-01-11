function solution(str1, str2) {
    var answer = 0;
    var arrStr1 = [];
    var arrStr2 = [];
    let data = [];
    let target = [];
    let count = 0;
    let dataLen = 0;
    let eng = /^[a-zA-Z]*$/; 
    
    
    str1 = str1.toUpperCase().split('')
    str2 = str2.toUpperCase().split('')
    // console.log(str1, str2)
    
    for(let i=0; i<str1.length-1 ; i++){
        if(eng.test(str1[i]) == false ||eng.test(str1[i+1]) == false){
            continue;
        }
        arrStr1.push(str1[i]+str1[i+1])
    }
    for(let i=0; i<str2.length-1 ; i++){
        if(eng.test(str2[i]) == false ||eng.test(str2[i+1]) == false){
            continue;
        }
        arrStr2.push(str2[i]+str2[i+1])
    }
    console.log(arrStr1, arrStr2)
    
    if(arrStr1.length >= arrStr2.length){
        data = arrStr2.slice('')
        target = arrStr1.slice('')      
    }
    else{
        data = arrStr1.slice('')
        target = arrStr2.slice('')
    }
    
    dataLen = data.length
    console.log(data, target)
    
    while(data.length !=0){
        let item = data.shift()
        // console.log(item)
        if(target.includes(item)){
            count ++;
            console.log(item, "은 교집합입니다.", count)
        }
        
    }
    if(count == 0 || dataLen == 0) answer = 65536
    else if(count == dataLen){
        console.log("완벽히 소속됩니다.")
        console.log(dataLen, target.length)
        answer = parseInt(dataLen/target.length *65536)
    }
    else{
        console.log("자카드 유사도 계산중...")
        data = arrStr1.concat(arrStr2)
        console.log(arrStr1, arrStr2, data)
        const set = new Set(data)
        console.log(count, set.size)
        
        answer = parseInt(count/set.size *65536)
    }
    
    return answer;
}