const users = [
    { name: "Samir", skills: ["lorem", "ipsum", "amet", "non", "culpa"] },
    { name: "Dima", skills: ["amet", "velit", "tempor", "commodo", "adipisicing"] },
    { name: "Kostek", skills: ["mollit", "veniam", "laborum", "nostrud", "irure"] },
    { name: "Alex", skills: ["nulla", "ex", "anim", "proident", "nostrud"] }
];

const getSortedUniqueSkills = users => {
    const allSkills = users.map(user => user.skills).flat();

    const uniqueSkills = [...new Set(allSkills)];

    return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]