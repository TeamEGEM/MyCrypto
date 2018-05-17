import { ADDRESS_BOOK_TABLE_ID, ACCOUNT_ADDRESS_ID } from 'features/addressBook/constants';
import { State as AddressBookState } from 'features/addressBook/reducers';

export default function fixAddressBookErrors(addressBook: AddressBookState | undefined) {
  if (!addressBook) {
    return {};
  }

  Object.keys(addressBook.entries).forEach(entryId => {
    const entry = addressBook.entries[entryId];

    if (entry.addressError) {
      entry.temporaryAddress = entry.address;
      delete entry.addressError;
    }

    if (entry.labelError) {
      entry.temporaryLabel = entry.label;
      delete entry.labelError;
    }
  });

  delete addressBook.entries[ADDRESS_BOOK_TABLE_ID];
  delete addressBook.entries[ACCOUNT_ADDRESS_ID];

  return addressBook;
}