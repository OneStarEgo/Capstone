import React, { useState } from 'react';


function CheckBox(props) {

    const [checked, setChecked] = useState(false);
    const checkedText = props.onText;
    const uncheckedText = props.offText;
    const togglePreference = props.togglePreference;
    const service = props.service;

    const handleChange = () => {
        setChecked(!checked);
        togglePreference(service);
    };

    return (
        <div>
            <p>
                {checked ? checkedText : uncheckedText}
            </p>
        </div>
    );
};

export default CheckBox;