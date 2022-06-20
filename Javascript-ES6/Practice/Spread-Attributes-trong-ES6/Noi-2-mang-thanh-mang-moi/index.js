let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);
const billing = { billingContact: '0987654321', billingAddress: 'street no 123, xyz city' };
const shipping = { shippingContact: '123456789', shippingAddress: 'street no 999, abc city' };
const custInfo = {...billing, ...shipping };
console.log(custInfo);