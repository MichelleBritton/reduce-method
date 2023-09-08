  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Expanded to see how it works
const nums1 = [0, 1, 2, 3, 4];
let sum1 = nums1.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 10); // if you want to specify an initial value to use as an accumulator
console.log(sum1);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);

const groupedByProfession = teamMembers.reduce((acc, member) => {
  const { name, profession } = member;

  // Check if the profession already exists in the accumulator
  if (acc.has(profession)) {
    acc.get(profession).push(name);
  } else {
    // If it doesn't exist, create a new entry
    acc.set(profession, [name]);
  }

  return acc;
}, new Map());

// Convert the Map back to an object
const result = {};
groupedByProfession.forEach((value, key) => {
  result[key] = value;
});

console.log(result);