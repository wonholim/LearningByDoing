
interface Ab {
    a: number;
    b: number;
}

function test(obj : Ab) {
    console.log(obj.a);
}

test({a: 1, b: 2});

interface Hi {
    hello(): void;
    bye(): void;
}

type Bye = {
    hello(): void;
    bye(): void;
}

class SayI implements Hi {
    hello(): void {
        console.log("hi");
    }
    bye(): void {
        console.log("bye");
    }
}

class SayT implements Bye {
    hello(): void {
        console.log("hi");
    }
    bye(): void {
        console.log("bye");
    }
}

const ab: SayI = new SayI();
ab.hello();
ab.bye();

const b: SayT = new SayT();
b.hello();
b.bye();

interface HiBye {
    hi: string;
    bye?: string;
}

const hi = {hi: 'hello'};

function foo(obj: HiBye): void {
    console.log(obj.hi);
}

foo(hi);

interface HiByeA {
    readonly hi: string;
    bye?: string;
}

const hiA = {hi: 'hello'};
// 이곳에서 정의한 hiA의 객체에서 hi속성의 값을 변경할 수 없다.
function fooA(obj: HiByeA): void {
    console.log(obj.hi);
}

fooA(hiA);

let arr: ReadonlyArray<number> = [1, 2, 3];

interface A {
    a?: string;
}

function a(obj: A) {

}

a({b: 'b'}); // error

interface A {
    a?: string;
    [b: string]: any;
}

// interface Add {
//     (operand1: number, operand2: number): number;
// }
//
// const cal: Add = (a: number, b: number): number => {
//     console.log(a + b);
//     return a + b;
// }
//
// cal(1, 2);

interface Cal {
    add(operand1: number, operand2: number): number;
    sub(operand1: number, operand2: number): number;
}

class Calculator implements Cal {
    add(operand1: number, operand2: number): number {
        return operand1 + operand2;
    }

    sub(operand1: number, operand2: number): number {
        return operand1 - operand2;
    }
}
const c: Calculator = new Calculator();
console.log(c.add(1, 2), c.sub(2, 3));

interface Add {
    add(operand1: number, operand2: number): number;
}
interface Sub {
    sub(operand1: number, operand2: number): number;
}

interface Cals extends Add, Sub {
    print(res: number): void;
}

class Calcul implements Cals {
    add(operand1: number, operand2: number): number {
        return operand1 + operand2;
    }

    sub(operand1: number, operand2: number): number {
        return operand1 - operand2;
    }
    print(res: number): void {
        console.log(res);
    }
}

const cc: Calcul = new Calcul();
cc.print(cc.add(1,2));
cc.print(cc.sub(1,2));

interface Add {
    add(operand1: number, operand2: number): number;
}
interface Sub {
    sub(operand1: number, operand2: number): number;
}

interface Cals {
    print(res: number): void;
}

class CalculA implements Cals, Add, Sub {
    add(operand1: number, operand2: number): number {
        return operand1 + operand2;
    }

    sub(operand1: number, operand2: number): number {
        return operand1 - operand2;
    }
    print(res: number): void {
        console.log(res);
    }
}

const ccc: CalculA = new CalculA();
ccc.print(ccc.add(1,2));
ccc.print(ccc.sub(1,2));

// 함수 타입이면서 객체 타입을 정의할 수 있는 인터페이스
interface Adder {
    (operand1: number, operand2: number): number;
    op: string;
    print(ans: number): void;
}

function add(): Adder {
    const tmpAdd = (function(a: number, b: number){return a + b;}) as Adder;
    tmpAdd.op = '+';
    tmpAdd.print = function(c: number) {console.log(c)};
    return tmpAdd;
}

const realAdd = add();
realAdd(1, 2);
console.log(realAdd.op);
realAdd.print(realAdd(1, 2));
