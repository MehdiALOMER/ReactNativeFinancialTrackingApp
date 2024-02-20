import { GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { dWidth } from '@/constants';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface Notification {
    id: string;
    title: string;
    message: string;
    time: string;
    color: string; // Bu renk bildirimin yan çubuğunun rengini belirler
}

const NotificationScreen: React.FC = ({ navigation }: any) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const notifications: Notification[] = [
        {
            id: '1',
            title: 'Ödeme Hatırlatıcısı',
            message: 'Kredi kartı ödemeniz bugün sona eriyor.',
            time: '1 saat önce',
            color: '#4A90E2',
        },
        {
            id: '2',
            title: 'Bütçe Güncellemesi',
            message: 'Bu ayki gıda bütçenizi aştınız.',
            time: '3 saat önce',
            color: '#5BA92A',
        },
        {
            id: '3',
            title: 'Yatırım Fırsatı',
            message: 'Yeni bir yatırım fırsatı mevcut. Detaylar için uygulamayı kontrol edin.',
            time: '1 gün önce',
            color: '#F5A623',
        },
        {
            id: '4',
            title: 'Fatura Hatırlatıcısı',
            message: 'Elektrik faturanızın son ödeme tarihi yaklaşıyor.',
            time: '2 gün önce',
            color: '#D0021B',
        },
        {
            id: '5',
            title: 'Bütçe Hatırlatıcısı',
            message: 'Aylık bütçenizi güncellemeyi unutmayın.',
            time: '3 gün önce',
            color: '#9013FE',
        },
        {
            id: '6',
            title: 'Gelir Bildirimi',
            message: 'Bu ayki geliriniz hesabınıza yatırıldı.',
            time: '4 gün önce',
            color: '#4A90E2',
        },
        {
            id: '7',
            title: 'Vergi Hatırlatıcısı',
            message: 'Vergi ödeme dönemi yaklaşıyor. Lütfen hazırlıklı olun.',
            time: '5 gün önce',
            color: '#5BA92A',
        },
        {
            id: '8',
            title: 'Kredi Hatırlatıcısı',
            message: 'Kredi taksit ödemeniz bu hafta sona eriyor.',
            time: '6 gün önce',
            color: '#F5A623',
        },
        {
            id: '9',
            title: 'Sigorta Hatırlatıcısı',
            message: 'Araç sigortanızın yenilenme tarihi yaklaşıyor.',
            time: '1 hafta önce',
            color: '#D0021B',
        },
        {
            id: '10',
            title: 'Yatırım Hatırlatıcısı',
            message: 'Yatırım portföyünüzü gözden geçirme zamanı.',
            time: '1 hafta önce',
            color: '#9013FE',
        },
        {
            id: '11',
            title: 'Kira Hatırlatıcısı',
            message: 'Bu ayki kira ödemeniz yaklaşıyor.',
            time: '10 gün önce',
            color: '#4A90E2',
        },
        {
            id: '12',
            title: 'Bütçe Uyarısı',
            message: 'Eğlence bütçenizi bu ay aşmış görünüyorsunuz.',
            time: '11 gün önce',
            color: '#5BA92A',
        },
        {
            id: '13',
            title: 'Fatura Uyarısı',
            message: 'Su faturanız ödenmemiş görünüyor.',
            time: '12 gün önce',
            color: '#F5A623',
        },
        {
            id: '14',
            title: 'Gelir Uyarısı',
            message: 'Beklenen bir gelir gecikmiş olabilir. Lütfen kontrol edin.',
            time: '13 gün önce',
            color: '#D0021B',
        },
        {
            id: '15',
            title: 'Yatırım Uyarısı',
            message: 'Bir yatırımınız beklenenden daha düşük performans gösteriyor.',
            time: '14 gün önce',
            color: '#9013FE',
        },
        {
            id: '16',
            title: 'Kredi Kartı Uyarısı',
            message: 'Kredi kartı limitinizin yakınındasınız.',
            time: '15 gün önce',
            color: '#4A90E2',
        },
        {
            id: '17',
            title: 'Bütçe Hatırlatıcısı',
            message: 'Tatil bütçenizi planlamayı unutmayın.',
            time: '16 gün önce',
            color: '#5BA92A',
        },
        {
            id: '18',
            title: 'Fatura Hatırlatıcısı',
            message: 'Telefon faturanızın ödeme tarihi yaklaşıyor.',
            time: '17 gün önce',
            color: '#F5A623',
        },
        {
            id: '19',
            title: 'Yatırım Güncellemesi',
            message: 'Yatırım portföyünüzde önemli bir güncelleme var.',
            time: '18 gün önce',
            color: '#D0021B',
        },
        {
            id: '20',
            title: 'Bütçe Aşımı Uyarısı',
            message: 'Bu ayki alışveriş bütçenizi aştınız.',
            time: '19 gün önce',
            color: '#9013FE',
        }
    ]
        ;

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaWrapper>
            <AppHeader title="Hatırlatıcılar" back onPressBack={onPressBack} />
            <GenericView flex={1} paddingLeft={dWidth * 0.025} paddingRight={dWidth * 0.025} paddingTop={dWidth * 0.025}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {notifications.map((notification) => (
                        <GenericTouchableOpacity
                            key={notification.id}
                            style={[styles.notificationItem]}
                            onPress={() => toggleExpand(notification.id)}
                        >
                            <GenericView style={[styles.notificationHeader, { borderLeftColor: notification.color, borderRightColor: notification.color }]}>
                                <GenericView padding={dWidth * 0.02}>
                                    <GenericText style={styles.notificationTitle}>{notification.title}</GenericText>
                                    <GenericText style={styles.notificationTime}>{notification.time}</GenericText>
                                </GenericView>
                            </GenericView>
                            {expandedId === notification.id && (
                                <GenericView padding={dWidth * 0.025}>
                                    <GenericText color='#666' >{notification.message}</GenericText>
                                </GenericView>
                            )}
                        </GenericTouchableOpacity>
                    ))}
                </ScrollView>
            </GenericView>
        </SafeAreaWrapper>
    );
};

const styles = StyleSheet.create({
    notificationItem: {
        marginBottom: dWidth * 0.025,
        // Tırtıklı kenar stilini ekleyin
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    notificationHeader: {
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    notificationTime: {
        fontSize: 12,
        color: '#666',
    },
});

export default NotificationScreen;