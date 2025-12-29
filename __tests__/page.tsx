
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('basic test', () => {
  it('adds numbers', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('multiply numbers test', () => {
  it('multiplies numbers', () => {
    expect(2 * 3).toBe(8);
  });
});