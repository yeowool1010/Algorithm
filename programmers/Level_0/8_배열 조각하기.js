// [PGS] 배열 조각하기
// 난이도 :  level 0
// 소요시간 : 20분
// 점수 : +3

/*
문제 설명
정수 배열 arr와 query가 주어집니다.

query를 순회하면서 다음 작업을 반복합니다.

짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
5 ≤ arr의 길이 ≤ 100,000
0 ≤ arr의 원소 ≤ 100
1 ≤ query의 길이 < min(50, arr의 길이 / 2)
query의 각 원소는 0보다 크거나 같고 남아있는 arr의 길이 보다 작습니다.
입출력 예
arr	query	result
[0, 1, 2, 3, 4, 5]	[4, 1, 2]	[1, 2, 3]
입출력 예 설명
입출력 예 #1

이번에 매번 처리할 query의 값과 처리 전후의 arr의 상태를 표로 나타내면 다음과 같습니다.
query의 값	query 처리 전	query 처리 후	비고
4	[0, 1, 2, 3, 4, 5]	[0, 1, 2, 3, 4]	0번 인덱스의 쿼리이므로 뒷부분을 자른다.
1	[0, 1, 2, 3, 4]	[1, 2, 3, 4]	1번 인덱스의 쿼리이므로 앞부분을 자른다.
2	[1, 2, 3, 4]	[1, 2, 3]	2번 인덱스의 쿼리이므로 뒷부분을 자른다.
따라서 [1, 2, 3]을 return 합니다.

*/

/*
< 의사코드 > 
query만큼 for문을 돌면서 arr배열을 splice로 구역을 정해 자른다
query[i]가 짝수일 경우query[i]부터 arr길이 끝까지 자른다
query[i]가 홀수일 경우arr의 0번인덱스 부터 query[i]번째 인덱스까지 자른다

*/

function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(query[i] % 2 === 0){
      answer.splice(query[i]+1, arr.length)
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}
/*

테스트 1
입력값 〉	[0, 1, 2, 3, 4, 5], [4, 1, 2]
기댓값 〉	[1, 2, 3]
실행 결과 〉	테스트를 통과하였습니다.

테스트 1 〉	실패 (1.30ms, 36.3MB)
테스트 2 〉	실패 (1.18ms, 35.6MB)
테스트 3 〉	실패 (0.47ms, 34.3MB)
테스트 4 〉	실패 (0.25ms, 33.9MB)
테스트 5 〉	실패 (0.56ms, 35.6MB)
테스트 6 〉	실패 (0.66ms, 35.9MB)
테스트 7 〉	실패 (1.45ms, 35.5MB)
테스트 8 〉	실패 (0.40ms, 34.5MB)
테스트 9 〉	실패 (0.53ms, 35.8MB)
테스트 10 〉	실패 (0.35ms, 33.8MB)
테스트 11 〉	실패 (0.17ms, 33.5MB)

*/

// 음.. 왜 실패일까

function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(query[i] % 2 === 0){
      answer.splice(query[i]+1)
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}

// 이것 또한 실패
// 테스트 1은 통과

// var arr = [1, 2, 3, 4, 5];
// var n = 3;
 
// arr.splice(arr.length - n);
// console.log(arr);
 
// /*
//     결과: [ 1, 2 ]
// */
// 참고

function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(query[i] % 2 === 0){
      answer.splice(query[i]+1, arr.length - (query[i]-1))
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}

function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(i % 2 === 0){
      answer.splice(query[i]+1, arr.length - (query[i]+1))
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}
/*
테스트 1 〉	통과 (1.27ms, 39.2MB)
테스트 2 〉	통과 (0.97ms, 35.7MB)
테스트 3 〉	통과 (0.33ms, 34.2MB)
테스트 4 〉	통과 (0.29ms, 33.9MB)
테스트 5 〉	통과 (0.68ms, 35.6MB)
테스트 6 〉	통과 (0.61ms, 36MB)
테스트 7 〉	통과 (0.97ms, 36MB)
테스트 8 〉	통과 (0.33ms, 34.5MB)
테스트 9 〉	통과 (0.81ms, 36MB)
테스트 10 〉	통과 (0.33ms, 33.9MB)
테스트 11 〉	통과 (0.18ms, 33.6MB)
*/

// 이거도 맞음.. 사실 맞는거였음.. 바보야..
// 괄호로 인덱스 그 자리 숫자가 아니라 인덱스 번호 그 잡채를 해줘야하는건데 문제를 잘못봄^^

function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(i % 2 === 0){
      answer.splice(query[i]+1)
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}
/*
테스트 1 〉	통과 (1.26ms, 39.2MB)
테스트 2 〉	통과 (0.77ms, 35.9MB)
테스트 3 〉	통과 (0.28ms, 34.3MB)
테스트 4 〉	통과 (0.25ms, 34MB)
테스트 5 〉	통과 (0.50ms, 35.6MB)
테스트 6 〉	통과 (0.59ms, 36MB)
테스트 7 〉	통과 (1.03ms, 36.1MB)
테스트 8 〉	통과 (0.37ms, 34.6MB)
테스트 9 〉	통과 (0.57ms, 36MB)
테스트 10 〉	통과 (0.26ms, 33.8MB)
테스트 11 〉	통과 (0.17ms, 33.6MB)
*/


function solution(arr, query) {
  let answer = arr
  for(let i = 0; i < query.length; i++) {
    if(i % 2 === 0){
      answer.splice(query[i]+1, arr.length)
    } else {
      answer.splice(0 , query[i])
    }
  }
  return answer;
}
/*
테스트 1 〉	통과 (1.40ms, 39.1MB)
테스트 2 〉	통과 (1.16ms, 35.9MB)
테스트 3 〉	통과 (0.33ms, 34.4MB)
테스트 4 〉	통과 (0.24ms, 33.9MB)
테스트 5 〉	통과 (0.52ms, 35.7MB)
테스트 6 〉	통과 (0.62ms, 36.1MB)
테스트 7 〉	통과 (1.11ms, 35.9MB)
테스트 8 〉	통과 (0.38ms, 34.5MB)
테스트 9 〉	통과 (0.60ms, 35.8MB)
테스트 10 〉	통과 (0.22ms, 33.8MB)
테스트 11 〉	통과 (0.19ms, 33.7MB)
*/