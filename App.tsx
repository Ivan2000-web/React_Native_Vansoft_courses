import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Input } from './shared/Input/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Vansoft</Text>  
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input placeholder='Пароль'/>
          <Button title="Войти"></Button>
        </View>
          <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55
  },
  content: {
    alignItems: 'center',
    gap: 50
  },
  form: {
    alignSelf: 'stretch',
    gap: 16
  },
});
