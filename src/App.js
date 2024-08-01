


import { useState } from 'react';
import './App.css';
import KzuiCustomSelect from './components/kzuiCustomSelect/KzuiCustomSelect';

function App() {
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  // Original options grouped by country
  const groupedOptions = [
    {
      label: 'Bangladesh',
      options: [
        { label: 'Dhaka' },
        { label: 'Khulna' },
        { label: 'Mymensingh' },
        { label: 'Rajshahi' },
        { label: 'Chittagong' },
        { label: 'Sylhet' },
        { label: 'Barishal' },
        { label: 'Rangpur' },
      ]
    }
    ,
    {
      label: 'USA',
      options: [
        { label: 'New York' },
        { label: 'Los Angeles' },
        { label: 'Chicago' },
        { label: 'Houston' },
        { label: 'Phoenix' },
      ]
    },
    {
      label: 'Canada',
      options: [
        { label: 'Toronto' },
        { label: 'Vancouver' },
        { label: 'Montreal' },
        { label: 'Calgary' },
        { label: 'Ottawa' },
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
      <h2>Custom Select Component (City Selector)</h2>

      <KzuiCustomSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={filteredOptions.length > 0 ? filteredOptions : groupedOptions}
        value={selectedCities}
        placeholder="Select Your Cities"
        isGrouped={true}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
      />

      <button onClick={clearSelection} className='kzui-clear-button'>Clear Selection</button>

      <div className='kzui-selected-cities'>
        <h3>Selected Cities:</h3>
        {selectedCities && selectedCities.length > 0 ? (
          <ul>
            {selectedCities.map((city, index) => (
              <li key={index}>{city.label}</li>
            ))}
          </ul>
        ) : (
          <p>No cities selected.</p>
        )}
      </div>
    </div>
  );
}

export default App;
