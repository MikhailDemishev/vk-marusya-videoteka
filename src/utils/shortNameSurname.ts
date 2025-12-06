export function shortNameSurname(firstName: string, lastName: string) {

    return firstName.slice(0, 1).trim().toLocaleUpperCase() + lastName.slice(0, 1).trim().toLocaleUpperCase()
}
