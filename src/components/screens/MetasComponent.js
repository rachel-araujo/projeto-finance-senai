import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api';

export default function MetasComponent( {navigation }) {
  const [metas, setMetas] = useState([]);
  const [valorLimite, setValorLimite] = useState('');
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get('/metas').then(res => setMetas(res.data));
    api.get('/categorias').then(res => setCategorias(res.data));
  }, []);

  async function salvarMeta() {
    await api.post('/metas', {
      valorLimite: Number(valorLimite),
      categoria,
      mes: '2025-08'
    });
    const res = await api.get('/metas');
    setMetas(res.data);
  }

  return (
    <View style={styles.container}>
      <Text>Categoria</Text>
      <Picker selectedValue={categoria} onValueChange={setCategoria}>
        {categorias.map(c => (
          <Picker.Item key={c.id} label={c.nome} value={c.nome} />
        ))}
      </Picker>
      <Text>Valor limite</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valorLimite}
        onChangeText={setValorLimite}
      />
      <Button title="Salvar Meta" onPress={salvarMeta} />

      <Text style={styles.title}>Metas Registradas</Text>
      <FlatList
        data={metas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.categoria.toUpperCase()} - R$ {item.valorLimite}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 12
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold'
  }
});