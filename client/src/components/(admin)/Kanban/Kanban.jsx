import {useAtom} from "jotai";
import {useEffect, useState} from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragMoveEvent,
  DragOverEvent,
  useSensor,
  PointerSensor // Adaugă această linie
} from "@dnd-kit/core";
// import {activeTaskAtom, columnsAtom} from "@/store";
import {arrayMove, SortableContext} from "@dnd-kit/sortable";
import ColumnBoard from "@/components/Kanban/ColumnBoard";
import TaskBoard from "@/components/Kanban/TaskBoard";

export default function Kanban({defaultTasks, handleUpdateTaskColumn}) {

  // const [columns, setColumns] = useAtom(columnsAtom);
  // const [activeTask, setActiveTask] = useAtom(activeTaskAtom);
  const [tasks, setTasks] = useState(defaultTasks);

  useEffect(() => {
    setTasks(defaultTasks);
  }, [defaultTasks]);

  useEffect(() => {
    tasks.forEach(function (task) {
      handleUpdateTaskColumn(task.id, task.columnId);
    });
  }, [tasks]);

  const sensors = useSensor(PointerSensor); // Adaugă această linie

  function onDragStart(event) {
    const task = event.active.data.current?.task;
    setActiveTask(task);
  }

  function onDragEnd() {
    setActiveTask(null);
  }

  function onDragOver(event) {
    const {active, over} = event;

    if (
      active.data.current?.type === "task" &&
      over?.data.current?.type === "column" &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeId = active.data.current?.task.id;
      const overId = over.data.current?.column.id;
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(t => t.id === activeId);

        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors} // Modificare: adaugă sensors aici
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <SortableContext items={columns.map(column => column.id)}>
        {columns.map(function (column) {
          return (
            <ColumnBoard
              key={column.id}
              column={column}
              tasks={tasks?.filter(task => task.columnId === column.id)}
            />
          );
        })}
      </SortableContext>
      <DragOverlay>
        {activeTask && <TaskBoard task={activeTask} />}
      </DragOverlay>
    </DndContext>
  );
}
