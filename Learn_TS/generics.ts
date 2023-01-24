// 1.<T>先声明后使用
function echo<T>(arg: T): T {
    return arg
}

const str: string = "hjy"
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]] as [U, T]
}

const result2 = ['hjy', 1111]
const result3 = swap(['hjy', 1111])

result3[1].length

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arr: number[] = [1, 2, 3, 5]
const arrs = echoWithArr(arr) 



// 2.泛型约束:通过extends进行约束
interface IEcho {
    length: number
}
function echoWithLength<T extends IEcho>(arg: T): T {
    console.log(arg.length)
    return arg
}

// 传入参数必须含length
const str2 = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 3, 5])




// 3.类和接口与泛型联合使用
class Queue<T> {
    private data: T[] = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift() as T
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)


// 接口的泛型
interface KeyPair<T, U> {
    key: T
    value: U
}

let kp1: KeyPair<number, string> = {key: 123, value: "hjy"}
let kp2: KeyPair<string, number> = {key: "小贝", value: 123}
let arr3: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a:T, b:T): T
}

function plus(a: number, b:number): number {
    return a + b
}

function connect(a: string, b: string): string {
    return a + b 
}
const a: IPlus<number> = plus
const c: IPlus<string> = connect

