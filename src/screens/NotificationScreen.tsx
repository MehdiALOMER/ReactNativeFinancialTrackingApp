import { GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { colors, dWidth } from '@/constants';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
            title: 'Welcome to the app!',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#4A90E2',
        },
        {
            id: '2',
            title: 'New message from John Doe',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#5BA92A',
        },
        {
            id: '3',
            title: 'New message from Jane Doe',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#F5A623',
        },
        {
            id: '4',
            title: 'New message from John Doe',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#D0021B',
        },
        {
            id: '5',
            title: 'New message from Jane Doe',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#9013FE',
        },
        {
            id: '6',
            title: 'New message from John Doe',
            message: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
            time: '18 min ago',
            color: '#4A90E2',
        }
    ];

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaWrapper>
            <AppHeader title="Bildirimler" back onPressBack={onPressBack} />
            <GenericView flex={1} padding={dWidth * 0.025}>
                {notifications.map((notification) => (
                    <GenericTouchableOpacity
                        key={notification.id}
                        style={[styles.notificationItem]}
                        onPress={() => toggleExpand(notification.id)}
                    >
                        <GenericView style={[styles.notificationHeader, { borderLeftColor: notification.color, borderRightColor: notification.color }]}>
                            <GenericView padding={dWidth * 0.02}>
                                <Text style={styles.notificationTitle}>{notification.title}</Text>
                                <Text style={styles.notificationTime}>{notification.time}</Text>
                            </GenericView>
                        </GenericView>
                        {expandedId === notification.id && (
                            <GenericView padding={dWidth * 0.025}>
                                <GenericText color='#666' >{notification.message}</GenericText>
                            </GenericView>
                        )}
                    </GenericTouchableOpacity>
                ))}
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