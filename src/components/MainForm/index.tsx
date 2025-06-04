import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContexts/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContexts/taskActions";


export function MainForm() {
  const { state, dispatch } = useTaskContext();
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

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[NextCycleType],
      type: NextCycleType,
    };



    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})
  }

  function handleInterruptTask() {
    dispatch({type: TaskActionTypes.INTERRUPT_TASK});
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <Input
          labelText="task"
          id="input"
          type="text"
          placeholder="Digite uma Tarefa"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar uma nova tarefa"
            title="Iniciar Tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label="Interromper tarefa atual"
            title="Interromper Tarefa"
            type="button"
            color="red"
            icon={<PlayCircleIcon />}
            onClick={handleInterruptTask}
            key="botao_button"
          />
        )}
      </div>
    </form>
  );
}
