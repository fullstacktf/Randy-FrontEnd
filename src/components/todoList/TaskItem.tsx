import React, { FC } from 'react';
import { Task } from "./TodoList";

interface TaskProps {
    task: Task;
    onCheckInput: (task: Task) => void;
}

export const TaskItem: FC<TaskProps> = ({ task, onCheckInput }) => {
    const handleOnSelect = () => {
        onCheckInput(task);
    };

    return <div>
        {task.label}
        <input type="checkbox"
               onChange={handleOnSelect}
               checked={task.done}
               value={task.uuid}/>
    </div>
};
