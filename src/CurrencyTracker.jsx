import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CurrencyTracker = () => {

    const [cryptoData, setCryptoData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

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

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  }

  const filteredData = cryptoData.filter((crypto) => {
    return crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  })  

  return (
    <div className="container">

        <div>
        <h1>CryptoCurrency Price Tracking</h1>
        <input type="text" name="search" id="searchInput" value={searchTerm} placeholder="Search for a cryptocurrency..." onChange={handleInput} />
        </div>

       <table>
        <thead>
           <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>MarketCap</th>
            <th>MarketCapScore</th>
            <th>Price</th>
            <th>AvailableSupply</th>
            <th>TotalAvailableSupply</th>
           </tr>
        </thead>
              <tbody>
                {
                    filteredData.map((crypto) => {
                        return (
                          <tr key={crypto.id}>
                            <td>{crypto.rank}</td>
                            <div className="icons">
                              <img src={crypto.icon} alt={crypto.name} />
                              <td>{crypto.name}</td>
                            </div>
                            <td>{crypto.symbol}</td>
                            <td>{crypto.marketCap}</td>
                            <td>{crypto.marketCapScore}</td>
                            <td>{crypto.price}</td>
                            <td>{crypto.availableSupply}</td>
                            <td>{crypto.totalSupply}</td>
                          </tr>
                        );
                    })
                }
              </tbody>
       </table>

    </div>
  )
}

export default CurrencyTracker