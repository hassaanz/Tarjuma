import React, { useState } from 'react';
import classNames from 'classnames';


const ToolBar = ({isOpen, targetWeb, setTarget, onToggleMarkers}) => {
  const cn = classNames({open: isOpen});
  const [url, setTargetState] = useState(targetWeb);
  return (
    <div id="toolbar" className={cn}>
      <h1>Toolbar</h1>
      <div className="webLoader">
        <input type="text" id="url" value={url} onChange={(ev) => {setTargetState(ev.target.value)}} />
        <button onClick={() => {setTarget(url)}}>Load</button>
      </div>
      <div>
        <label htmlFor="toggleMarkers">Toggle Markers</label>
        <input type="checkbox" onChange={onToggleMarkers} />
      </div>
    </div>
  );
};

export default ToolBar;
