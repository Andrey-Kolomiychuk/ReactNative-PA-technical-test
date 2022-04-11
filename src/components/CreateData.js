import React, { useEffect, useState } from 'react';

export const createData = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getData = async () => {
       try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    const newData=data.map(function(ele){
         
      return {...ele, booked:false, diselike: false};
    })
  
    return (
      newData
    )
  
  }