function canDonate(donor, recipient) {

    if (donor.includes("+") && recipient.includes("-")) {
        return false;
    }

    if (donor.includes("AB") && !recipient.includes("AB")) {
        return false;
    }

    if (donor.includes("B") && !(recipient.includes("B") || recipient.includes("AB"))) {
        return false;
    }

    if (donor.includes("A") && !(recipient.includes("A") || recipient.includes("AB"))) {
        return false;
    }

    return true;
}