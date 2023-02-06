import { SetupExecutorSchema } from './schema';

export default async function runExecutor(options: SetupExecutorSchema) {
  // eslint-disable-next-line no-console
  console.log('Executor ran for XIP nx-config setup', options);

  return {
    success: true,
  };
}
