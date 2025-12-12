export const colorByRating = (rating: number) => {
    let color;
    switch (true) {
        case rating > 8.6:
            color = "yellow";
            break;
        case rating > 7.5:
            color = "yellow";
            break;
        case rating > 6.2:
            color = "grey";
            break;
        case rating > 4.1:
            color = "red";
    }
    return color
}
