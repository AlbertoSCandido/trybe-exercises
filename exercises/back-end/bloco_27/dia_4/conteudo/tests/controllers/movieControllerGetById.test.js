const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');
const { request, response } = require('express');

describe('Ao chamar o controller de getById', () => {
  describe('quando o filme não existe no banco de dados', async () => {
    const request = {};
    const response = {};
    before(async () => {
      request.params = {};    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves([]);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });
    
    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(404)).to.be.equal(true);
      
    });
    
    it('é chamado o método "json" passando uma messagem "Filme não encontrado"', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith({ message: 'Filme não encontrado' })).to.be.equal(true);
    });
  });

  describe('quando o filme existe no banco de dados', () => {
    const request = {};
    const response = {};
    const movies = [
      {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
    ];
    
    before(() => {
      request.body = {};
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getAll').resolves(movies);
    });
    
    after(() => {
      MoviesServices.getAll.restore();
    });
    
    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    
    it('é chamado o método "json" passando uma array', async () => {
      await MoviesController.getAll(request, response);
      
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
    
    it('é chamado o método "json" com a lista de filmes', async () => {
      await MoviesController.getAll(request, response);
      
      expect(response.json.calledWith(movies)).to.be.equal(true);
    });
  });
})