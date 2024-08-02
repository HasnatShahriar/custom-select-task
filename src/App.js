

import { useState } from 'react';
import './App.css';
import KzuiCustomSelect from './components/kzuiCustomSelect/KzuiCustomSelect';

function App() {
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const groupedOptions = [
    {
      label: 'Vegetables',
      options: [
        { label: 'Potato' },
        { label: 'Onion' },
        { label: 'Capsicum' },
        { label: 'Ginger' },
        { label: 'Turnip' },
        { label: 'Beetroot' },
      ]
    },
    {
      label: 'Fruits',
      options: [
        { label: 'Mango' },
        { label: 'Pineapple' },
        { label: 'Grape' },
        { label: 'Guava' },
        { label: 'Banana' },
      ]
    },
    {
      label: 'Dairy',
      options: [
        { label: 'Milk' },
        { label: 'Butter' },
        { label: 'Yogurt' },
        { label: 'Custard' },
        { label: 'Cheese' },
      ]
    }
  ];

  const handleChange = (selectedOptions) => {
    setSelectedCities(selectedOptions);
  };

  const handleMenuOpen = () => {
    console.log('Menu opened');
  };

  const handleSearch = (searchTerm) => {
    console.log('Search:', searchTerm);
    const newFilteredOptions = groupedOptions.map(group => ({
      label: group.label,
      options: group.options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    }));
    setFilteredOptions(newFilteredOptions);
  };

  const clearSelection = () => {
    setSelectedCities([]);
  };

  return (
    <div className='kzui-custom-select_main-container'>
      <h2>Grocery Items Selection</h2>

      <KzuiCustomSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={filteredOptions.length > 0 ? filteredOptions : groupedOptions}
        value={selectedCities}
        placeholder="Select Your Items"
        isGrouped={true}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
      />

      <div className='kzui-selected-items'>
        <h3>Selected Items:</h3>
        {selectedCities && selectedCities.length > 0 ? (
          <ul>
            {selectedCities.map((city, index) => (
              <li key={index}>{city.label}</li>
            ))}
          </ul>
        ) : (
          <p>No item selected.</p>
        )}
      </div>
      <button onClick={clearSelection} className='kzui-clear-button'>Clear Selection</button>
    </div>
  );
}

export default App;
