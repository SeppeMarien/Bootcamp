/* eslint-disable jest/no-disabled-tests */
import request from 'request';
import httpGet from './mockin';

describe.skip('Mocking tests', () => {
  let bodyJson;
  let res;
  let mock;
  beforeEach(() => {
    bodyJson = {
      id: 1,
      name: 'Seppe',
    };
    res = {
      body: JSON.stringify(bodyJson),
      statusCode: 200,
    };

    mock = jest.spyOn(request, 'get').mockImplementation((url, cb) => cb(null, res));
  });

  test('Should mock the request function.', async () => {
    // arrange

    // act
    const response = await httpGet('https://swapi.co/api/people/1');

    // assert
    expect(mock).toHaveBeenCalled();
    expect(response.data).toEqual(bodyJson);
  });

  test('Should throw error with request', async () => {
    // arrange
    mock = jest.spyOn(request, 'get').mockImplementation((url, cb) => cb(new Error('Error occurd'), res));

    // act & assert
    await expect(httpGet('https://swapi.co/api/people/1')).rejects.toThrow(/Error/);

    // assert
  });

  test('Should throw error with wrong status code', async () => {
    // arrange
    res.statusCode = 404;

    // act & assert
    await expect(httpGet('https://swapi.co/api/people/1')).rejects.toThrow(/Status code/);
  });
});
