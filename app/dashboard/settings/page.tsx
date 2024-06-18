import React from 'react';

export default function SettingsPage() {
    return (
        <>
            <h1>Settings</h1>
            <div className="settings">
                <div className="setting">
                    <label>Setting 1</label>
                    <input type="text" />
                </div>
                <div className="setting">
                    <label>Setting 2</label>
                    <input type="text" />
                </div>
                <div className="setting">
                    <label>Setting 3</label>
                    <input type="text" />
                </div>
            </div>
        </>
    );
}