function AddressBook() {
    this.contracts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function (cb) {
    setTimeout(() => {
        this.initialComplete = true;
        if (cb) {
            cb();
        }
    }, 3);
}


AddressBook.prototype.addContact = function (contract) {
    this.contracts.push(contract);
}

AddressBook.prototype.getContact = function (index) {
    return this.contracts[index];
}

AddressBook.prototype.deleteContact = function (index) {
    this.contracts.splice(index, 1);
}