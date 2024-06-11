import store from "@/redux/store";
import { GluestackUIProvider} from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { config } from "@gluestack-ui/config"
import theme from "@/style/theme";
import SetingsRightStack from "./SetingsRightStack";


export default function RootLayout() {

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colorDark,
              
            },
            headerRight: () => <SetingsRightStack /> ,
            headerTintColor: theme.colorLight
          }}
        >
          <Stack.Screen name="index" options={{ title: "", headerRight: null, headerLeft: null, headerStyle: {elevation: 0, backgroundColor: theme.colorDark} }} />
          <Stack.Screen name="home/Home" options={{ title: "Início" }} />
          <Stack.Screen name="product/Product" options={{ title: "Produtos" }} />
          <Stack.Screen name="productAdd/ProductAdd" options={{ title: "Registrar produto" }} />
          <Stack.Screen name="customer/Customer" options={{ title: "Clientes" }} />
          <Stack.Screen name="customerAdd/CustomerAdd" options={{ title: "Registrar Cliente" }} />
          <Stack.Screen name="customerDetails/CustomerDetails" options={{ title: "Detalhes do cliente" }} />
          <Stack.Screen name="customerSell/CustomerSell" options={{ title: "Clientes" }} />
          <Stack.Screen name="results/Results" options={{ title: "Resultados" }} />
          <Stack.Screen name="cashFlow/CashFlow" options={{ title: "Financeiro" }} />
        </Stack>
      </GluestackUIProvider>
    </Provider>
  );
}

