import React, { useState } from 'react';

export default function App() {
  const initialPeople = [
    { id: 1, name: 'Jack', age: 21, sex: 'male' },
    { id: 2, name: 'Jill', age: 22, sex: 'female' },
    { id: 3, name: 'John', age: 23, sex: 'male' },
    { id: 4, name: 'Jane', age: 24, sex: 'female' },
    { id: 5, name: 'Tom', age: 25, sex: 'male' },
    { id: 6, name: 'Lucy', age: 26, sex: 'female' },
    { id: 7, name: 'Mike', age: 27, sex: 'male' },
    { id: 8, name: 'Sue', age: 28, sex: 'female' },
    { id: 9, name: 'Chris', age: 29, sex: 'male' },
    { id: 10, name: 'Anna', age: 30, sex: 'female' }
  ];

  const [people, setPeople] = useState(initialPeople);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: ''
  });
  const [editingId, setEditingId] = useState(null);

  // on type change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // handle new person
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      // Update existing person
      const updatedPeople = people.map((person) =>
        person.id === editingId ? { ...person, ...formData } : person
      );
      setPeople(updatedPeople);
      setEditingId(null);
    } else {
      // Add new person
      const newPerson = {
        id: people.length + 1,
        ...formData
      };
      setPeople([...people, newPerson]);
    }
    setFormData({ name: '', age: '', sex: '' }); // Reset form data after submit
  };

  //get current edit object
  const startEditing = (id) => {
    const personToEdit = people.find((person) => person.id === id);
    setFormData(personToEdit);
    setEditingId(id);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({ name: '', age: '', sex: '' }); // Clear form data on cancel
  };

  const deletePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {editingId === person.id ? (
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                <select name="sex" value={formData.sex} onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button type="submit">Update</button>
                <button type="button" onClick={cancelEditing}>Cancel</button>
              </form>
            ) : (
              <>
                {person.name}, Age: {person.age}, Sex: {person.sex}
                <button onClick={() => startEditing(person.id)}>Edit</button>
                <button onClick={() => deletePerson(person.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">{editingId !== null ? 'Update' : 'Add'}</button>
        {editingId !== null && <button type="button" onClick={cancelEditing}>Cancel</button>}
      </form>
    </div>
  );
}
