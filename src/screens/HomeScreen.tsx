import AppHeader from '@/components/shared/AppHeader';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

interface FinansalDurum {
  toplamVarlik: number;
  borclar: number;
  butce: number;
}

const HomeScreen: React.FC = ({ navigation }: any) => {
  const finansalDurum: FinansalDurum = {
    toplamVarlik: 50000,
    borclar: 15000,
    butce: 35000,
  };
  const barData = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        data: [5000, 8000, 7500, 10000, 9000],
      },
    ],
  };

  const pieData = [
    { name: 'Varlıklar', population: 50000, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Borçlar', population: 15000, color: '#F44336', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Bütçe', population: 35000, color: '#2196F3', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ];
  const goDashboard = () => {
    navigation.navigate('NotificationScreen');
  }
  const openDrawer = () => {
    navigation.openDrawer();
  }
  return (
    <SafeAreaWrapper>
      <AppHeader title="Chart" menu right="space-dashboard" onPressMenu={openDrawer} onRightPress={goDashboard} />
      <ScrollView style={styles.container}>
        <Text style={styles.grafikBaslik}>Aylık Gelir ve Giderler</Text>
        <BarChart
          data={barData}
          width={350}
          height={220}
          yAxisLabel="₺"
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.grafik}
        />
        <Text style={styles.grafikBaslik}>Varlık, Borç ve Bütçe Dağılımı</Text>
        <PieChart
          data={pieData}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.grafik}
        />
        <View style={styles.kart}>
          <Text style={styles.kartBaslik}>Toplam Varlık</Text>
          <Text style={styles.kartDeger}>${finansalDurum.toplamVarlik}</Text>
        </View>
        <View style={styles.kart}>
          <Text style={styles.kartBaslik}>Borçlar</Text>
          <Text style={styles.kartDeger}>${finansalDurum.borclar}</Text>
        </View>
        <View style={styles.kart}>
          <Text style={styles.kartBaslik}>Bütçe</Text>
          <Text style={styles.kartDeger}>${finansalDurum.butce}</Text>
        </View>
        <TouchableOpacity style={styles.buton}>
          <Text style={styles.butonYazi}>Yeni Harcama Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton}>
          <Text style={styles.butonYazi}>Bütçe Raporu</Text>
        </TouchableOpacity>
        <Text style={styles.bildirimBaslik}>Bildirimler</Text>
        <View style={styles.bildirimKart}>
          <Text style={styles.bildirimMetin}>Elektrik faturası ödeme tarihi yaklaşıyor!</Text>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  kart: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  kartBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  kartDeger: {
    fontSize: 16,
    marginTop: 5,
  },
  buton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  butonYazi: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bildirimBaslik: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  bildirimKart: {
    backgroundColor: '#ffcccb',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bildirimMetin: {
    fontSize: 16,
  },
  grafikBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  grafik: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
});

export default HomeScreen;
