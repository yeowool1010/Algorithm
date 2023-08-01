// [PGS] 분수의 덧셈
// 난이도 :  level 0
// 소요시간 : 35분
// 점수 : +2

/*
문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 <numer1, denom1, numer2, denom2 < 1,000
입출력 예
numer1	denom1	numer2	denom2	result
1	2	3	4	[5, 4]
9	2	1	3	[29, 6]
입출력 예 설명
입출력 예 #1

1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
입출력 예 #2

9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

/*
< 의사코드 > 

denom1와 denom2가 같은지 확인
같지 않을 경우 두 수 곱하기 
만약 같지 않다면 numer1 * denom2 /    numer2 * denom1 하기
그리고 최대공약수를 구해서 두 수 나눠주기

같다면 [numer1 + numer2, denom1]


1. 최종result 빈배열 선언후 분자, 분모를 담을 변수를 선언한다.
2. if문으로 분모가 같다면 분자에는 두 개의 분자를 더해서 할당, 분모는 둘 중 아무 분모나 넣어준다
3. else에 분자에 분모1 * 분자2와 분모2 * 분자1을 각각 곱해서 더한 값을 할당하고 분모는 두 개의 분모를 곱해서 할당한다.
4. getGCD함수로 최대공약수를 구한다
5. 만약 최대공약수가 1이 아닐 경우 나누고 아니라면 그냥 그대로 분모 분자 return => 의미없는짓이었음을 깨달음

// 하나의 함수는 하나의 기능만 하는 것이 성능상 좋다는 교훈을 배움

getGCD를 밖에서 만들어서 안에서 호출하는 것과 solution함수 안에서 같은 for문을 돌리는 것은 엄청난 성능 차이가 있음

*/
// 최대공약수

let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }

  return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
  let result = []
  let Top = 0
  let Bottom = 0
  let resultGcd = 0

  if(denom1 === denom2) {
    Top = numer1 + numer2
    Bottom = denom1
    
  } else {
    Top = (numer1 * denom2) + (numer2 * denom1)
    Bottom = denom1 * denom2

  }
  resultGcd = getGCD(Top,Bottom)
  
  if(resultGcd !== 1) {
    result.push(Top / resultGcd)
    result.push(Bottom / resultGcd)
  } else {
    result.push(Top)
    result.push(Bottom)
  }
  return result
}
/*

테스트 1 〉	통과 (2.98ms, 36.6MB)
테스트 2 〉	통과 (0.25ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	실패 (0.07ms, 33.5MB)
테스트 6 〉	실패 (0.07ms, 33.6MB)
테스트 7 〉	통과 (3.55ms, 36.6MB)
테스트 8 〉	통과 (3.18ms, 36.6MB)
테스트 9 〉	통과 (4.05ms, 36.6MB)
테스트 10 〉	통과 (3.30ms, 36.6MB)
테스트 11 〉	통과 (0.05ms, 33.6MB)
테스트 12 〉	통과 (0.05ms, 33.5MB)
테스트 13 〉	실패 (0.08ms, 33.5MB)
테스트 14 〉	통과 (0.46ms, 33.6MB)
테스트 15 〉	통과 (0.59ms, 33.5MB)
*/
let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }

  return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
  let result = []
  let Top = 0
  let Bottom = 0
  let resultGcd = 0

  if(denom1 === denom2) {
    Top = numer1 + numer2
    Bottom = denom1
  } else {
    Top = (numer1 * denom2) + (numer2 * denom1)
    Bottom = denom1 * denom2
  }

  resultGcd = getGCD(Top,Bottom)
  
  if(resultGcd !== 1) {

    result.push(Top / resultGcd)
    result.push(Bottom / resultGcd)
  } else {
    result.push(Top)
    result.push(Bottom)
  }
  return result
}

