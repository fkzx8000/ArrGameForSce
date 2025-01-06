// קומפוננטה זו אחראית להציג את המבנה המרכזי: הקוביות והיסטוריית החילופים
import React from "react";
import History from "./History";
import "../cssFiles/main.css";

const Main = ({
  numbers,
  handleClick,
  selectedIndex,
  isEditing,
  handleRemove,
  history,
}) => {
  return (
    <div className="main">
      {/* אזור הצגת הקוביות */}
      <div className="square">
        <div className="dynamic-container">
          {numbers
            .slice() // יוצרים עותק של המערך
            .reverse() // הופכים את הסדר
            .map((num, index) => (
              <div
                key={index}
                className={`box ${
                  selectedIndex === numbers.length - 1 - index ? "selected" : ""
                }`}
                onClick={() =>
                  handleClick(numbers.length - 1 - index) // מתאימים את האינדקס לחילוף
                }
              >
                {num}
                {isEditing && (
                  <button
                    className="remove-button"
                    onClick={(e) => {
                      e.stopPropagation(); // מונע לחיצה על הקוביה עצמה
                      handleRemove(numbers.length - 1 - index); // מתאימים את האינדקס להסרה
                    }}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* אזור הצגת היסטוריית הפעולות */}
      <History history={history} />
    </div>
  );
};

export default Main;
