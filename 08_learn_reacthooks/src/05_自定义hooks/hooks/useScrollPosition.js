import { useEffect, useState } from "react"

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        function scrollHandler() {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    })
    return scrollPosition
}

export default useScrollPosition