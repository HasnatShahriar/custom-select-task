


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
    },

    {
      label: 'Meat',
      options: [
        { label: 'Chicken' },
        { label: 'Beef' },
        { label: 'Pork' },
        { label: 'Sausage' },
        { label: 'Bacon' },
      ]
    },
    {
      label: 'Fish & Seafood',
      options: [
        { label: 'Shrimp' },
        { label: 'Crab' },
        { label: 'Cod' },
        { label: 'Tuna' },
        { label: 'Salmon' },
      ]
    },
    {
      label: 'Deli',
      options: [
        { label: 'Cheese' },
        { label: 'Salami' },
        { label: 'Ham' },
        { label: 'Turkey' },
      ]
    },
    {
      label: 'Condiments & Spices',
      options: [
        { label: 'Black Pepper' },
        { label: 'Oregano' },
        { label: 'Cinnamon' },
        { label: 'Sugar' },
        { label: 'Olive Oil' },
        { label: 'Ketchup' },
        { label: 'Mayonnaise' },
      ]
    },
    {
      label: 'Snacks',
      options: [
        { label: 'Chips' },
        { label: 'Pretzels' },
        { label: 'Popcorn' },
        { label: 'Crackers' },
        { label: 'Nuts' },
      ]
    },
    {
      label: 'Bread & Bakery',
      options: [
        { label: 'Bread' },
        { label: 'Tortillas' },
        { label: 'Pies' },
        { label: 'Muffins' },
        { label: 'Bagels' },
        { label: 'Cookies' },
      ]
    },
    {
      label: 'Beverages',
      options: [
        { label: 'Coffee' },
        { label: 'Teabags' },
        { label: 'Milk' },
        { label: 'Juice' },
        { label: 'Soda' },
        { label: 'Beer' },
        { label: 'Wine' },
      ]
    },
    {
      label: 'Pasta, Rice & Cereal',
      options: [
        { label: 'Oats' },
        { label: 'Granola' },
        { label: 'Brown Rice' },
        { label: 'White Rice' },
        { label: 'Macaroni' },
        { label: 'Noodles' },
      ]
    },
    {
      label: 'Baking',
      options: [
        { label: 'Flour' },
        { label: 'Powdered Sugar' },
        { label: 'Baking Powder' },
        { label: 'Cocoa' },
      ]
    },
    {
      label: 'Frozen Foods',
      options: [
        { label: 'Pizza' },
        { label: 'Fish' },
        { label: 'Potatoes' },
        { label: 'Ready Meals' },
        { label: 'Ice Cream' },
      ]
    },
    {
      label: 'Personal Care',
      options: [
        { label: 'Shampoo' },
        { label: 'Conditioner' },
        { label: 'Deodorant' },
        { label: 'Toothpaste' },
        { label: 'Dental Floss' },
      ]
    },
    {
      label: 'Health Care',
      options: [
        { label: 'Saline' },
        { label: 'Band-Aid' },
        { label: 'Cleaning Alcohol' },
        { label: 'Pain Killers' },
        { label: 'Antacids' },
      ]
    },
    {
      label: 'Household & Cleaning Supplies',
      options: [
        { label: 'Laundry Detergent' },
        { label: 'Dish Soap' },
        { label: 'Dishwashing Liquid' },
        { label: 'Paper Towels' },
        { label: 'Tissues' },
        { label: 'Trash Bags' },
        { label: 'Aluminum Foil' },
        { label: 'Zip Bags' },
      ]
    },
    {
      label: 'Baby Items',
      options: [
        { label: 'Baby Food' },
        { label: 'Diapers' },
        { label: 'Wet Wipes' },
        { label: 'Lotion' },
      ]
    },
    {
      label: 'Pet Care',
      options: [
        { label: 'Pet Food' },
        { label: 'Kitty Litter' },
        { label: 'Chew Toys' },
        { label: 'Pet Treats' },
        { label: 'Pet Shampoo' },
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
