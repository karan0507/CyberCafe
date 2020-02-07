import { MyCustomFilterPipePipe } from './my-custom-filter-pipe.pipe';

describe('MyCustomFilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomFilterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
