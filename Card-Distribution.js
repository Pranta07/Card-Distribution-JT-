const cardDistribution = (users) => {
    // console.log(users);
    const data = users.map((user, index) => {
        let { birthYear, currentYear, district, postNo, priority } = user;
        let cardNumber = "";
        cardNumber += district.substr(0, 2).toUpperCase();
        // console.log(cardNumber);

        currentYear += "";
        cardNumber += currentYear.substr(currentYear.length - 2, 2);
        // console.log(cardNumber);

        postNo += "";
        cardNumber += postNo.substr(0, 2);
        // console.log(cardNumber);

        cardNumber += birthYear;
        // console.log(cardNumber);

        const serialNum = index + 1 + "";
        const zeroRequired = 16 - cardNumber.length - serialNum.length;
        for (let i = 0; i < zeroRequired; i++) {
            cardNumber += "0";
        }
        cardNumber += serialNum;

        const gift = index % 2 === 0 ? "W" : "R";

        const cardHolder = {
            cardNumber,
            gift,
            priority,
        };
        return cardHolder;
    });

    //sorting data by priority
    data.sort((x, y) => {
        return x.priority - y.priority;
    });

    return data;
};

/* const users = [
    {
        name: "Pranta",
        birthYear: 1998,
        currentYear: 1234,
        district: "Chittagong",
        postNo: 4100,
        priority: 2,
    },
    {
        name: "Pranta",
        birthYear: 1998,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 4292,
        priority: 1,
    },
    {
        name: "Pranta",
        birthYear: 1998,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 4301,
        priority: 4,
    },
    {
        name: "Pranta",
        birthYear: 1998,
        currentYear: 2022,
        district: "Khulna",
        postNo: 4498,
        priority: 3,
    },
];

const data = cardDistribution(users);
console.log(data); */
