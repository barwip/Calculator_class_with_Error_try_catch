// Deklaracja klasy Kalkulator
class Calculator {
    constructor(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Podane wartości nie są liczbami!"); // throw wywołuje wyjątek. Możemy użyć konstruktora klasy Error, który tworzy obiekt błędu, który dalej możemy obsłużyć za pomocą try... catch
        }
        this.a = Number(a); // z prompta wychodzi string, dlatego zamieniamy na typ Number
        this.b = Number(b);
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            throw new Error("Nie można dzielić przez 0!");
        }
        return this.a / this.b;
    }
}

try {
// Pobranie danych od użytkownika
    const a = prompt("Podaj pierwszą liczbę:");
    const b = prompt("Podaj drugą liczbę:");

// Utworzenie nowego obiektu klasy Calculator
    const calculator = new Calculator(a, b);

// Wyświetlenie wyników działań na konsoli
    alert(`Dodawanie: ${calculator.add()}`);
    alert(`Odejmowanie: ${calculator.subtract()}`);
    alert(`Mnożenie: ${calculator.multiply()}`);
    alert(`Dzielenie: ${calculator.divide()}`);
} catch (error) {
// Wyświetlenie błędów dla użytkownika
    alert(error);
}