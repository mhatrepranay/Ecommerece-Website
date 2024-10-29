// import { useState } from "react";

// const useCombinationState = (attributeKeys) => {
//     const [combinations, setCombinations] = useState([]);

//     const generateCombinations = (currentCombination, attributeIndex, attributeStates) => {
//         if (attributeIndex === attributeKeys.length) {
//             setCombinations((prevCombinations) => [...prevCombinations, currentCombination.join("")]);
//             return;
//         }

//         const [groupName, selectedItemsSetter] = attributeStates[attributeKeys[attributeIndex]];
//         const selectedItems = selectedItemsSetter[0];
//         selectedItems.forEach((item) => {
//             generateCombinations([...currentCombination, item], attributeIndex + 1, attributeStates);
//         });
//     };

//     return [combinations, generateCombinations, setCombinations];
// };

// export default useCombinationState;
