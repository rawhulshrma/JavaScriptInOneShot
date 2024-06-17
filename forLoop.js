// const cars = ["bmw","volvo","nissan","Tata"]
// let resultCars = ''
// for(let i=0;i<cars.length;i++){
//     resultCars+=cars[i]
  
// }
// document.write(resultCars)
// const scientists = [
//     {
//       name: "Albert Einstein",
//       field: "Theoretical Physics",
//       book: "Relativity: The Special and the General Theory",
//       contribution: "Theory of Relativity",
//       birthday: "March 14, 1879"
//     },
//     {
//       name: "Marie Curie",
//       field: "Physics and Chemistry",
//       book: "Radioactive Substances",
//       contribution: "Radioactivity",
//       birthday: "November 7, 1867"
//     },
//     {
//       name: "Charles Darwin",
//       field: "Natural History, Evolutionary Biology",
//       book: "On the Origin of Species",
//       contribution: "Theory of Evolution by Natural Selection",
//       birthday: "February 12, 1809"
//     },
//     {
//       name: "Isaac Newton",
//       field: "Physics, Mathematics, Astronomy",
//       book: "Philosophiæ Naturalis Principia Mathematica",
//       contribution: "Laws of Motion, Universal Gravitation",
//       birthday: "January 4, 1643"
//     },
//     {
//       name: "Stephen Hawking",
//       field: "Theoretical Physics, Cosmology",
//       book: "A Brief History of Time",
//       contribution: "Black Hole Physics, Hawking Radiation",
//       birthday: "January 8, 1942"
//     },
//     {
//       name: "Nikola Tesla",
//       field: "Electrical Engineering, Physics",
//       book: "My Inventions",
//       contribution: "Alternating Current (AC), Tesla Coil",
//       birthday: "July 10, 1856"
//     },
//     {
//       name: "Galileo Galilei",
//       field: "Physics, Astronomy",
//       book: "Dialogue Concerning the Two Chief World Systems",
//       contribution: "Support for Copernican heliocentric model",
//       birthday: "February 15, 1564"
//     },
//     {
//       name: "Louis Pasteur",
//       field: "Microbiology, Chemistry",
//       book: "Études sur la bière",
//       contribution: "Germ Theory of Disease, Pasteurization",
//       birthday: "December 27, 1822"
//     },
//     {
//       name: "Alan Turing",
//       field: "Mathematics, Computer Science",
//       book: "On Computable Numbers, with an Application to the Entscheidungsproblem",
//       contribution: "Turing Machine, Cryptanalysis (Enigma code breaking)",
//       birthday: "June 23, 1912"
//     },
//     {
//       name: "Ada Lovelace",
//       field: "Mathematics, Computing",
//       book: "Notes on the Analytical Engine",
//       contribution: "First computer programmer, algorithms for Analytical Engine",
//       birthday: "December 10, 1815"
//     }
//   ];

// let filteredScientists = [];
// for (let i = 0; i < scientists.length; i++) {
//   if (scientists[i].name[0] !== 'A') {
//     filteredScientists.push(scientists[i]);
//   }
// }

// document.write(filteredScientists);



// let printSci = '';
// for (let i = 0; i < scientists.length; i++) {
//   let nameFirstChar = scientists[i].name[0];
//   if (nameFirstChar === "A") {
//     printSci += `Name is ${scientists[i].name}.\n`;
//   }
// }

// document.write(printSci);

// let levels = 1234; // Define levels as a string of digits
// let line = '';
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     // line += 1000[i];
// }


// function firstProg(){
//     const levels = 5
//     let lines = ''
//     for (let i = 0; i <= levels.length; i++) {
//         lines += levels[i];
//         document.write(`Thsi is loop ${lines}<br/>`);
//     }  
// }

// Define the number of levels of nesting
// function firstProg(){


// const levels = 5;

// // Outer loop for each level of nesting
// for (let a = 1; a <= levels; a++) {
//   // Inner loop for each line in the current level
//   for (let b = 1; b <= a; b++) {
//     let line = '';
    
//     // Inner loop for each block (|)
//     for (let c = 1; c <= b; c++) {
//       let block = '';

//       // Inner loop for each digit in the current block
//       for (let d = 1; d <= c; d++) {
//         block += `${d} `;
//       }

//       // Remove the trailing space from the block
//       block = block.trim();

//       // Append the block to the line
//       line += `${block} | `;
//     }

//     // Remove the trailing ' | ' from the line and log it
//     console.log(line.trimEnd(' | '));
//   }

//   // Log a blank line after each level (optional for separation)
//   document.write('');
// }

// }

// Initialize variables for Fibonacci sequence
