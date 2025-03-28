import {formatCurrency} from "../../scripts/utils/money.js";

describe('test suites: fromatCurrency', () =>{
  it('converts cents into dollers', ()=> {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', ()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('round up to nearest cent',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('round upto nearest cent',()=>{
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });

  it('test with negative numbers', ()=>{
    expect(formatCurrency(-777)).toEqual('-7.77');
  });
});