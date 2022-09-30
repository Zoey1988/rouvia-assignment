import { formatDate } from '.';

const inputOne = '2022-09-16T06:21:24Z';

test('formatDate is working', () => {
  const result = formatDate(inputOne);

  expect(result).toBe('5 Sep 2022');
});
