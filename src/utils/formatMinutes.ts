export function formatMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${hours} ч ${mins} мин`;
}
