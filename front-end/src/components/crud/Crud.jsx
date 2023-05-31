import { useState, useEffect } from 'react';
import axios from 'axios';

function Crud() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createItem = async () => {
    try {
      await axios.post('/api/items', { name: newItem });
      setNewItem('');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>CRUD </h1>
      
      {/* Afficher la liste des éléments */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      
      {/* Ajouter un nouvel élément */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={createItem}>Ajouter</button>
    </div>
  );
};

export default Crud;
