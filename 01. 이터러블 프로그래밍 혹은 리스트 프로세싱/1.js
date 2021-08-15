// 함수형 프로그래밍과 JavaScript ES6+ 응용편

// 이터러블 프로그래밍 혹은 리스트 프로세싱 (Lisp)

// 1. 홀수 n개 더하기 (Imperative programming)

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

// Iterable programming
// 2. if가 filter로 추상화된다.
// 3. 값 변화 후 변수 할당을 map으로
// 4. break를 take로
// 5. 축약 및 합산을 reduce로

function f2(limit, list) {
    _.go(list,
        L.filter(a => a % 2),
        L.map(a => a * a),
        L.take(limit),
        _.reduce(add),
        console.log);
}
f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.clear();