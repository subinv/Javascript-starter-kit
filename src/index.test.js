import { expect } from "chai";
import { JSDOM } from "jsdom";
import fs from "fs";

describe(`First Test`, () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  })
})

describe(`index.html`, () => {
  it(`should should have h1 thats says users`, (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // jsdom.env(index, function (err, window) {
    //   const h1 = window.document.querySelector('h1');
    //   expect(h1.innerHTMl).to.equal('Hello World');
    //   done();
    //   window.close(); // closing window to free up spaces
    // });
    var dom = new JSDOM(index);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Users');
    done();//For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    dom.window.close();
  })
})
