export function sum(a: number, b: number) {
    return a + b
}

export function multiply(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentence: string) {
    const words = sentence.toLocaleLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('/', '')
            .replace(',', '')
        )
}