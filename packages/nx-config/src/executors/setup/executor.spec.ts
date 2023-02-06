import { SetupExecutorSchema } from './schema';
import executor from './executor';

const options: SetupExecutorSchema = {
  lintOnSave: true,
};

describe('Setup Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
