const BinarySearchTree = require('./BST');
const Queue = require('./Queue');

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive
// binary search algorithm, identify the sequence of numbers that each recursive
// call will search to try and find 8.

  // 3, 5, 6, 8, 11 || 12, 14, 15, 17, 18
  // 3, 5 || 6, 8, 11
  // 6 || 8, 11
  // 8 || 11
  // 8 - returns index [3]

  // Step 1: algorithm checks value 11. 11 > 8, so end index is set to [3]
  // Step 2: algortihm checks value 5. 5 < 8, so start index is set to [2]
  // Step 3: algortihm checks value 6. 6 < 8, so start index is set to [3]
  // Step 4: algortihm checks value 8. 8 === 8, so the algorithm returns index [3]

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive
// binary search algorithm, identify the sequence of numbers that each recursive
// call will search to try and find 16.

  // 3, 5, 6, 8, 11 || 12, 14, 15, 17, 18
  // 12, 14 || 15, 17, 18
  // 15 || 17, 18
  // 17 || 18
  // 17
  // item not found

  // Step 1: algorithm checks value 11. 11 < 16, so start index is set to [5]
  // Step 2: algortihm checks value 14. 14 < 16, so start index is set to [7]
  // Step 3: algorithm checks value 17. 17 > 16, so end index is set to [7]
  // Step 4: algorithm checks value 15. 15 < 16, so start index is set to [8]
  // Step 5: start index [8] > end index [7], so the algorithm returns -1 (item not found)

// 2. Adding a React UI
// For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset.
// You will be testing the efficiency of 2 search algorithms, linear search and binary search.
// You will also have a UI (a simple textbox will do) through which you will be sending your input
// that you want to search. There is no server-side to this program. All of this should be done
// using React.

  // 1) Linear search
  // Given the following dataset, find out how many tries it took to search for a particular item in
  // the dataset. If the item is not in the dataset, provide a message and indicate how many searches
  // it took to find that out.

  // 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45,
  // 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63,
  // 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13,
  // 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84,
  // 34, 53, 78, 40, 14, 5,

  // 2) Binary search
  // Use the same front end and the dataset from the previous exercise for this exercise.
  // Use array.sort to sort the dataset. Then implement a binary search to find a particular value
  // in the dataset. Display how many tries it took to search for a particular item in the dataset
  // using binary search. If the item is not in the dataset, provide a message and indicate how many
  // searches it took to find that out.


// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a search algorithm?
// Implement your algorithm to find a book whose Dewey and book title is provided.

// First find the largest digit and narrow down to those 100 digits, then find the tens digit
// and narrow down from there, then to the ones digit and decimals thereforth.
// At that node/index, return the node/index's value.

const library = [
  {dewey: '001.12', title: 'Apple'},
  {dewey: '002.23', title: 'Banana'},
  {dewey: '003.34', title: 'Plum'},
  {dewey: '004.45', title: 'Blueberry'},
  {dewey: '005.56', title: 'Melon'},
  {dewey: '006.67', title: 'Pear'},
];

function deweyBookSearch(array, dewey, title, start = 0, end = library.length - 1) {
  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index].dewey;

  if (item == dewey) {
      if (array[index].title == title) {
        console.log(`Your book '${title}' is found.`);
        return array[index];
      }

      else {
        console.log('Book does not exist.');
        return;
      }
  }

  else if (item < dewey) {
    return deweyBookSearch(array, dewey, title, index + 1, end);
  }

  else if (item > dewey) {
      return deweyBookSearch(array, dewey, title, start, index - 1);
  }
}

console.log('---Find Book---');
console.log(deweyBookSearch(library, '003.34', 'Plum'));
console.log(deweyBookSearch(library, '003.34', 'Pineapple')); // Book does not exist.


// 4. Searching in a BST
// ** No coding is needed for these drills**. Once you have answered it, you can
// then code the tree and implement the traversal to see if your answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals are
// respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90.
// What would be its postorder traversal?

//                   35
//            25           89
//        15      27   79      91
//     14    19             90

// post-order: 14 19 15 27 25 79 90 91 89 35

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8.
// What is its pre-order traversal?