/*
테스트 1 〉	통과 (2.59ms, 36.5MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.19ms, 33.6MB)
테스트 7 〉	통과 (2.19ms, 36.5MB)
테스트 8 〉	통과 (3.16ms, 36.6MB)
테스트 9 〉	통과 (2.95ms, 36.5MB)
테스트 10 〉	통과 (3.31ms, 36.5MB)
테스트 11 〉	통과 (0.07ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.34ms, 33.4MB)
테스트 15 〉	통과 (0.59ms, 33.5MB)
*/

let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }

  return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
  let result = []
  let Top = 0
  let Bottom = 0
  let resultGcd = 0

  if(denom1 === denom2) {
    Top = numer1 + numer2
    Bottom = denom1
  } else {
    Top = (numer1 * denom2) + (numer2 * denom1)
    Bottom = denom1 * denom2
  }

  resultGcd = getGCD(Top,Bottom)
  
  if(resultGcd !== 1) {
    result = [Top / resultGcd ,Bottom / resultGcd]
  } else {
    result = [Top, Bottom]
  }
  return result
}

/*
테스트 1 〉	통과 (2.60ms, 36.6MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.15ms, 33.5MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (2.18ms, 36.6MB)
테스트 8 〉	통과 (3.14ms, 36.7MB)
테스트 9 〉	통과 (5.07ms, 36.6MB)
테스트 10 〉	통과 (3.27ms, 36.5MB)
테스트 11 〉	통과 (0.08ms, 33.5MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.34ms, 33.5MB)
테스트 15 〉	통과 (0.35ms, 33.5MB)
*/

let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }

  return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
  let result = []
  let Top = 0
  let Bottom = 0
  let resultGcd = 0

  if(denom1 === denom2) {
    Top = numer1 + numer2
    Bottom = denom1
  } else {
    Top = (numer1 * denom2) + (numer2 * denom1)
    Bottom = denom1 * denom2
  }

  resultGcd = getGCD(Top,Bottom)
  
  result = [Top / resultGcd ,Bottom / resultGcd]
  return result
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (3.62ms, 36.6MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.11ms, 33.5MB)
테스트 5 〉	통과 (0.13ms, 33.5MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (2.25ms, 36.7MB)
테스트 8 〉	통과 (3.26ms, 36.6MB)
테스트 9 〉	통과 (2.85ms, 36.6MB)
테스트 10 〉	통과 (3.36ms, 36.6MB)
테스트 11 〉	통과 (0.12ms, 33.5MB)
테스트 12 〉	통과 (0.07ms, 33.6MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.59ms, 33.5MB)
테스트 15 〉	통과 (0.44ms, 33.6MB)
*/



function solution(numer1, denom1, numer2, denom2) {
  let result = []
  let Top = 0
  let Bottom = 0
  let gcd = 1;

  if(denom1 === denom2) {
    Top = numer1 + numer2
    Bottom = denom1
  } else {
    Top = (numer1 * denom2) + (numer2 * denom1)
    Bottom = denom1 * denom2
  }

  for(let i=2; i<=Math.min(Top, Bottom); i++){
    if(Top % i === 0 && Bottom % i === 0){
        gcd = i;
    }
}
  
  result = [Top / gcd ,Bottom / gcd]

  return result
}

/*
테스트 1 〉	통과 (36.58ms, 36.4MB)
테스트 2 〉	통과 (0.26ms, 33.4MB)
테스트 3 〉	통과 (0.25ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.30ms, 33.4MB)
테스트 7 〉	통과 (1.04ms, 33.4MB)
테스트 8 〉	통과 (3.62ms, 36.5MB)
테스트 9 〉	통과 (11.93ms, 36.5MB)
테스트 10 〉	통과 (4.98ms, 36.5MB)
테스트 11 〉	통과 (0.08ms, 33.6MB)
테스트 12 〉	통과 (0.06ms, 33.5MB)
테스트 13 〉	통과 (0.09ms, 33.4MB)
테스트 14 〉	통과 (0.34ms, 33.5MB)
테스트 15 〉	통과 (0.61ms, 33.6MB)
*/

