import React from 'react';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { GenericText, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import { dWidth } from '@/constants';
import { LineChart, PieChart } from 'react-native-chart-kit';


const HomeScreen: React.FC = ({ navigation }: any) => {


  interface ExpenseItem {
    name: string;
    amount: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
  }

  const data: ExpenseItem[] = [
    {
      name: 'Workout',
      amount: 1000,
      color: '#228B22',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Transportation',
      amount: 500,
      color: '#4169E1',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Education',
      amount: 200,
      color: '#DB7093',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  const goDashboard = () => {
    navigation.navigate('DashboardScreen');
  }
  const openDrawer = () => {
    navigation.openDrawer();
  }

  return (
    <SafeAreaWrapper>
      <AppHeader title="Chart" menu right="space-dashboard" onPressMenu={openDrawer} onRightPress={goDashboard} />
      <GenericView padding={dWidth * .0125} flex={1} marginBottom={dWidth * .15}>
        <PieChart
          data={data.map((item) => ({
            name: item.name,
            population: item.amount,
            color: item.color,
            legendFontColor: item.legendFontColor,
            legendFontSize: item.legendFontSize,
          }))}
          width={dWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[10, 10]}
          absolute
        />
      </GenericView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen; 