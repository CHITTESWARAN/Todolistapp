import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Contents'; // Ensure correct import path
import Footer from './Footer';
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
    const API_URL="http://localhost:3500/items";
    const [items, setItems] = useState([]);
    const[newItem,setNewItem]=useState('')
    const[search,setSearch]=useState('')
    const[fetchError,setfetchError]=useState(null)
    const[Isloading,setIsloading]=useState(true)

 
  useEffect(()=>{
    const fetchItems=async()=>
    {  try{const response = await fetch(API_URL);
        if(!response.ok) throw Error("Data not recived")
    const listItems =await response.json();
    setItems(listItems);
    setfetchError(null)
  }
  catch(err)
  
  {setfetchError(err.message)}
       finally{
        setIsloading(false)
       }}
  setTimeout(()=>{
    (async()=>await fetchItems())()},2000)
   },[])
  


  

  const addItem =(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewItem ={ id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
   
  }
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);

    };

    const handleliRemove = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
       
    };
    const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')

    }

    return (
        <div className="App">
            <Header title="Task Management" />
            <Additem
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}/>
            <Searchitem 
            search={search}
            setSearch={setSearch}/>
            <main>

                {Isloading&& <p> 
                loading items...</p>}
                {fetchError&& <p>{`Error:${fetchError}` 
                }</p>} 
            {!Isloading&& !fetchError&&<Content
               items={items.filter(item => item.item && item.item.toLowerCase().includes(search.toLowerCase()))}
             handleCheck={handleCheck}
           handleliRemove={handleliRemove}
/>
}
            </main>
            <Footer length={items.length} />
        </div>
    );
}


export default App;
