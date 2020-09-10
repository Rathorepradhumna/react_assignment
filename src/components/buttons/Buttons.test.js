import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
const buttons  = require('./Buttons');
describe('test for buttons',()=>{
    it('buttons is defined or not' , ()=>{
        expect(bottons).toBeDefined();
    })
})