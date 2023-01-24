// 类型别名
type PlusType = (x: number, y:number) => number
function sum(x: number, y: number): number {
    return x + y
}

const sum2: PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

function getLength(input: string | number) : number {
    const str = input as string
    // if (str.length) {
    //     return str.length
    // } else {
    //     return input.toString().length
    // }

    // 断言的快捷写法
    if((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

