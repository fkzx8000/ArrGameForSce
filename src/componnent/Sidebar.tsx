// קומפוננטה זו אחראית להציג את הבקרה הראשית: מצב עריכה, הוספת קוביות וייצוא היסטוריה
import React from "react";
import "../cssFiles/sidebar.css";

const Sidebar = ({
  isEditing,
  handleEditToggle,
  inputValue,
  setInputValue,
  handleAdd,
  numbers,
  fileName,
  setFileName,
  exportHistory,
}) => {
  return (
    <div className="sidebar">
      <h2>בקרה</h2>
      <button className="control-button" onClick={handleEditToggle}>
        {isEditing ? "סיום עריכה" : "ערוך"}
      </button>
      {isEditing && (
        <div className="edit-controls">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="הכנס מספר"
            max={10}
          />
          <button
            className="control-button"
            onClick={handleAdd}
            disabled={numbers.length >= 10}
          >
            הוסף
          </button>
        </div>
      )}
      <div className="export-controls">
        <input
          type="text"
          placeholder="שם קובץ"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button className="control-button" onClick={exportHistory}>
          ייצא לקובץ טקסט
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
