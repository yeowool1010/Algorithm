// [PGS] 배열의 평균값
// 난이도 :  level 0

// 소요시간 : 2분
// 점수 : +1

/*
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
입출력 예
numbers	result
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0
입출력 예 설명
입출력 예 #1

numbers의 원소들의 평균 값은 5.5입니다.
입출력 예 #2

numbers의 원소들의 평균 값은 94.0입니다.
*/

/*
< 의사코드 > 
1. for문으로 순회하며 더하기
2. 모두 더한 값을 배열의 길이로 나누기
*/

function solution(numbers) {
  let answer = 0;
  for(let i =0; i < numbers.length; i++) {
      answer += numbers[i]
  }
  return answer / numbers.length;
}


/*

테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.3MB)
*/

