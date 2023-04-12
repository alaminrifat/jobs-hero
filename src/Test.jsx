import React, { useState } from 'react';

function Test() {
  const [data, setData] = useState([
    {type:"onsite"},
    {type:"remote"},
    {type:"onsite"},
    {type:"onsite"},
    {type:"remote"},
    {type:"onsite"}
  ]);

  const [newData, setNewData] = useState(data);

  const handleClick = () => {
    const updatedData = newData.map(item => {
      if (item.type === 'remote') {
        return { ...data, item};
      } else {
        return item;
      }
    });
    setNewData(updatedData);
  };

  return (
    <div>
      <button onClick={handleClick}>Update Onsite Value</button>
      <ul>
        {newData.map((item, index) => (
          <li key={index}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;