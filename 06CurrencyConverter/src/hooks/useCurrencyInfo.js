import{useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_USkwizag0RoqVzcShNsj1mhW4UOCfNh0SAQOkKIw/${currency}.json`
        )
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;