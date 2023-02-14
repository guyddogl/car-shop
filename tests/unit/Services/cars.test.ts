import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/carService';
import { mockCars, mockCar, mockUpdateCar } from './carsMock';

describe('Testes Cars Services', function () {
  afterEach(function () { sinon.restore(); });

  it('Verifica se é possível adicionar um carro', async function () {
    const car: Car = new Car({ id: '6348513f34c397abcad040b2', ...mockCar });

    sinon.stub(Model, 'create').resolves(car);

    const service = new CarsService();
    const result = await service.createNewCar(mockCar);

    expect(result).to.be.deep.equal(car);    
  });

  it('Verifica se retorna todos os carros', async function () {
    const car: Car[] = mockCars.map((e) => new Car(e));

    sinon.stub(Model, 'find').resolves(mockCars);

    const service = new CarsService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(car);    
  });

  it('Verifica se encontra o carro pelo ID', async function () {
    const car: Car = new Car({ ...mockCars[0] });

    sinon.stub(Model, 'find').resolves([mockCars[0]]);

    const service = new CarsService();
    const result = await service.getCarByID('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal([car]);    
  });

  it('Retorna erro caso o ID não seja encontrado', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new CarsService();
      await service.getCarByID('12345');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Verifica se é possível atualizar um carro', async function () {
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findById').resolves(mockCar);

    const id = '63eada69945a9369ec7df41e';

    const service = new CarsService();
    const car = await service.updateCar(id, mockUpdateCar);
    expect(car).to.be.deep.equal(mockCar);   
  });
});