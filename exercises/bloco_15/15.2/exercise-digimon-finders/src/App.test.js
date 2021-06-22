import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

  afterEach(() => jest.clearAllMocks());

  it('renders App', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('input test', () => {
    const { getByTestId } = render(<App />);
    const inputElem = getByTestId('input');
    expect(inputElem).toHaveValue('');
    fireEvent.change(inputElem, { target: { value: 'Agumon' } });
    expect(inputElem).toHaveValue('Agumon');
  })

  it('btn test', async () => {
    const { getByTestId, findByText } = render(<App />);
    const response = [{
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      level: "Rookie",
      name: "Agumon",
    }];
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(response)
    }));
    const btnSearch = getByTestId('buttonSearch');
    const inputElem = getByTestId('input');
    const search = 'Agumon'
    fireEvent.change(inputElem, { target: { value: search } });
    expect(btnSearch).toBeInTheDocument();
    fireEvent.click(btnSearch);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`https://digimon-api.vercel.app/api/digimon/name/${search}`)
    await screen.findByText('Agumon')
    await findByText('level: Rookie')
  })
});