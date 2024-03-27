import Router from './src/Router';
import {NativeBaseProvider} from 'native-base';
import {ApolloProvider} from '@apollo/client';
import client from './src/Apollo';
const App = () => {
  // useEffect(() => {
  //   LogBox.ignoreLogs([
  //     'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  //   ]);
  // }, []);
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  );
};

export default App;
