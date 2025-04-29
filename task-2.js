const users = [
    {
    name: "samir",
    friend: "dima",
    },
    {
    name: "dima",
    friend: "kostek",
    },
    {
    name: "kostek",
    friend: "samir",
    },
];

const getUsersWithFriend = (users, friendName) => {
    let friends = [];

    for (const user of users) {
        if (user.friend === friendName) {
            friends.push(user.name);
        }
    }

    return friends;
};

console.log(getUsersWithFriend(users, 'samir'));