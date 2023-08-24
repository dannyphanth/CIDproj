import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function NumberRangeSelect({ minValue, maxValue, queryVariable, handleSliderValueChange }) {
    const initialValue = [minValue, maxValue]; // Define the initial values
    const [value, setValue] = useState(initialValue);

    // useEffect(() => {
    //     handleSliderValueChange(value);
    // }, [value, handleSliderValueChange]);

    const handleValueChange = (newValue) => {
        setValue(newValue);
        handleSliderValueChange(newValue)
    };

    //Slider styling
    const customTrackStyle = {
        backgroundColor: '#485b99', // Customize the track color
        height: 4, // Customize the track height
    };

    const customHandleStyle = {
        borderColor: '#485b99', // Customize the handle border color
    };

    const customDotStyle = {
        borderColor: '#485b99', // Customize the dot color
    };

    const customActiveDotStyle = {
        borderColor: '#485b99', // Customize the dot color
    };

    return (
        <div className="block w-full shadow-md  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
            <div className="py-0">
                <div className="flex justify-center">
                    <label className="block sm:text-sm sm:leading-6 text-gray-500  ">
                        Select Number Range:
                    </label>
                    <output className="pl-2 sm:text-sm sm:leading-6 text-gray-500">
                        {value[0]} - {value[1]} {queryVariable}
                    </output>
                </div>
                <Slider
                    range
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={handleValueChange}
                    allowCross={false}
                    dotStyle={customDotStyle}
                    activeDotStyle={customActiveDotStyle}
                    railStyle={customActiveDotStyle}
                    trackStyle={[customTrackStyle]} // Use an array even for a single track
                    handleStyle={[customHandleStyle, customHandleStyle]} // Use an array for multiple handles
                    className="mx-4 w-auto color-black"
                />
            </div>
        </div>
    );
}

export default NumberRangeSelect;