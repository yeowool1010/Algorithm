// [PGS] 중복된 숫자 개수
// 난이도 :  level 0
// 소요시간 : 
// 점수 : 

/*
문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000
입출력 예
array	n	result
[1, 1, 2, 3, 4, 5]	1	2
[0, 2, 3, 4]	1	0

입출력 예 설명
입출력 예 #1

[1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.
입출력 예 #2

[0, 2, 3, 4] 에는 1이 0개 있습니다.

*/

/*
< 의사코드 > 
for 문으로 돌면서 if문으로 조건을 준다
if문 안에서 해당 요소를 answer에 push
answer의 길이를 return

*/

function solution(array, n) {
    let answer = [];
    for(let i=0;i>array.length;+1){
      if(array[i] == n){
         answer.push(array[i])
      }
    }
    return answer.length;
}
/*

테스트 1
입력값 〉	[1, 1, 2, 3, 4, 5], 1
기댓값 〉	2
실행 결과 〉	실행한 결괏값 0이 기댓값 2과 다릅니다.
테스트 2
입력값 〉	[0, 2, 3, 4], 1
기댓값 〉	0
실행 결과 〉	테스트를 통과하였습니다.
*/

function solution(array, n) {
    let answer = []
    for(let i = 0; i < array.length ; i++){
      if(array[i] == n){
         answer.push(array[i])
      }
    }
    return answer.length;
}

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.31ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
*/