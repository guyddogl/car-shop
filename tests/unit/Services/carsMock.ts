import ICars from '../../../src/Interfaces/ICar';

export const mockCars: ICars[] = [
  {
    id: '63eada69945a9369ec7df41e',
    model: 'Fusion',
    year: 2017,
    color: 'White',
    status: true,
    buyValue: 99.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63ead9db945a9369ec7df416',
    model: 'Magentis',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const mockCar: ICars = {
  id: '63eada69945a9369ec7df41e',
  model: 'Fusion',
  year: 2017,
  color: 'White',
  buyValue: 99.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const mockUpdateCar = {
  id: '63eada69945a9369ec7df41e',
  model: 'Fusion',
  year: 2017,
  color: 'White',
  buyValue: 99.99,
  doorsQty: 4,
  seatsQty: 5,
};
