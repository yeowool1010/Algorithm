// [PGS] 옷가게 할인 받기
// 난이도 :  level 0

// 소요시간 : 1분
// 점수 : +2

/*
문제 설명
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

제한사항
10 ≤ price ≤ 1,000,000
price는 10원 단위로(1의 자리가 0) 주어집니다.
소수점 이하를 버린 정수를 return합니다.
입출력 예
price	result
150,000	142,500
580,000	464,000
입출력 예 설명
입출력 예 #1

150,000원에서 5%를 할인한 142,500원을 return 합니다.
입출력 예 #2

580,000원에서 20%를 할인한 464,000원을 return 합니다.
*/

/*
< 의사코드 > 

*/

function solution(price) {
  let answer = 0
  switch(price) {
    case price > 100000 : answer = price; break;
    case 100000 <= price < 300000 : answer = price - (price * 0.05) ; break;
    case 300000 <= price < 500000 : answer = price - (price * 0.1) ; break;
    case 500000 <= price : answer = price - (price * 0.2) ; break;
  }
  return Math.floor(answer);
}


/*

테스트 1
입력값 〉	150000
기댓값 〉	142500
실행 결과 〉	실행한 결괏값 0이 기댓값 142500과 다릅니다.
테스트 2
입력값 〉	580000
기댓값 〉	464000
실행 결과 〉	실행한 결괏값 0이 기댓값 464000과 다릅니다.
*/

function solution(price) {
  let answer = price
if(100000 <= price < 300000 ) {
    answer = price - (price * 0.05)
  } else if(300000 <= price < 500000) {
    answer = price - (price * 0.1)
  } else if(500000 <= price) {
    answer = price - (price * 0.2)
  }

  return Math.floor(answer);
}


/*

테스트 1
입력값 〉	150000
기댓값 〉	142500
실행 결과 〉	실행한 결괏값 0이 기댓값 142500과 다릅니다.
테스트 2
입력값 〉	580000
기댓값 〉	464000
실행 결과 〉	실행한 결괏값 0이 기댓값 464000과 다릅니다.
*/

function solution(price) {
  let answer = price
  // if(price > 100000) {
  //     answer = price
  // }
if(100000 <= price && price < 300000 ) {
    answer = price - (price * 0.05)
  } 
    if(300000 <= price && price  < 500000) {
    answer = price - (price * 0.1)
  } 
    if(500000 <= price) {
    answer = price - (price * 0.2)
  }

  return Math.floor(answer);
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 31.6MB)
테스트 7 〉	통과 (0.05ms, 31.7MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.3MB)
테스트 10 〉	통과 (0.04ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.3MB)
테스트 12 〉	통과 (0.04ms, 33.3MB)
테스트 13 〉	통과 (0.04ms, 33.4MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.04ms, 33.5MB)
테스트 16 〉	통과 (0.06ms, 33.4MB)
테스트 17 〉	통과 (0.06ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
테스트 19 〉	통과 (0.04ms, 33.4MB)
테스트 20 〉	통과 (0.05ms, 33.3MB)
*/

function solution(price) {
  let answer = price
  switch(price) {
    case 100000 <= price && price < 300000 : answer = price - (price * 0.05) ; break;
    case 300000 <= price && price  < 500000 : answer = price - (price * 0.1) ; break;
    case 500000 <= price : answer = price - (price * 0.2) ; break;
  }
  return Math.floor(answer);
}

/*
왜 스위치문에 안들어가는가?
테스트 1
입력값 〉	150000
기댓값 〉	142500
실행 결과 〉	실행한 결괏값 150000이 기댓값 142500과 다릅니다.
테스트 2
입력값 〉	580000
기댓값 〉	464000
실행 결과 〉	실행한 결괏값 580000이 기댓값 464000과 다릅니다.
*/

function solution(price) {

  let discount = 0
  100000 <= price && price < 300000 
  ? discount = 0.05 
  : 300000 <= price && price  < 500000
  ? discount = 0.1 
  : 500000 <= price 
  ?  discount = 0.2
  :null
 return Math.floor(price - (price * discount));

}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.4MB)
테스트 12 〉	통과 (0.04ms, 33.5MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.03ms, 33.4MB)
테스트 15 〉	통과 (0.04ms, 33.4MB)
테스트 16 〉	통과 (0.06ms, 33.5MB)
테스트 17 〉	통과 (0.04ms, 33.4MB)
테스트 18 〉	통과 (0.06ms, 33.5MB)
테스트 19 〉	통과 (0.04ms, 33.4MB)
테스트 20 〉	통과 (0.03ms, 33.4MB)
*/

function solution(price) {

  let discount = 0
  if(100000 <= price && price < 300000 ) {
    discount = 0.05 
  } 
    if(300000 <= price && price  < 500000) {
      discount = 0.1 
  } 
    if(500000 <= price) {
      discount = 0.2
  }
  
 return Math.floor(price - (price * discount));

}

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.6MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.03ms, 33.4MB)
테스트 11 〉	통과 (0.04ms, 33.4MB)
테스트 12 〉	통과 (0.03ms, 33.5MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.03ms, 33.5MB)
테스트 15 〉	통과 (0.04ms, 33.6MB)
테스트 16 〉	통과 (0.04ms, 33.4MB)
테스트 17 〉	통과 (0.03ms, 33.4MB)
테스트 18 〉	통과 (0.04ms, 33.4MB)
테스트 19 〉	통과 (0.04ms, 33.4MB)
테스트 20 〉	통과 (0.05ms, 33.5MB)
*/