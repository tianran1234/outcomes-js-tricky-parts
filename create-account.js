function createAccount(pin, amount = 0) {
    let balance = amount;

    return {
        checkBalance(input) {
            if (input === pin) return `$${balance}`;
            else {
                return "Invalid PIN.";
            }
        },

        deposit(input, depAmount) {
            if (input === pin) {
                balance = balance + depAmount;
                return `Succesfully deposited $${depAmount}. Current balance: $${balance}.`;
            }
            else {
                return "Invalid PIN."
            }
        },

        withdraw(input, wtdAmount) {
            if (input === pin && wtdAmount <= balance) {
                balance = balance - wtdAmount;
                return `Succesfully withdrew $${wtdAmount}. Current balance: $${balance}.`;
            }
            if (input === pin && wtdAmount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            if (input != pin) return "Invalid PIN.";
        },

       changePin(input, newPin) {
            if (input != pin) return "Invalid PIN.";
            else {
                pin = newPin;
                return "PIN successfully changed!";
            }
        }
    }
}

module.exports = { createAccount };
