const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// ✅ 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = [];                                // Crea un nuovo array per memorizzare gli insegnanti invertiti
for (let i = teachers.length - 1; i >= 0; i--) {            // Itera attraverso l'array teachers partendo dall'ultimo elemento
  const teacher = teachers[i];                              // Ottieni l'insegnante corrente
  reversedTeachers.push(teacher);                           // Aggiungi l'insegnante al nuovo array reversedTeachers
}
console.log(reversedTeachers);                              // Stampa l'array reversedTeachers per verificare il risultato


// ✅ 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];                                       // Crea un nuovo array per memorizzare gli insegnanti con nomi lunghi
for (let i = 0; i < teachers.length; i++) {                 // Itera attraverso l'array teachers
  const teacher = teachers[i];                              // Ottieni l'insegnante corrente
  if (teacher.length >= 5) {                                // Verifica se la lunghezza del nome dell'insegnante è maggiore o uguale a 5
    longNames.push(teacher);                                // Se la condizione è vera, aggiungi l'insegnante al nuovo array longNames  
  }
}
console.log(longNames);                                     // Stampa l'array longNames per verificare il risultato


// ✅ 3. Rimuovi 'Ed' dall'array teachers

const teachersWithoutEd = [];                               // Crea un nuovo array per memorizzare gli insegnanti senza 'Ed'  
for (let i = 0; i < teachers.length; i++) {                 // Itera attraverso l'array teachers
  const teacher = teachers[i];                              // Ottieni l'insegnante corrente
  if (teacher !== 'Ed') {                                   // Verifica se l'insegnante corrente non è 'Ed'
    teachersWithoutEd.push(teacher);                        // Se la condizione è vera, aggiungi l'insegnante al nuovo array teachersWithoutEd
  }
}
console.log(teachersWithoutEd);                             // Stampa l'array teachersWithoutEd per verificare il risultato

// ✅ 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let isFabioPresent = false;                                 // Inizializza la variabile isFabioPresent a false
for (let i = 0; i < teachers.length; i++) {                 // Itera attraverso l'array teachers
  const teacher = teachers[i];                              // Ottieni l'insegnante corrente
  if (teacher  === 'Fabio') {                               // Verifica se l'insegnante corrente è 'Fabio'
    isFabioPresent = true;                                  // Se la condizione è vera, imposta isFabioPresent a true
    break;                                                  // Esci dal ciclo una volta trovato 'Fabio'
  }
}
console.log(isFabioPresent);                                // Stampa il valore di isFabioPresent per verificare se 'Fabio' è presente nell'array teachers


// ✅ 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole
// e salvala nella variabile teachersString

const teachersString = teachers.join(', ');                 // Utilizza il metodo join per unire tutti gli insegnanti in una stringa separata da virgole
console.log(teachersString);                                // Stampa la stringa teachersString per verificare il risultato     