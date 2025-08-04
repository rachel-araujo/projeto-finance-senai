import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';
import { formatCurrency } from '../utils/formatCurrency';

export default function DashboardComponent() {
  const [transacoes, setTransacoes] = useState([]);
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resTransacoes = await api.get('/transacoes');
      const resMetas = await api.get('/metas');
      setTransacoes(resTransacoes.data);
      setMetas(resMetas.data);
    }
    fetchData();
  }, []);

  const entradas = transacoes
    .filter(t => t.tipo === 'entrada')
    .reduce((acc, t) => acc + Number(t.valor), 0);

  const saidas = transacoes
    .filter(t => t.tipo === 'saida')
    .reduce((acc, t) => acc + Number(t.valor), 0);

  const saldo = entradas - saidas;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>Entradas: {formatCurrency(entradas)}</Text>
      <Text>Saídas: {formatCurrency(saidas)}</Text>
      <Text>Saldo: {formatCurrency(saldo)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 }
});
