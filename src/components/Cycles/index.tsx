import { useTaskContext } from '../../contexts/TaskContexts/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
    const { state } = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo',
        
    }
    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => { // sempre que fizer o map para exibir algo, preciso passar uma key para fazer uma comparação de cada item
                    const nextCycle = getNextCycle(index);
                    const NextCycleType = getNextCycleType(nextCycle);
                    return (
                        <span 
                            key={nextCycle}
                            className={`${styles.cycleDot} ${styles[NextCycleType]}`}
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[NextCycleType]}`}
                            title={`Indicador de ciclo de ${cycleDescriptionMap[NextCycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    )
}