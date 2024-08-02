# Custom Select Component (Grocery Item Selection)

## Project Overview
This project includes a custom select component built with React and styled with vanilla CSS. The component offers features such as clearable options, search functionality, grouped options, and multi-select support.

## Live Site
Check out the live site [here](https://grocery-item-selection.netlify.app/)

## Features
**Custom Select Component (React):**
- Clearable options
- Searchable options
- Grouped options
- Multi-select capabilities

## Project Structure
├── src
│ ├── App.js
│ ├── components
│ │ ├── kzuiCustomSelect
│ │ │ ├── KzuiCustomSelect.jsx
│ │ │ ├── KzuiCustomSelect.css
├── README.md

## Installation
To get the project up and running locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/HasnatShahriar/custom-select-task.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd custom-select-task
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

## Usage
Once the development server is running, you can view the project in your browser at `http://localhost:3000`.

## Component Details

This custom select component provides the following props:
- **`isClearable`** (boolean): Determines if the selected options can be cleared.
- **`isSearchable`** (boolean): Enables searching within the options.
- **`isDisabled`** (boolean): Disables the select component if set to true.
- **`options`** (array): The list of options to display, which can be grouped.
- **`value`** (array): The currently selected options.
- **`placeholder`** (string): The placeholder text when no option is selected.
- **`isGrouped`** (boolean): Specifies if the options are grouped.
- **`isMulti`** (boolean): Allows multiple options to be selected if set to true.
- **`onChangeHandler`** (function): Callback function to handle changes in selected options.
- **`onMenuOpen`** (function): Callback function to handle the event when the menu is opened.
- **`onSearchHandler`** (function): Callback function to handle the search input.