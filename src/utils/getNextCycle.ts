export function getNextCycle(currentCycle: number) {
    return currentCycle === 0 || currentCycle ===8 ? 1 : currentCycle + 1;
}

/**
    0 -> 1
    ...
    7 -> 8

    Quando chegar em 8 o ciclo deve reiniciar, ou seja, voltar para 1.
 */