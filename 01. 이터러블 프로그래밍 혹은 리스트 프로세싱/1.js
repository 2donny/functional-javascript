// 함수형 프로그래밍과 JavaScript ES6+ 응용편

// 이터러블 프로그래밍 혹은 리스트 프로세싱 (Lisp)

// 1. 홀수 n개 더하기

function f1(limit, list) {
    let acc = 0;
    for (const a of list) {
        if (a % 2) {
            const b = a * a;
            acc += b;
            if (--limit == 0) break;
        }
    }   
    console.log(acc);
}
f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2. if를 filter로
// 3. 값 변화 후 변수 할당을 map으로
// 4. break를 take로
// 5. 축약 및 합산을 reduce로

