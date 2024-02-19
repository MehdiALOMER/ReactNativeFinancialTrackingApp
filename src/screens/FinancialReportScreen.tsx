// RaporlamaEkranı.tsx
import { dWidth } from '@/constants';
import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Statik harcama verileri
const spendingData = [
    { name: 'Yiyecek', amount: 250, color: 'tomato', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Ulaşım', amount: 100, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Eğlence', amount: 150, color: 'gold', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Faturalar', amount: 300, color: 'cyan', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Kira', amount: 400, color: 'lightgreen', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Kıyafet', amount: 200, color: 'lightblue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Sağlık', amount: 100, color: 'violet', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Diğer', amount: 200, color: 'navy', legendFontColor: '#7F7F7F', legendFontSize: 15 },

];

const barChartData = {
    labels: spendingData.map((data) => data.name),
    datasets: [
        {
            data: spendingData.map((data) => data.amount),
        },
    ],
};

const chartConfig = {
    backgroundGradientFrom: '#000',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
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

const FinancialReportScreen = () => {
    return (
        <ScrollView>
            <Text style={{ textAlign: 'center', fontSize: 24, marginVertical: 8 }}>Harcama Raporu</Text>
            {/* <PieChart
                data={spendingData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={'harcama'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                center={[10, 10]}
                absolute
            /> */}
            {/*  <Text style={styles.grafiktitle}>Aylık Gelir ve Giderler</Text>
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
        /> */}
            {/*  <Text style={styles.grafiktitle}>Varlık, Borç ve Bütçe Dağılımı</Text>
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
        /> */}
            <ScrollView horizontal>
                <BarChart
                    data={barChartData}
                    width={dWidth * 1.5}
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    yAxisSuffix={''} // Eksik olan özellik eklendi
                />
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        /* marginHorizontal: 20, */
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardValue: {
        fontSize: 16,
        marginTop: 5,
    },
    notificationTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    notificationCard: {
        backgroundColor: '#ffcccb',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    notificationDescription: {
        fontSize: 16,
    },
    grafiktitle: {
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

export default FinancialReportScreen;
