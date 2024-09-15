import React from "react";
import DraggableBlock from './DraggableBlock'

export default function Sidebar() {
  const blocks = [
    {
      id: "when_flag_clicked",
      text: "When flag clicked",
      color: "bg-yellow-500",
      icon: "flag",
    },
    { id: "move_steps", text: "Move 10 steps", color: "bg-blue-500" },
    {
      id: "turn_left",
      text: "Turn left 15 degrees",
      color: "bg-blue-500",
      icon: "undo",
    },
    {
      id: "turn_right",
      text: "Turn right 15 degrees",
      color: "bg-blue-500",
      icon: "redo",
    },
    { id: "goto_xy", text: "Go to x: 0 y: 0", color: "bg-blue-500" },
    { id: "repeat", text: "Repeat 10", color: "bg-orange-500" },
  ];

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Motion"} </div>
      {blocks.map((block) => (
        <DraggableBlock key={block.id} block={block} />
      ))}
    </div>
  );
}
