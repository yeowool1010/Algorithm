// [PGS] 날짜 비교하기
// 난이도 :  level 0
// 소요시간 : 12분
// 점수: +7

/*
문제
정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.

<제한사항>
date1의 길이 = date2의 길이 = 3
0 ≤ year ≤ 10,000
1 ≤ month ≤ 12
day는 month에 따라 가능한 날짜로 주어집니다.

입출력 예
date1	date2	result
[2021, 12, 28]	[2021, 12, 29]	1
[1024, 10, 24]	[1024, 10, 24]	0

입출력 예 설명
입출력 예 #1

date1이 date2보다 하루 앞서기 때문에 1을 return 합니다.
입출력 예 #2

date1과 date2는 날짜가 서로 같으므로 date1이 더 앞서는 날짜가 아닙니다. 따라서 0을 return 합니다.

*/

/*
< 의사코드 > 
date1이 date2보다 앞서는 날짜라면 1 아니면 0
newDate를 사용하는 것이 날짜비교는 가장 정확함

1. 들어오는 데이터 배열을 join으로 문자열로 만들어준다
2. replace와 정규식을 활용하여 콤마가 있는 곳을 -으로 모두 변경
3. 변형한 값을 date1Str과 date2Str로 선언하여 할당
4. 3항연산자로 비교하여 return 
*/

function solution(date1, date2) {
    let date1Str = new Date(date1.join().replace(/,/gi,"-") )
    let date2Str = new Date(date2.join().replace(/,/gi,"-") )
    return date1Str < date2Str ? 1 : 0
}
/*
 테스트 1 〉	통과 (0.19ms, 34.1MB)
테스트 2 〉	통과 (0.25ms, 34MB)
테스트 3 〉	통과 (138.57ms, 33.9MB)
테스트 4 〉	통과 (0.17ms, 34MB)
테스트 5 〉	통과 (0.19ms, 34.1MB)
테스트 6 〉	통과 (0.20ms, 34MB)
테스트 7 〉	통과 (12.82ms, 33.9MB)
테스트 8 〉	통과 (0.20ms, 34MB)
테스트 9 〉	통과 (0.18ms, 34.1MB)
테스트 10 〉	통과 (0.23ms, 33.9MB)
테스트 11 〉	통과 (0.24ms, 33.9MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
테스트 13 〉	통과 (0.21ms, 34.1MB)
테스트 14 〉	통과 (0.22ms, 34MB)
테스트 15 〉	통과 (0.17ms, 33.7MB)
*/

function solution(date1, date2) {
    let date1Str = new Date(date1.join().replace(/,/gi,"-") )
    let date2Str = new Date(date2.join().replace(/,/gi,"-") )

    if(date1Str < date2Str) {
        return 1
    } else {
        return 0
    }
}

/*
테스트 1 〉	통과 (0.28ms, 34MB)
테스트 2 〉	통과 (2.98ms, 34MB)
테스트 3 〉	통과 (4.87ms, 34MB)
테스트 4 〉	통과 (3.82ms, 33.9MB)
테스트 5 〉	통과 (0.20ms, 34.1MB)
테스트 6 〉	통과 (0.21ms, 34MB)
테스트 7 〉	통과 (0.20ms, 34MB)
테스트 8 〉	통과 (3.52ms, 33.9MB)
테스트 9 〉	통과 (0.21ms, 33.9MB)
테스트 10 〉	통과 (0.22ms, 33.9MB)
테스트 11 〉	통과 (0.20ms, 34MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	통과 (0.19ms, 33.9MB)
테스트 14 〉	통과 (0.28ms, 34MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
*/