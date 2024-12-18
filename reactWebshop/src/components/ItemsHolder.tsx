import { useState, useEffect } from "react";
import axios from "axios";
import Item from './item.tsx';

function ItemsHolder({loggedIn}: any)
{
  const [data, setData] = useState<any[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null); 
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const CategoryChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };


  useEffect(() => {
    const jwt = localStorage.getItem('token');
   
    axios.get('https://api-kris13m-webshop-project.onrender.com/api/items/allitems', {
    headers: {Authorization: `Bearer ${jwt}`},params: {category: selectedCategory}}) 

      .then((response) => {
        setData(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError('data fetching failed');
        setLoading(false); 
      });
  }, [loggedIn, selectedCategory]);  

  
  if (loading) return <div>Loading...</div>;

 
  if (error) return <div>{error}</div>;


  return(
  <div>
    <label htmlFor="itemselector">Choose a category</label>
  <select id="itemselector" onChange={CategoryChanged}>
  <option value="all">all</option>
  <option value="household">household</option>
  <option value="clothing">clothing</option>
  <option value = "sports">sports</option>
  <option value="electronics">electronics</option>
  <option value="vehicles">vehicles</option>
</select>

    <div className="itemsholder">
      
          {data.map((item, index) => (
            <Item key={index} data={item} ></Item>
          ))}  
    </div>
    </div>

  );

}
export default ItemsHolder
