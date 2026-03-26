function countChange(change) {

    const total = change.reduce((sum, coin) => sum + coin, 0);
    const dollar = Math.floor(total / 100);
    const cents = total % 100;

    return `$${dollar}.${cents.toString().padStart(2, "0")}`;
}