export function formatMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    const hourWord =
        hours % 10 === 1 && hours % 100 !== 11
            ? "час"
            : hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)
                ? "часа"
                : "часов";

    const minWord =
        mins % 10 === 1 && mins % 100 !== 11
            ? "минута"
            : mins % 10 >= 2 && mins % 10 <= 4 && (mins % 100 < 10 || mins % 100 >= 20)
                ? "минуты"
                : "минут";

    return `${hours} ${hourWord} ${mins} ${minWord}`;
}
