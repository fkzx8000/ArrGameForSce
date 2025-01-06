// קומפוננטת השורש האחראית לנהל את המצב הכללי של האפליקציה ולהציג את המבנה הראשי
import React, { useState } from "react";
import Sidebar from "./componnent/Sidebar";
import Main from "./componnent/Main";

import "./cssFiles/App.css";


const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // מערך הקוביות
  const [selectedIndex, setSelectedIndex] = useState(null); // אינדקס הקוביה הנבחרת
  const [history, setHistory] = useState([]); // היסטוריית החילופים
  const [isEditing, setIsEditing] = useState(false); // מצב עריכה
  const [inputValue, setInputValue] = useState(""); // ערך הקלט להוספה
  const [fileName, setFileName] = useState("היסטוריה.txt"); // שם הקובץ לייצוא

  const handleClick = (index) => {
    if (isEditing) return; // חסום תנועה בזמן עריכה
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      if (selectedIndex !== index) {
        const newNumbers = [...numbers];
        [newNumbers[selectedIndex], newNumbers[index]] = [
          newNumbers[index],
          newNumbers[selectedIndex],
        ];
        setNumbers(newNumbers);
        setHistory((prevHistory) => [
          ...prevHistory,
          {
            first: { value: numbers[selectedIndex], index: selectedIndex },
            second: { value: numbers[index], index: index },
          },
        ]);
      }
      setSelectedIndex(null);
    }
  };

  const handleAdd = () => {
    if (inputValue && numbers.length < 10) {
      setNumbers((prev) => [...prev, parseInt(inputValue)]);
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    setNumbers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      setHistory([]); // אפס את ההיסטוריה
      setSelectedIndex(null); // אפס בחירה
    }
  };

  const exportHistory = () => {
    const header = "צעד,קוביה ראשונה (ערך, אינדקס),קוביה שנייה (ערך, אינדקס)\n";
    const rows = history
      .map(
        (entry, idx) =>
          `${idx + 1},${entry.first.value} (אינדקס: ${entry.first.index + 1}),${
            entry.second.value
          } (אינדקס: ${entry.second.index + 1})`
      )
      .join("\n");
    const content = header + rows;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName.trim() || "היסטוריה.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">

      <Main
        numbers={numbers}
        handleClick={handleClick}
        selectedIndex={selectedIndex}
        isEditing={isEditing}
        handleRemove={handleRemove}
        history={history}
      />
            <Sidebar
        isEditing={isEditing}
        handleEditToggle={handleEditToggle}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
        numbers={numbers}
        fileName={fileName}
        setFileName={setFileName}
        exportHistory={exportHistory}
      />
    </div>
  );
};

export default App;
