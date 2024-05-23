import { createContext, useContext } from 'react';
import Fake from '../apis/Fake';
import Apis from '../apis/Apis';
import Client from '../apis/Client';

export const ApiContext = createContext();

// const client = new Fake();
const client = new Client();
const youtube = new Apis(client);

export function ApiProvider({ children }) {
	return <ApiContext.Provider value={{ youtube }}>{children}</ApiContext.Provider>;
}

export function useApis() {
	return useContext(ApiContext);
}
