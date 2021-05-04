# Node.js - CLI (command line interface)

## Used npm packages:

- [nodemon](https://www.npmjs.com/package/nodemon)
- [commander](https://www.npmjs.com/package/commander)
- [shortid](https://www.npmjs.com/package/shortid)

## Screenshots:

- Cet list of all contacts:
  `node index.js --action="list"`
  ![screenshot](https://github.com/NataliiaLazorenko/goit-node-hw-01-CLI/blob/main/screenshots/Get-contacts-list.jpg)

- Get contact by id:
  `node index.js --action="get" --id=5`
  ![screenshot](https://github.com/NataliiaLazorenko/goit-node-hw-01-CLI/blob/main/screenshots/Get-contact-by-id.jpg)

- Add new contact:
  `node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"`
  ![screenshot](https://github.com/NataliiaLazorenko/goit-node-hw-01-CLI/blob/main/screenshots/Add-contact.jpg)

- Remove contact by id:
  `node index.js --action="remove" --id=3`
  ![screenshot](https://github.com/NataliiaLazorenko/goit-node-hw-01-CLI/blob/main/screenshots/Remove-contact-by-id.jpg)
