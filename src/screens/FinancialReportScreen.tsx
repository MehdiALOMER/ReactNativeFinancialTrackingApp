// RaporlamaEkranı.tsx
import { GenericText } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { dWidth } from '@/constants';
import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';


// Statik harcama verileri
const spendingData = [
    { name: 'Yiyecek', population: 250, color: 'tomato', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Ulaşım', population: 100, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Eğlence', population: 150, color: 'gold', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Faturalar', population: 300, color: 'cyan', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Kira', population: 400, color: 'lightgreen', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Kıyafet', population: 200, color: 'lightblue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Sağlık', population: 100, color: 'violet', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Diğer', population: 200, color: 'navy', legendFontColor: '#7F7F7F', legendFontSize: 15 },

];

const barChartData = {
    labels: spendingData.map((data) => data.name),
    datasets: [
        {
            data: spendingData.map((data) => data.population),
        },
    ],
};

const chartConfig = {
    backgroundGradientFrom: '#fff',
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

const FinancialReportScreen: React.FC = ({ navigation }: any) => {

    const goNotification = () => {
        navigation.navigate('NotificationScreen');
    }
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <SafeAreaWrapper>
            <AppHeader title="Raporlar" menu right="notifications" onPressMenu={openDrawer} onRightPress={goNotification} />
            <ScrollView>
                <GenericText style={{ textAlign: 'center', fontSize: 20, marginVertical: 8 }}>Harcama Raporu</GenericText>
                <PieChart
                    data={spendingData}
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
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
                <ScrollView horizontal>
                    <BarChart
                        data={barChartData}
                        width={dWidth * 1.5}
                        height={300}
                        yAxisLabel={'$'}
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                        yAxisSuffix={''} // Eksik olan özellik eklendi
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </ScrollView>
            </ScrollView>
        </SafeAreaWrapper>
    );
};

export default FinancialReportScreen;
