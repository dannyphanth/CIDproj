import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function NumberRangeSelect({ minValue, maxValue }) {
    const [value, setValue] = useState([minValue, maxValue]);

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="w-full p-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select a Number Range:
                </label>
            </div>
            <Slider
                range
                min={minValue}
                max={maxValue}
                value={value}
                onChange={handleValueChange}
            />
            <div className="mt-4 text-center">
                <output className="text-gray-600 text-sm">
                    {value[0]} - {value[1]}
                </output>
            </div>
        </div>
    );
}

export default NumberRangeSelect;
