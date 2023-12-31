// [PGS] 배열 두배 만들기
// 난이도 :  level 0
// 소요시간 : 2분
// 점수 : +1

/*
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
1 ≤ numbers의 길이 ≤ 1,000
입출력 예
numbers	result
[1, 2, 3, 4, 5]	[2, 4, 6, 8, 10]
[1, 2, 100, -99, 1, 2, 3]	[2, 4, 200, -198, 2, 4, 6]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.
입출력 예 #2

[1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.
*/

/*
< 의사코드 > 
for문으로 배열을 순회하면서 곱하기 2 한 값을 push한다
*/

function solution(numbers) {
  let answer = [];
  for(let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i]*2)
  }
  return answer;
}
/*
테스트 1 〉	통과 (0.04ms, 33.6MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.9MB)
테스트 7 〉	통과 (0.11ms, 33.7MB)
테스트 8 〉	통과 (0.12ms, 33.6MB)
테스트 9 〉	통과 (0.08ms, 33.6MB)
테스트 10 〉	통과 (0.09ms, 33.8MB)

*/

