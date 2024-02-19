// RaporlamaEkranı.tsx
import { dWidth } from '@/constants';
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
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

export default FinancialReportScreen;
