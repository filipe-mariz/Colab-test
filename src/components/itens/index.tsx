import { useState, useEffect } from 'react';
import { SelectorDiv } from './styles';
import api from '../../services/api';

interface People {
  name: string;
  email: number;
  city: string;
  address: string;
  company: string;
  type: string;
  image: string
}

const ViewPeople = () => {
  const [data, setData] = useState<People[]>([])

    const handleGettingPatientsData = async () => {
    try {
      const apiResponse = await api.get('/8ze17m0s?key=0OHZ-SLLG-VF1R-FY8G')
      if (apiResponse.data.results[0].Data) {
        setData(apiResponse.data.results[0].Data)
        console.log(apiResponse.data)
      }
    } catch (error) {
      console.log('Erro inesperado');
    }
  }

  useEffect(() => {
    handleGettingPatientsData();
  }, []);


  return (
   <>
      {data.map((product) => {
        return (
          <SelectorDiv>
            <label className="Name">{product.name} - {product.city}</label>
            <label className="Type">
              <strong>{product.type}</strong> at <strong>{product.company}</strong>
            </label> 
            <label className="Email">{product.email}</label>                       
            {/* <label className="City">{product.city}</label> */}
            <label className="Adress">Adress: {product.address}</label>
          </SelectorDiv>
        )
      })}
    </> 
    
  )

}

export default ViewPeople;