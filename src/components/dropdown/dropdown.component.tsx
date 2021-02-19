import React, { useState } from 'react';
import './dropdown.style.scss';

interface DropdownOption {
    displayName: string;
    value: any;
}

interface Props {
    options: DropdownOption[];
    value?: any;
}

export default function Dropdown({ options, value: dropdownValue }: Props) {
    const [value, setValue] = useState(dropdownValue)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    }
    
    return (
        <div className="dropdown-box">
            <select className="options" value={value} onChange={onChange}>
                {
                    options?.length ?
                        options.map(option => 
                            <option value={option.value} key={option.value}>
                                {option.displayName}
                            </option>
                        ) : null
                }
            </select>
        </div>
    );
};