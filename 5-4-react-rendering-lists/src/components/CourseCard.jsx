// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  function toggleTask(id) {
    // TODO (TASK 4): toggle task.isDone for the task with matching id
    
  }

  function deleteTask(id) {
    // TODO (TASK 4): remove the task with matching id
  }

  // Helpful hints for TASK 3 (optional to use)
  // const hasTasks = course.tasks.length > 0;
  // const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TODO (TASK 3): Show “All caught up” badge ONLY when:
            - course has tasks AND
            - all tasks are done
            Use logical && */}
        { (course.tasks.length > 0) && (hasTasks && course.tasks.every(t => t.isDone)) && 
            <p>All caught up</p> 
        }
  
        {course.tasks.length === 0 && <p className="muted">No tasks yet.</p>}
        
      </header>

      <section className="tasksSection">

        {/* DISPLAY ONLY: Show a message when there are no tasks */}
        
        <ul className="tasks">
          {/* TODO (TASK 2): Render tasks using course.tasks.map(...)
              For each task, render <TaskItem /> and pass:
                - key={task.id}
                - task={task}
                - onToggle={toggleTask}
                - onDelete={deleteTask}
          */}
          {
            course.tasks.map(task => <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask}/>)
          }
        </ul>
      </section>
    </article>
  );
}
  //  =========================================================
  //  TASK 4 — Interactivity (Toggle + Delete ONLY)
  //  Files: CourseCard.jsx, TaskItem.jsx
  //  ---------------------------------------------------------
  //  GOAL:
  //  Toggle and delete tasks using state updates.

  //  CourseCard.jsx
  //  1️ Implement toggleTask(id) using onMutateCourse + .map()
  //  2️ Implement deleteTask(id) using onMutateCourse + .filter()

  // =========================================================
  //  TASK 3 — Simple Conditional Rendering (ONLY &&)
  //  Files: CourseCard.jsx, TaskItem.jsx, DueBadge.jsx
  //  ---------------------------------------------------------
  //  GOAL:
  //  Practice logical && rendering.

  //  CourseCard.jsx
  //  1️ Show “All caught up” badge ONLY when:
  //       - the course has tasks AND
  //       - all tasks are done

  //  2️ Show “No tasks yet.” ONLY when the course has NO tasks:
  //       {course.tasks.length === 0 && <p className="muted">No tasks yet.</p>}


  //  =========================================================
  //  TASK 2 — Render Tasks for Each Course
  //  File: src/components/CourseCard.jsx
  //  ---------------------------------------------------------
  //  GOAL:
  //  Inside each course card, display all its tasks using .map().

  //  STEPS:
  //  1️ Open CourseCard.jsx.
  //  2️ Find:
  //        <ul className="tasks">
  //        → Write your code inside this list.
  //  3️ Use course.tasks.map(...) and render <TaskItem /> for each task.
  //  4️ Pass props:
  //        - key={task.id}
  //        - task={task}
  //        - onToggle={toggleTask}
  //        - onDelete={deleteTask}