import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Contents'; // Ensure correct import path
import Footer from './Footer';
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')));

  const[newItem,setNewItem]=useState('')
  const[search,setsearch]=useState('')
  const addItem =(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const addNewItem ={ id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todolist",JSON.stringify(listItems))
  }
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("todolist", JSON.stringify(listItems));
    };

    const handleliRemove = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        localStorage.setItem("todolist", JSON.stringify(newItems));
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
            setSearch={setsearch}/>
            <Content
                items={items.filter(item =>(item.item).toLowerCase().includes(search.toLowerCase()))}
                handleCheck={handleCheck}
                handleliRemove={handleliRemove}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
