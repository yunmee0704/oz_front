/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/* 💡문제 출제
 *
 * 기러기 토마토 스위스 인도인 별똥별은 앞으로 읽어도 뒤로 읽어도 말이 같습니다.
 * 이것을 팰린드롬이라고 하는데 앞에서부터 읽어도 뒤에서부터 읽어도 같은 문자열을 의미합니다.
 * str: 팰린드롬 여부를 확인할 문자열 (1 이상 100 이하의 길이)
 * 주어진 문자열이 팰린드롬이면 true, 그렇지 않으면 false를 반환하세요.
 *
 *
 * ❗️ 제한 조건 ❗️
 * 문자열을 정제할 때 알파벳 이외의 문자는 제거하세요.
 * 함수는 대소문자를 구분하지 않아야 합니다.
 *
 * 👉 예시 결과
 * "A man, a plan, a canal: Panama" // true
 * "race a car" // false
 */

function question(str) {
    // 여기에서 코드 작성해주세요!
    let result;
    var str_2 = str.replace(/(\s*)(\:*)(\,*)(\?*)(\'*)/g, ''); //문자열에서 공백과 특수기호 제외
    var str_3 = str_2.split('');//문자열을 배열로 만든 후
    str_3.reverse();//반대로 바꿈
    var str_4 = str_3.join('');//다시 배열을 문자열로 변환함
    if(str_2.toUpperCase() == str_4.toUpperCase()){//문자열에서 공백과 특수기회를 제외한 str_2와 반대로 나열한 문자열 str_4를 전체 대문자로 바꾼후 비교
        result = true;
     }else{
        result = false;
     }
    
    
    return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [
        ['A man, a plan, a canal: Panama'],
        ['race a car'],
        ['Was it a car or a cat I saw?'],
        ["No 'x' in Nixon"],
        ['No lemon, no melon'],
        ['A Santa at NASA'],
        ['Palindrome example'],
    ],
    [true, false, true, true, true, true, false]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === (results[index] === true);
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}