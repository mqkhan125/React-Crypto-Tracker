import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CurrencyTracker = () => {

    const [cryptoData, setCryptoData] = useState([])

    // fetching data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://openapiv1.coinstats.app/coins?currency=INR",
        {
          headers: {
            "X-API-KEY": "Gm/P71jrKs5C15AjnVnZ8VIyqzPJO+JSr02v8ttV2D0=",
          },
        },
      );
      console.log(response.data.result);
      setCryptoData(response.data.result);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);    


  return (
    <div className="container">

        <div>
        <h1>CryptoCurrency Price Tracking</h1>
        <input type="text" placeholder="Search for a cryptocurrency..." />
        </div>

       <table>
        <thead>
           <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Price</th>
           </tr>
        </thead>
              <tbody>
                {
                    cryptoData.map((crypto) => {
                        return (
                            <tr key={crypto.id}>
                                <td>{crypto.rank}</td>
                                <td>{crypto.name}</td>
                                <td>{crypto.symbol}</td>
                                <td>{crypto.marketCap}</td>
                                <td>{crypto.price}</td>
                                <td>{crypto.availableSupply}</td>
                            </tr>
                        )
                    })
                }
              </tbody>
       </table>

    </div>
  )
}

export default CurrencyTracker