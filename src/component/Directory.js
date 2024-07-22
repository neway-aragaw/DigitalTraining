import React, { useState } from 'react';
import './Directory.css'; // Import the CSS file

function Directory() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedOption(''); // Reset the selected option when the category changes
    setShowContent(false); // Hide content when category changes
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowButtonClick = () => {
    setShowContent(true);
  };

  const foodLocations = {
    'starbucks': 'D1',
    'chipotle': 'A/B Food Court',
    'chickFilA': 'A/B Food Court',
    'arbys': 'A/B Food Court',
    'subway': 'B7',
    'potbelly': 'A8',
    'Qdoba': 'C3',
    'Cinnabon': 'A7, B5',
    'Dunkin Donuts': 'Main Near Concourse C, D10, B8',
    'Einstein Bros Bagels': 'C5',
    'Farmer\'s Market': 'Across from B7',
    'Firkin & Flyer': 'B/C Connector',
    'Flying Dog Tap House': 'A/B Food Court',
    'Gachi House of Sushi': 'A8',
    'Gachi Sushi Grab & Go': 'B6',
    'Harbor Grille': 'C8',
    'Jamba Juice': 'A/B Food Court',
    'La Cocina Mexicana': 'D22',
    'Ledo Pizza': 'B3, C',
    'Leeann Chin': 'A/B Food Court',
    'Martini': 'A/B Food Court',
    'Mayorga': 'A/B Food Court',
    'McDonald\'s': 'D21, A/B Food Court',
    'Miss Shirley\'s Cafe': 'A13',
    'Nalley Fresh': 'A/B Food Court',
    'Obrycki\'s Restaurant & Bar': 'B9',
    'Passports Bar & Grill': 'E1',
    'Phillip\'s Seafood Express': 'D12',
    'Pinkberry Yogurt': 'A/B Food Court',
    'R&R Seafood Bar': 'D1, A13',
    'Rita\'s Italian Ice': 'C1',
    'Silver Diner': 'A/B Food Court',
    'Sir Veza\'s': 'Main Near Concourse D',
    'Smoothie King': 'D5',
    'The Greene Turtle': 'D8',
    'Tony & Benny\'s New York Style Pizza': 'A8',
    'Zona Cocina': 'Not specified'
  };

  const shuttleLocations = {
    'daily': 'Doors 2, 8, 15, and 17',
    'rental-car': 'Doors 1, 9, and 15',
    'longTermA': 'Doors 2, 8, 15, and 17',
    'longTermB': 'Doors 2, 8, 15, and 17',
    'amtrakMARC': 'Doors 2, 8, 15, and 17',
    'taxi': 'Doors 5 and #',
    'uber': 'Doors 6, 8, and 12',
    'lyft': 'Doors 6, 8, and 12'
  };

  return (
    <div className="directory-container">
      <header className="directory-header">
        <h1>Welcome New Trainees!</h1>
        <p>This directory is designed to help you navigate the airport and find key resources during your training.</p>
      </header>
<br />
<br />
<br />
<br />
<br />
      <section className="search-container">
        <select className="search-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Search By...</option>
          <option value="shuttle">Shuttle</option>
          <option value="Food">Food & Beverage</option>
          <option value="office">Office Name</option>
        </select>

        {selectedCategory === 'shuttle' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Shuttle Type...</option>
            <option value="daily">Daily</option>
            <option value="rental-car">Rental Car</option>
            <option value="longTermA">Long Term A</option>
            <option value="longTermB">Long Term B</option>
            <option value="amtrakMARC">Amtrak/MARC</option>
            <option value="taxi">Taxi</option>
            <option value="uber">Uber</option>
            <option value="lyft">Lyft</option>
          </select>
        )}

        {selectedCategory === 'Food' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Food Option...</option>
            {Object.keys(foodLocations).map((food) => (
              <option key={food} value={food}>{food}</option>
            ))}
          </select>
        )}

        {selectedCategory === 'office' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Office...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        )}

        <button onClick={handleShowButtonClick}>Show</button>

        {showContent && selectedCategory === 'shuttle' && (
          <div className="locations">
            {selectedOption && shuttleLocations[selectedOption] && (
              <p>The shuttle pickup for {selectedOption} at BWI is located at {shuttleLocations[selectedOption]}.</p>
            )}
          </div>
        )}

        {showContent && selectedCategory === 'Food' && (
          <div className="locations">
            {selectedOption && foodLocations[selectedOption] && (
              <p>{selectedOption} is located in {foodLocations[selectedOption]}</p>
            )}
          </div>
        )}

      </section>

    </div>
  );
}

export default Directory;
