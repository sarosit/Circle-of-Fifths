// function $(selector) {
//     const self = 
//     {
//         element: document.querySelector(selector),
//         html: ()=> self.element,
//         getNamedScale: (selector) => {
//             let startingIndex = notes.indexOf(selector);
//             i = 0;
//             let currentNote = selector;
//             let myNewScale = [];
//             do {
//               myNewScale.push(currentNote);
//               currentNote = notes[(startingIndex  + ++i)%12];
              
//             } while(currentNote != selector)
//               let majScale = myNewScale.filter((el,i)=>stencilMaj.some(j => i === j));
//             return majScale;
//         },

//         getModes: (selector) => {
//             let myModes = [];
//             let tonicScale = getNamedScale(selector);
//             for (let i = 0; i < 6; i++) {
                
//                 tonicScale.push(tonicScale.shift());
//                 myModes.push(Array.from(tonicScale));
//             };
//             return myModes
//         },
        
//     }
// }