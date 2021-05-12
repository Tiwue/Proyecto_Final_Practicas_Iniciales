import {createPool} from 'promise-mysql';

import keys from './keys';

export async function connect(){
    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        password:'',
        database:'db'
    })
    return connection;
}
