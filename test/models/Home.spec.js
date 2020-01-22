'use strict'

import { HomeModel } from '../../api/models/Home'

describe('Home Module Testing', () => {
  test('Get Server Version', async() => {
    const expectedResult = {
      name: 'node-api-es7-starter',
      version: '1.0.0',
      description: '',
    }
    let result = await HomeModel.getVersion();
    expect(result).toMatchObject(expectedResult);
  })
})
