import { useEffect, useState } from "react"

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [
        data, setData,
    ]

}
export default useData;