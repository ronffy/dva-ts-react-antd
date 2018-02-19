

import '../src/utils/tools/test/queryString.test'
import * as chai from 'chai'

const { expect } = chai;

function add(before, after) {
  return before + after
}

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
});