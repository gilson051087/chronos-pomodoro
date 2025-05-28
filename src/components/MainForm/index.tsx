import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContexts/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);

  // cyclos
  const nextCycle = getNextCycle(state.currentCycle);
  const NextCycleType = getNextCycleType(nextCycle);


function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (taskNameInput.current === null) return;

  const taskName = taskNameInput.current.value.trim();
  if (!taskName) {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  const newTask: TaskModel ={
    id: Date.now().toString(),
    name: taskName,
    startDate: Date.now(),
    completeDate: null,
    interruptDate: null,
    duration: state.config[NextCycleType],
    type: NextCycleType,
  };

  const secondsRemaining = newTask.duration * 60; 

  setState(prevState => {
    return {
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle, 
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), 
      tasks: [...prevState.tasks, newTask],
    };
  });

}

    return (
        <form onSubmit={handleCreateNewTask} className="form" action="">
                  <div className="formRow">
                    <Input 
                      labelText='task' 
                      id='input' 
                      type='text'
                      placeholder='Digite uma Tarefa'
                      ref={taskNameInput}
                    />
        
                  </div>
        
                  <div className="formRow">
                    <p>
                      Próximo intervalo é de 25 min
                    </p>
                  </div>
        
                  <div className="formRow">
                    <Cycles />
                  </div>
        
                  <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon />} /> 
                   
                  </div>
                </form>
    )
}
