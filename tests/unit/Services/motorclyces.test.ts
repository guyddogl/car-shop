import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/motorcycleService';
import { mockMotorcycle, mockMotorcycles, mockUpdateMotorcycle } from './motorcyclesMock';

describe('Testes Motorcycles Services', function () {
  afterEach(function () { sinon.restore(); });

  it('Verifica se é possível adicionar uma moto', async function () {
    const motor: Motorcycle = new Motorcycle({ id: '6348513f34c397abcad040b2', ...mockMotorcycle });

    sinon.stub(Model, 'create').resolves(motor);

    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(mockMotorcycle);

    expect(result).to.be.deep.equal(motor);    
  });

  it('Verifica se retorna todas as motos', async function () {
    const motor: Motorcycle[] = mockMotorcycles.map((e) => new Motorcycle(e));

    sinon.stub(Model, 'find').resolves(mockMotorcycles);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(motor);    
  });

  it('Verifica se encontra a moto pelo ID', async function () {
    const motor: Motorcycle = new Motorcycle({ ...mockMotorcycles[0] });

    sinon.stub(Model, 'find').resolves([mockMotorcycles[0]]);

    const service = new MotorcycleService();
    const result = await service.getMotorcycleByID('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal([motor]);    
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

  it('Verifica se é possível atualizar uma moto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockMotorcycles);

    const id = '63eada69945a9369ec7df41e';

    const service = new MotorcycleService();
    const motor = await service.updateMotorcycle(id, mockUpdateMotorcycle);
    expect(motor).not.to.be.deep.equal(mockMotorcycles);   
  });
});