import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(async() => {
  const res= await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).json()

    await setData(res[currency]);
}, [currency])
console.log(data);
return data;

}

export default useCurrencyInfo