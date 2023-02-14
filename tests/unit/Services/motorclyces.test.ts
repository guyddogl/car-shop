import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/motorcycleService';
import { mockMotorcycle, mockMotorcycles } from './motorcyclesMock';

describe('Testes Cars Services', function () {
  afterEach(function () { sinon.restore(); });

  it('Verifica se é possível adicionar uma moto', async function () {
    const car: Motorcycle = new Motorcycle({ id: '6348513f34c397abcad040b2', ...mockMotorcycle });

    sinon.stub(Model, 'create').resolves(car);

    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(mockMotorcycle);

    expect(result).to.be.deep.equal(car);    
  });

  it('Verifica se retorna todas as motos', async function () {
    const car: Motorcycle[] = mockMotorcycles.map((e) => new Motorcycle(e));

    sinon.stub(Model, 'find').resolves(mockMotorcycles);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(car);    
  });

  it('Verifica se encontra a moto pelo ID', async function () {
    const car: Motorcycle = new Motorcycle({ ...mockMotorcycles[0] });

    sinon.stub(Model, 'find').resolves([mockMotorcycles[0]]);

    const service = new MotorcycleService();
    const result = await service.getMotorcycleByID('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal([car]);    
  });

  it('Retorna erro caso o ID não seja encontrado', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new MotorcycleService();
      await service.getMotorcycleByID('12345');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });
});