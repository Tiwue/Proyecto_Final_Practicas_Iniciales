import {createPool} from 'promise-mysql';

import keys from './keys';

export async function connect(){
    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        password:'1234',
        database:'db'
    })
    return connection;
}
