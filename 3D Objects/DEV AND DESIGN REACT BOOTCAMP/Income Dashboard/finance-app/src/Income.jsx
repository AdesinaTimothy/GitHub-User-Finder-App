import { useNavigate } from "react-router-dom"

export default function Income (){

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("fiat")}>Fiat Income</button>
            <button onClick={() => navigate("crypto")}>Crypto Income</button>
            <button onClick={() => navigate("total")}>Total Income</button>
        </div>
    )
}