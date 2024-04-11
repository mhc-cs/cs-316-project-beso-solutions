import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const options = () => {
    return ["27", "28", "29", "30", "31"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param option  The selected option
   */
  const optionSelection = (option: string): void => {
    setSelectOption(option);
  };

  return (
    <>
      
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectOption ? "Select Inseam: " + selectOption : "Select Inseam..."} </div>
        {showDropDown && (
          <DropDown
            options={options()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
