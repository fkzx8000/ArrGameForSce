### Arr Game For Students


# Sorting Visualization App

## Description

The **Sorting Visualization App** is a React-based web application designed to help students learn and understand different sorting algorithms interactively. By using an intuitive drag-and-drop interface, the app visually demonstrates the process of sorting and provides hands-on experience with array manipulation. The app also keeps track of each operation performed, helping users analyze the steps involved in sorting.

---

## Features

- **Dynamic Array Manipulation**:
  - Add or remove numbers to/from the array dynamically.
  - Real-time updates to the array layout.
- **Interactive Swapping**:
  - Select and swap elements to manually sort the array.
  - Visual feedback highlights the selected elements.
- **Edit Mode**:
  - Add numbers to the array (up to a maximum of 10 elements).
  - Remove unwanted numbers.
- **Sorting History**:
  - Tracks every swap operation performed by the user.
  - Displays detailed information, including the values and indices of swapped elements.
- **Export to Text File**:
  - Save the sorting history as a `.txt` file for further analysis.
- **Responsive Design**:
  - Works seamlessly on desktop and mobile devices.
  
---

## Purpose

This app is a teaching tool designed to assist students in learning **sorting algorithms**. It allows students to:

1. **Visualize Sorting**:
   - Understand the mechanics behind sorting by interacting directly with the array elements.
   
2. **Experiment with Sorting Logic**:
   - Perform sorting manually to grasp the thought process behind algorithms like **Bubble Sort**, **Insertion Sort**, etc.

3. **Track and Analyze**:
   - Use the built-in history feature to review the steps and improve their understanding of sorting patterns.

---

## How to Use

1. **Start the Application**:
   - Launch the app in a browser.
   - An array of numbers will be displayed in the center of the screen.

2. **Swapping Elements**:
   - Click on one element to select it.
   - Click on a second element to swap it with the first one.
   - Continue swapping to sort the array manually.

3. **Edit the Array**:
   - Click on the "Edit" button to enable editing mode.
   - Add new numbers (up to 10) or remove existing ones.

4. **View Sorting History**:
   - Check the "Sorting History" section to see each swap you performed.
   - Use the export feature to save the history to a `.txt` file.

5. **Experiment with Sorting Techniques**:
   - Try to replicate different sorting algorithms manually and observe the steps.

---

## Technical Details

### Tech Stack

- **Frontend**: React, CSS (Flexbox for layout)
- **Language**: JavaScript
- **Build Tool**: Vite

### Folder Structure

```
src/
│
├── components/
│   ├── App.js         # Main application entry
│   ├── Sidebar.js     # Sidebar for controls and edit mode
│   ├── Main.js        # Main display for array and history
│   ├── History.js     # History display component
│
├── styles/
│   ├── global.css     # Global styles
│   ├── app.css        # Main app layout styles
│   ├── sidebar.css    # Sidebar-specific styles
│   ├── main.css       # Array and history styles
│
└── index.html         # Entry point
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fkzx8000/ArrGameForSce.git
   ```
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:5723
   ```

---

## Future Enhancements

- Add prebuilt sorting algorithm demonstrations (e.g., Bubble Sort, Selection Sort).
- Include algorithm complexity analysis (e.g., time and space complexity).
- Add step-by-step automatic sorting for better visualization.
- Support larger arrays and custom themes.

---

## License

This project is licensed under the MIT License. Feel free to fork, modify, and use it for educational purposes.

---

## Contributing

Contributions are welcome! If you'd like to add new features or improve the app, please submit a pull request.

---

## Contact

For questions or suggestions, feel free to reach out:

- **Email**: seller4500@gmail.com
- **GitHub**: [fkzx8000](https://fkzx8000/ArrGameForSce)
