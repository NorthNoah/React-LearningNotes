import { useEffect, useState } from "react";

function useLocalStorage(key) {
    // data即为localStorage指定key的value
    // useState中可以传入函数，作为初始化值
    const [data, setData] = useState(() => {
        const item = localStorage.getItem(key)
        // 当value为空时，返回空字符串
        if(!item) {
            return ""
        }
        // 转为Json对象
        return JSON.parse(item)
    })
    
    // data发生改变后，自动改变localStorage的值
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(data))
    }, [data])

    return [data, setData]
}

export default useLocalStorage