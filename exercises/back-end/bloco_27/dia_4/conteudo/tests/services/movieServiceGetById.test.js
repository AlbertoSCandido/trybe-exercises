const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('Busca um filme por ID', () => {
  describe('Quando o filme não existe', () => {
    before(() => {
      sinon.stub(movieModel, 'getById')
        .resolves([]);
    });

    after(() => {
      movieModel.getById.restore();
    });

    it('retorna um array', async () => {
      const response = await movieService.getById();

      expect(response).to.be.an('array').that.is.empty;
    });

    it('o array está vazio', async () => {
      const response = await movieService.getById();

      expect(response).to.be.empty;
    });
  })

  describe('Quando o filme é encontrado', () => {

    before(() => {
      sinon.stub(movieModel, 'getById')
        .resolves([{
          id: "604cb554311d68f491ba5781",
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999
        }]);
    });

    after(() => {
      movieModel.getById.restore();
    });

    it('retorna um objeto com todas as propriedades', async () => {
      const response = await movieService.getById('604cb554311d68f491ba5781');

      expect(response).to.be.an('object');
      expect(response).to.have.property('id');
      expect(response).to.have.property('title');
      expect(response).to.have.property('directedBy');
      expect(response).to.have.property('releaseYear');
    })
  });
});
