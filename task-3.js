const users = [
    {
        name: "Samir",
        friends: ["Dima", "Kostek"]
    },
    {
        name: "Dima",
        friends: ["Samir"]
    },
    {
        name: "Kostek",
        friends: ["Samir", "Dima", "Alex"]
    },
    {
        name: "Alex",
        friends: []
    }
];


const getNamesSortedByFriendsCount = users => {
    const usersCopy = users.slice();
    usersCopy.sort((a, b) => a.friends.length - b.friends.length);
    const names = usersCopy.map(user => user.name);
    return names;
};

console.log(getNamesSortedByFriendsCount(users));

  