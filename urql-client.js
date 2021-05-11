import { createClient } from 'urql';

const client = createClient({
  url: 'https://countries.trevorblades.com',
});

export { client };
