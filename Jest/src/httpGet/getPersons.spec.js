import * as HttpGet from './httpGet';
import getPersons from './getPersons';

describe('Get persons tests.', () => {
  const persons = [];

  test('Should get 1 person', async () => {
    jest.spyOn(HttpGet, 'default').mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            name: 'ludwig',
            id: 1,
          },
        });
      });
    });
    const result = await getPersons(1000, 1);

    expect(result).toEqual({
      name: 'ludwig',
      id: 1,
    });
  });

  test('Should get multiple person', async () => {
    persons[0] = {
      name: 'ludwig',
      id: 1,
    };

    persons[1] = {
      name: 'Allison Vdb',
      id: 2,
    };
    const mockedHttpGet = jest.spyOn(HttpGet, 'default');
    mockedHttpGet.mockResolvedValueOnce({ data: persons[0] });
    mockedHttpGet.mockResolvedValueOnce({ data: persons[1] });
    const result = await getPersons(30, 1, 2);

    expect(result).toEqual(persons);
  });
});
