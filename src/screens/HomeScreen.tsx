import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { dWidth } from '@/constants';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import translateImage from '@/assets/images/translate.png';
import technicalSupportImage from '@/assets/images/technical-support.png';
import guideBookImage from '@/assets/images/guide-book.png';
import optionsImage from '@/assets/images/options.png';

interface FinancialStatus {
  totalAssets: number;
  debts: number;
  budget: number;
}

const HomeScreen: React.FC = ({ navigation }: any) => {
  const financialStatus: FinancialStatus = {
    totalAssets: 50000,
    debts: 15000,
    budget: 35000,
  };

  const cardList = [
    {
      id: 1,
      title: 'Dil Seçimi',
      image: translateImage,
      textColor: "#1c74e8",
      backgroundColor: "rgba(28, 116, 232, 0.2)",
      onPress: () => { }
    },
    {
      id: 2,
      title: 'Destek Ekranı',
      image: technicalSupportImage,
      textColor: "#27f19d",
      backgroundColor: "rgba(39, 241, 157, 0.2)",
      onPress: () => { }
    },
    {
      id: 3,
      title: 'Kullanıcı Klavuzu',
      image: guideBookImage,
      textColor: "#be53ff",
      backgroundColor: "rgba(190, 83, 255, 0.2)",
      onPress: () => { }
    },
    {
      id: 4,
      title: 'Seçenekler',
      image: optionsImage,
      textColor: "#e7aa40",
      backgroundColor: "rgba(231, 170, 64, 0.2)",
      onPress: () => { }
    },
  ];
  const goDashboard = () => {
    navigation.navigate('NotificationScreen');
  }
  const openDrawer = () => {
    navigation.openDrawer();
  }
  return (
    <SafeAreaWrapper>
      <AppHeader title="Anasayfa" menu right="space-dashboard" onPressMenu={openDrawer} onRightPress={goDashboard} />
      <GenericView flex={1} paddingLeft={dWidth * .025} paddingRight={dWidth * .025}>
        <ScrollView>
          <GenericView marginTop={dWidth * .025}>
            <GenericView>
              <GenericText fontSize={15} bold>Hızlı Erişim</GenericText>
            </GenericView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: dWidth * .025 }}>
              {cardList.map((item, index) => (
                <GenericTouchableOpacity
                  key={index}
                  onPress={() => {
                  }}
                  flex={1}
                  backgroundColor={item.backgroundColor}
                  marginRight={dWidth * .05}
                  height={dWidth * .25}
                  width={dWidth * .4}
                  borderRadius={20}
                >
                  <GenericView flex={1} flexDirection="column">
                    <GenericView flex={4} center>
                      <GenericImage
                        source={item.image}
                        height={dWidth * .15}
                        width={dWidth * .15}
                        resizeMode="contain"
                      />
                    </GenericView>
                    <GenericView flex={2} center>
                      <GenericText fontSize={15} bold textAlign="center" color={item.textColor}>{item.title}</GenericText>
                    </GenericView>
                  </GenericView>
                </GenericTouchableOpacity>
              ))}
            </ScrollView>
          </GenericView>
          <GenericView marginTop={dWidth * .05}>
            <GenericView style={styles.card}>
              <GenericText style={styles.cardTitle}>Toplam Varlık</GenericText>
              <GenericText style={styles.cardValue}>${financialStatus.totalAssets}</GenericText>
            </GenericView>
            <GenericView style={styles.card}>
              <GenericText style={styles.cardTitle}>Borçlar</GenericText>
              <GenericText style={styles.cardValue}>${financialStatus.debts}</GenericText>
            </GenericView>
            <GenericView style={styles.card}>
              <GenericText style={styles.cardTitle}>Bütçe</GenericText>
              <GenericText style={styles.cardValue}>${financialStatus.budget}</GenericText>
            </GenericView>
          </GenericView>
          <GenericView marginTop={dWidth * .05}>
            <GenericText style={styles.notificationTitle}>Hatırlatıcılar</GenericText>
            <GenericView style={styles.notificationCard}>
              <GenericText style={styles.notificationDescription}>Elektrik faturası ödeme tarihi yaklaşıyor!</GenericText>
            </GenericView>
          </GenericView>
        </ScrollView>
      </GenericView>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;
