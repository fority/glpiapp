import { ServiceTransStatusPipe } from "./service-trans-status.pipe";

describe('WorkOrderStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ServiceTransStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
