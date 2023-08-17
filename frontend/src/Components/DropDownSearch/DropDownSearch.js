import React from 'react';
import Select from 'react-select';

function DropDownSearch({ options, selectedOptions, onSelectedOptionsChange, placeHolder }) {
    const handleOptionChange = (selected) => {
        const selectedValues = selected.map(option => option.value);
        onSelectedOptionsChange(selectedValues);
    };

    const reactSelectOptions = options.map(option => ({ value: option, label: option }));

    return (
        <div className="relative">
            <Select
                isMulti
                value={selectedOptions.map(option => ({ value: option, label: option }))}
                onChange={handleOptionChange}
                options={reactSelectOptions}
                placeholder={`Search ${placeHolder}...`}
                className="text-left block w-full  text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

        </div>
    );
}

export default DropDownSearch;
