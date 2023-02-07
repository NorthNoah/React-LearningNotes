import { useContext } from "react";
import { TokenContext, UserContext } from "../context";

function useUserTokenContext() {
    const user = useContext(UserContext)
    const token = useContext(TokenContext)
    return [user, token]
}

export default useUserTokenContext