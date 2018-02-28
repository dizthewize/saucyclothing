const shirts = [
  {
    id: 1,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 25,
    image: 'img/lakertee.jpg'
  },
  {
    id: 2,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 30,
    image: 'img/london.png'
  },
  {
    id: 3,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 35,
    image: 'img/samplbaseball.jpg'
  },
  {
    id: 4,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 50,
    image: 'img/samplbraves.jpg'
  },
  {
    id: 5,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 25,
    image: 'img/samplebravesbomber.jpg'
  },
  {
    id: 6,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 25,
    image: 'img/samplevarsity.jpg'
  },
  {
    id: 7,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 35,
    image: 'img/samplhornetspullover.jpg'
  },
  {
    id: 8,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 30,
    image: 'img/nycbomber.png'
  },
  {
    id: 9,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 50,
    image: 'img/samplnyc.png'
  },
  {
    id: 10,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 50,
    image: 'img/samplnyc.png'
  },
  {
    id: 11,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 50,
    image: 'img/samplnyc.png'
  },
  {
    id: 12,
    name: 'Polo t-shirt',
    description: 'Hello',
    size: ['sm','md','lg','xl'],
    price: 50,
    image: 'img/samplnyc.png'
  }
]

const fetchShirts = () => {
  return fakeRequest(shirts);
}

const fetchShirt = id => {
  const shirt = shirts.find(shirt => shirt.id === parseInt(id, 10));
  return fakeRequest(shirt);
};

const addToCart = id => {
  const shirt = shirts.find(shirt => shirt.id === parseInt(id, 10));
  return fakeRequest(shirt);
};

// Returns a promise for data that resolves after a random timeout (0 to 500 ms).
function fakeRequest(data) {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(data);
    }, (Math.random() * 100));
  })
};


export default { fetchShirt,  fetchShirts, addToCart };