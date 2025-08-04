import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/dateHelpers';

export default function TransacoesComponent() {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    api.get('/transacoes').then(res => setTransacoes(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transações</Text>
      <FlatList
        data={transacoes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.tipo.toUpperCase()} | {item.categoria} | {formatCurrency(item.valor)} | {formatDate(item.data)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 }
});