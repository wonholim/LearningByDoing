interface SumA {
    (a: number, b: number): number;
}
const sumA: SumA = (a, b) => {return a + b;};
console.log(sumA(1, 2));

type SumB = (a: number, b: number) => number;
const sumB: SumB = (a, b) => {return a + b;};
console.log(sumB(1, 2));

function fooA(a: number, b: number): number {return a + b;};

console.log(fooA(1, 2)); // ok
// fooA(1, 2, 3); // error
// fooA(1); // error

function fooB(a: number, b?: number): number {return a + (b ?? 2);};

console.log(fooB(1, 2)); // ok

// console.log(foo(1)); // 타입은 오류가 발생하지 않지만, 실행시에는 오류가 발생한다.
console.log(fooB(1)); // ok
// foo(1, 2, 3); // error

function fooC(a: number, b:number = 100): number {return a + b;};

console.log(fooC(1, 2));
console.log(fooC(1));

function fooD(a: number, ...nums: number[]): number {
    let totalOfNums: number = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}

const arr: number[] = [];
console.log(typeof arr);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);

console.log(fooD(1, ...[1, 2, 3]));

// 콜백 함수에서의 this
// class ClazzA {
//     a: number = 1;
//     go(): void {
//         const arr: number[] = [2, 3, 4];
//         arr.forEach(function (number: number) {
//             console.log(this.a + number); // 이 코드는 전역 객체나, undefined를 가리킬 수 있어서, 접근이 불가능하다.
//         });
//     }
// }
// console.log(new ClazzA().go());
// 화살표 함수
class ClazzB {
    a: number = 1;
    go(): void {
        const arr: number[] = [2, 3, 4];
        arr.forEach((number: number): void => {
            console.log(this.a + number);
        });
    }
}

new ClazzB().go();
