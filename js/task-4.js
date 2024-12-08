function getShippingCost(country) {
  const price = {
    China: 100,
    Chile: 250,
    Australia: 170,
    Jamaica: 120,
  };

  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${price[country]} credits`;

    case 'Chile':
      return `Shipping to ${country} will cost ${price[country]} credits`;

    case 'Australia':
      return `Shipping to ${country} will cost ${price[country]} credits`;

    case 'Jamaica':
      return `Shipping to ${country} will cost ${price[country]} credits`;

    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
