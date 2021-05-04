const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    const contacts = JSON.parse(response);

    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const foundContact = contacts.find(
      (contact) => contact.id === Number(contactId)
    );

    if (foundContact) {
      return foundContact;
    } else {
      return "There is no contact with such id";
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) {
    return "Pass the contact name, email and phone";
  }

  try {
    const contacts = await listContacts();

    const id = shortid.generate();
    const newContact = { id, name, email, phone };
    const newContactsList = [...contacts, newContact];

    await fs.writeFile(
      contactsPath,
      JSON.stringify(newContactsList, null, "\t")
    );

    return newContactsList;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();

    const filteredContacts = contacts.filter(
      (contact) => contact.id !== Number(contactId)
    );

    const newContactsList = JSON.stringify(filteredContacts, null, "\t");
    await fs.writeFile(contactsPath, newContactsList);

    return filteredContacts;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, addContact, removeContact };
