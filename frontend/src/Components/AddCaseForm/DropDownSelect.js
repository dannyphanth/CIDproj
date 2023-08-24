import React from 'react';
import Select from 'react-select';

function DropDownSelect({ options, selectedOption, onSelectedOptionChange, placeHolder }) {
    const handleOptionChange = (selected) => {
        if (selected) {
            onSelectedOptionChange(selected.value);
        } else {
            onSelectedOptionChange(null); // If no option is selected, set to null or an appropriate default
        }
    };

    const reactSelectOptions = options.map(option => ({ value: option.trim(), label: option }));

    return (
        <div className="relative">
            <Select
                value={selectedOption ? { value: selectedOption, label: selectedOption } : null}
                onChange={handleOptionChange}
                options={reactSelectOptions}
                placeholder={`Search ${placeHolder}...`}
                className="text-left block w-full text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-CIDColor-200 sm:text-sm sm:leading-6"
            />
        </div>
    );
}

export default DropDownSelect;

