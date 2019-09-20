const skills = [
  {
    name: 'Tom',
    skill: 'CSS',
    yearsExperience: 3,
    category: 'Web Design',
  },
  {
    name: 'Jim',
    skill: 'HTML',
    yearsExperience: 10,
    category: 'Web Design',
  },
  {
    name: 'Sue',
    skill: 'JavaScript',
    yearsExperience: 5,
    category: 'Web Development',
  },
  {
    name: 'Maria',
    skill: 'PHP',
    yearsExperience: 7,
    category: 'Web Development',
  },
  {
    name: 'John',
    skill: 'Photoshop',
    yearsExperience: 1,
    category: 'Web Design',
  },
  {
    name: 'David',
    skill: 'Writing',
    yearsExperience: 12,
    category: 'Content',
  },
  {
    name: 'Ellen',
    skill: 'Editor',
    yearsExperience: 5,
    category: 'Content',
  },
];

// 1. Get the total years experience
const toReturn1 = skills
  .map(item => {
    return item.yearsExperience;
  })
  .reduce((acc, item) => {
    return acc + item;
  });

// 2. Get the experience per category
// { 'Web Design': 14, 'Web Development': 12, Content: 17 }
const toReturn2 = skills.reduce((acc, item) => {
  console.log(acc);

  if (!acc[item.category]) {
    acc[item.category] = 0;
  }
  acc[item.category] += item.yearsExperience;
  return acc;
}, {});

export default toReturn2;
