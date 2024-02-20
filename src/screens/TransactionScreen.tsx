import { GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import CustomInput from '@/components/shared/CustomInput';
import CustomPicker from '@/components/shared/CustomPicker';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { colors, dWidth } from '@/constants';
import { RootState } from '@/store';
import { addTransaction } from '@/store/reducers';
import { ITransaction } from '@/types/dataTypes';
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { FAB, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';


interface TabDataItem {
    key: string;
    title: string;
}

const data: TabDataItem[] = [
    { key: '1', title: 'Gelir' },
    { key: '2', title: 'Gider' },
];

const Tab = ({ title, onPress, active }: { title: string, onPress: () => void, active: boolean }) => {
    return (
        <TouchableOpacity style={[styles.tab]} onPress={onPress}>
            <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
        </TouchableOpacity>
    );
};

const TransactionScreen: React.FC = ({ navigation }: any) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const flatListRef = useRef<FlatList<TabDataItem>>(null);

    const transactions: ITransaction[] = useSelector((state: RootState) => state.transactionReducer.transactionList);

    const filteredTransactions = transactions.filter((t) => t.type === activeIndex);



    /* const onSelectTab = (index: number) => {
        setActiveIndex(index);
        // FlatList'i ilgili sekmenin index'ine kaydır
        flatListRef.current?.scrollToIndex({ animated: true, index: index });
    }; */
    const renderTab = ({ item, index }: { item: any, index: number }) => (
        <TouchableOpacity
            style={[styles.tab]}
            onPress={() => onSelectTab(index)}
        >
            <Text style={activeIndex === index ? styles.activeTabText : styles.tabText}>{item.title}</Text>
        </TouchableOpacity>
    );
    const renderContent = ({ item, index }: { item: any, index: number }) => (
        <ScrollView style={[{ width: dWidth, padding: dWidth * 0.025 }]}>
            {filteredTransactions.map((item, index) => (
                <View key={index} style={styles.transactionItem}>
                    <Text style={styles.amount}>
                        {item.type === 0 ? '+' : '-'}
                        ${item.amount}
                    </Text>
                    <View>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
    const goNotification = () => {
        navigation.navigate('NotificationScreen');
    }
    const openDrawer = () => {
        navigation.openDrawer();
    }

    // Sekme altı çizgi animasyonu için değer
    const translateX = useRef(new Animated.Value(0)).current;

    const onSelectTab = (index: number) => {
        setActiveIndex(index);
        const tabWidth = dWidth / data.length;
        Animated.spring(translateX, {
            toValue: index === 0 ? -dWidth * 0.045 : dWidth * 0.43,
            useNativeDriver: true,
        }).start();
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [newTransaction, setNewTransaction] = useState({
        id: '',
        amount: '',
        category: '',
        date: '',
        type: ''
    });
    const dispatch = useDispatch();
    // Modal içindeki formu gönderme fonksiyonu
    const handleAddTransaction = () => {
        // id'yi rastgele oluştur
        const id = Math.random().toString();
        // Yeni transaction objesi
        const newTransactionObj = {
            id,
            amount: newTransaction.amount,
            category: newTransaction.category,
            date: newTransaction.date,
            type: activeIndex,
        };
        dispatch(addTransaction(newTransactionObj)); // addTransaction, Redux action'ınız
        setModalVisible(false); // Modal'ı kapat
        setNewTransaction({ id: '', amount: '', category: '', date: '', type: '' }); // Formu sıfırla
    };
    return (
        <SafeAreaWrapper>
            <AppHeader title="Hareketler" menu right="notifications" onPressMenu={openDrawer} onRightPress={goNotification} />
            <GenericView flex={1}>
                <View style={styles.tabContainer}>
                    {data.map((item, index) => (
                        <Tab
                            key={item.key}
                            title={item.title}
                            active={activeIndex === index}
                            onPress={() => onSelectTab(index)}
                        />
                    ))}
                    <Animated.View
                        style={[
                            styles.slider,
                            {
                                transform: [{ translateX }],
                            },
                        ]}
                    />
                </View>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={renderContent}
                    keyExtractor={(item) => item.key}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => {
                        const index = Math.round(e.nativeEvent.contentOffset.x / dWidth);
                        onSelectTab(index);
                    }}
                />
            </GenericView>
            {/* Fab */}
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                    backgroundColor: colors.primary,
                }}
                icon="plus"
                color={colors.secondary} // FAB icon color
                onPress={() => setModalVisible(true)}
            />
            {/* Fab */}
            {/* Modal */}
            <Modal
                visible={modalVisible}
                onDismiss={() => setModalVisible(false)}
                contentContainerStyle={{
                    backgroundColor: '#fff',
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                }}
            >
                <GenericView center padding={dWidth * .025}>
                    <GenericText bold fontSize={16}>Hareket Ekle</GenericText>
                </GenericView>
                <CustomInput
                    label="Amount"
                    value={newTransaction.amount}
                    onChangeText={(text) => setNewTransaction({ ...newTransaction, amount: text })}
                />
                <CustomInput
                    label="Category"
                    value={newTransaction.category}
                    onChangeText={(text) => setNewTransaction({ ...newTransaction, category: text })}
                />
                <CustomInput
                    label="Date"
                    value={newTransaction.date}
                    onChangeText={(text) => setNewTransaction({ ...newTransaction, date: text })}
                />
                <GenericView marginTop={dWidth * .02}>
                    <CustomPicker
                        placeholder={{ label: 'Select a type', value: '' }}
                        value={newTransaction.type}
                        onValueChange={(itemValue) => setNewTransaction({ ...newTransaction, type: itemValue })}
                        items={[
                            { label: 'Gelir', value: '0' },
                            { label: 'Gider', value: '1' },
                        ]}
                    />
                </GenericView>
                <GenericTouchableOpacity
                    onPress={handleAddTransaction}
                    center
                    padding={10}
                    backgroundColor={colors.primary}
                    borderRadius={10}
                    marginTop={10}
                >
                    <GenericText color={colors.secondary} bold>Ekle</GenericText>
                </GenericTouchableOpacity>

            </Modal>
            {/* Modal */}
        </SafeAreaWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    tabContainer: {
        flexGrow: 0, // FlatList'in yüksekliğini içeriğine göre ayarlar
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#f5f5f5',
        margin: dWidth * 0.025,
        justifyContent: 'space-around',
    },
    tab: {
        padding: dWidth * 0.035,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary
    },
    activeTabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary
    },
    transactionItem: {
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: dWidth * 0.025,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 16,
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
    slider: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.2)',
        bottom: 3,
        height: 40,
        width: 100,
        borderRadius: 25,
        /* opacity: 0.5, */

    },
});

export default TransactionScreen;
