import React from 'react';
import { useDrag } from 'react-dnd'

function DragButton({ item }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'button', item },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      {item}
    </div>
  )
}

export default function DragAndDropList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item}
          onClick={() => handleListItemClick(index)}
          style={{
            display: 'inline-block',
            padding: '5px',
            margin: '5px',
            border: selectedIndex === index ? '1px solid blue' : '1px solid gray',
          }}
        >
          {selectedIndex === index ? <DragButton item={item} /> : item}
        </div>
      ))}
    </div>
  );
}
