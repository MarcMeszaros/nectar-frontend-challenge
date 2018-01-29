Nectar Web Challenge
====================

Nectar is a platform that uses hardware and software to provide value to customers. There are many components to the platform. We will create a simple user facing front end to display some of the information the platform contains.

## Backend:
- The data is provided by a mock API.
- You need nodejs 8.5+ installed to run the mock API.
- Run `npm install` then `npm run mock-api`.
- The API endpoints will be available at `http://localhost:3000/`

## Frontend:
- We will show a list of products in inventory retrieved from the server.
- The list items should be presented with a few pieces of information about the inventory item.
  - product name
  - product bottle size (sizes are in milliliters)
  - product bottle quantity
- Each product has a physical device that periodically takes a measurement and saves the details of those measurements as a status of that bottle. We need to show some of these device details.
  - bottle percent
  - battery millivolt warn/low thresholds (ok: >=1200, warn: <1200, low: <1100)

## Guidelines:
- Frontend code should be in JavaScript ES5/ES6+
- You can use JS/CSS libraries for logic and layout/styling.
- Include instructions on how to compile/run and/or view your site.
- Document any caveats about the code
- Only location with id "1" has mocked data.

## Extra points:
- Use a frontend framework (especially ones we use at Nectar: React and AngularJS)
- Use LocalStorage or IndexedDB in to cache data.
- Use a build system to compile/transform code (webpack, grunt, gulp, etc.)
- Responsive/mobile layout
- Try and match the styles in the reference screenshot.

### Screenshot
A sample implementation screenshot for inspiration.

![Screenshot](/screenshots/sample_1.png?raw=true "Sample Implementation Screenshot")

Good Luck!
Don't hesitate to contact us if you have any questions.

----

## Endpoint Schema Information

### Locations (`/locations`)
Locations represent a physical location where caps and inventory can be found.

### Inventory (`/inventory`)
The inventory endpoint represents all the items that a bar or establishment contains. Each inventory record is associated to a product. A location could have inventory items without a cap.

### Devices (`/devices`)
Devices are Nectar caps. The records contain their last status and the product they are configured to measure. It is possible to have multiple caps on the same product.