//               8
//          6         10
//        5   7     9    11

// pre-order: 8 6 5 7 10 9 11


// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree
// with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22.
// Then implement inOrder(), preOrder(), and postOrder() functions.
// Test your functions with the following datasets.

// A pre-order traversal should give you the following order:
// 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

function main() {
  const BST = new BinarySearchTree();

  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  data.forEach(value => BST.insert(value, value));

  // BST.insert(25, 25);
  // BST.insert(15, 15);
  // BST.insert(50, 50);
  // BST.insert(10, 10);
  // BST.insert(24, 24);
  // BST.insert(35, 35);
  // BST.insert(70, 70);
  // BST.insert(4, 4);
  // BST.insert(12, 12);
  // BST.insert(18, 18);
  // BST.insert(31, 31);
  // BST.insert(44, 44);
  // BST.insert(66, 66);
  // BST.insert(90, 90);
  // BST.insert(22, 22);

  // console.log(BST);

  console.log('---Pre-Order---');
  console.log(BST.preOrder());

  console.log('---In-Order---');
  console.log(BST.inOrder());

  console.log('---Post-Order---');
  console.log(BST.postOrder());

  return BST;
}

main();


// 6. Find the next commanding officer
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.

//               Captain Picard
//             /                \
//       Commander Riker       Commander Data
//       /         \                   \
//   Lt. Cmdr.    Lt. Cmdr.           Lt. Cmdr.
//   Worf         LaForge             Crusher
//   /                                 /
// Lieutenant                        Lieutenant
// security-officer                  Selar


// This tree is meant to represent who is in charge of lower-ranking officers. For example,
// Commander Riker is directly responsible for Worf and LaForge. People of the same rank are
// at the same level in the tree. However, to distinguish between people of the same rank,
// those with more experience are on the left and those with less on the right (i.e., experience
// decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a
// program that will take this tree of commanding officers and outlines the ranking officers
// in their ranking order so that if officers start dropping like flies, we know who is the
// next person to take over command.

function mainCommand() {
  const CommandTree = new BinarySearchTree();
  CommandTree.insert(5, 'Captain Picard');
  CommandTree.insert(6, 'Commander Data');
  CommandTree.insert(8, 'Lt. Cmdr. Crusher');
  CommandTree.insert(7, 'Lieutenant Selar');
  CommandTree.insert(3, 'Commander Riker');
  CommandTree.insert(2, 'Lt. Cmdr. Worf');
  CommandTree.insert(4, 'Lt. Cmdr. LaForge');
  CommandTree.insert(1, 'Lieutenant Security-officer');

  console.log('---Commanding Officer---');
  const chain = bfs(CommandTree);
  console.log(chain);
}

mainCommand();


function bfs(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented
  const node = tree;
  queue.enqueue(node);

  while (queue.first) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
          queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
          queue.enqueue(node.right); // add right child to the queue
      }
  }

  return values;
}


// 7. Max profit
// The share price for a company over a week's trading is as follows:
// [128, 97, 121, 123, 98, 97, 105].

// If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day,
// write an algorithm to work out what the maximum profit you could make would be.

const sharePrices = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         let diff = arr[j] - arr[i];
         if (diff > 0 && diff > max) {
             max = diff
         }
      }
  }
  return max;
}

console.log('---Max Profit---');
console.log(maxProfit(sharePrices));


// 8. Egg drop (optional)
// This is a fun exercise to do - consider this optional after you are done with all the
// exercises above. Imagine that you wanted to find the highest floor of a 100 story building
// that you could drop an egg from without the egg breaking. But you only have 2 eggs.
// Write an algorithm to find out in the most efficient way which floors you should drop the
// eggs from.

function eggDrop() {
  let f = 1;
  while (f * (f + 1) / 2 < 100) {
    f++;
  }

  let floor = f;
  let count = 0;
  while (floor <= 100) {
    console.log(`Drop ${count + 1} at floor ${floor}`);
    count++;
    floor += f - count
  }

  if (floor > 100) console.log(`Drop ${count + 1} at floor 100`);
}

console.log('---Egg Drop---');
eggDrop();