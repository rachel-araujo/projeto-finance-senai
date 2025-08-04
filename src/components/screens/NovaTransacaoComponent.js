import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Picker, Text, StyleSheet } from 'react-native';
import api from '../services/api';

export default function NovaTransacaoComponent({ navigation }) {
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('saida');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get('/categorias').then(res => setCategorias(res.data));
  }, []);

  async function salvarTransacao() {
    await api.post('/transacoes', {
      valor,
      categoria,
      tipo,
      data: new Date().toISOString()
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Tipo</Text>
      <Picker selectedValue={tipo} onValueChange={setTipo}>
        <Picker.Item label="Entrada" value="entrada" />
        <Picker.Item label="Saída" value="saida" />
      </Picker>
      <Text>Categoria</Text>
      <Picker selectedValue={categoria} onValueChange={setCategoria}>
        {categorias.map(c => (
          <Picker.Item key={c.id} label={c.nome} value={c.nome} />
        ))}
      </Picker>
      <Text>Valor</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Salvar" onPress={salvarTransacao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12
  }
});
