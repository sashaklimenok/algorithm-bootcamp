import { findNOD } from './evklid';

describe('findNOD', () => {
  it('should be 12', () => {
    expect(findNOD(36, 48)).toBe(12);
  });
});
