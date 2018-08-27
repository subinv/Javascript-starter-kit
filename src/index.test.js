import { expect } from "chai";
import jsdom from "jsdom";
import  fs  from "fs";
import { doesNotReject } from "assert";

describe(`First Test`, () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  })
})

describe(`index.html`,()=>{
  it(`should say hello`,()=>{
    const index = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index, function(err,window){
      const h1 = window.document.querySelector('h1');
      expect(h1.innerHTMl).to.equal('Hello World');
      done();
      window.close();// closing window to free up spaces
    });
  })
})
