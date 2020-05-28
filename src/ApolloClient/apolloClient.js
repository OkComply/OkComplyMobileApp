
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import store from "../../src/redux/store/index"


const state  = store.getState()


const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://demo.okcomply.com/graphql',
		headers: {
		  authorization: state.users.accesstoken, // on production you need to store token
		  //in storage or in redux persist, for demonstration purposes we do this like that
		},
	  }),
	cache: new InMemoryCache(),
});



export default client