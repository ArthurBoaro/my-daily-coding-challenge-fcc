function formatCoffeeOrder(order) {

    const menu = {
    "cold brew": 4.50,
    "oat latte": 5.00,
    "cappuccino": 4.75,
    "espresso": 3.00,
    "vanilla syrup": 0.75,
    "caramel drizzle": 0.60,
    "extra shot": 0.50,
    "oat milk": 0.75,
    "cream": 0.75
    };

    let items = [];
    let totalPrice = 0;
    const wordList = order.replace(/[.,!?]/g, "").split(" ");

    for (let i = 0; i < wordList.length; i++) {

        const oneWord = wordList[i];
        const twoWords = `${wordList[i]} ${wordList[i + 1]}`;

        if (oneWord in menu && !items.includes(oneWord)) {
        items.push(oneWord);
        }

        if (twoWords in menu && !items.includes(twoWords)) {
        items.push(twoWords);
        }
    }

    const orderedItems = [];

    for (const item in menu) {
        if (items.includes(item)) {
        orderedItems.push(item);
        totalPrice += menu[item];
        }
    }

    return `${orderedItems.join(" + ")}: $${totalPrice.toFixed(2)}`;
}