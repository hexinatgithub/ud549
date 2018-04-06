describe('Address Book', function () {
    it('should be able to add a contract', function () {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContract(thisContact);

        expect(addressBook.getContract(0)).toBe(thisContact);
    });
})