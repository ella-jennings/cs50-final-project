import React from 'react';
import './settings.scss';

const Settings = ({fiveCities, changed}: baseProps) => {
    return (
        <div className="settingsPanel">
            <h2>Settings:</h2>
            Five cities <input type="checkbox" value="Five Cities" checked={fiveCities} onChange={() => changed()}/>
        </div>
    )
}

type baseProps = {
    fiveCities: boolean,
    changed: () => {}
}

export default Settings;