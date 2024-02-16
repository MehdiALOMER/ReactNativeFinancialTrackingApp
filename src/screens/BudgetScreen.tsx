import { GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import AppHeader from '@/components/shared/AppHeader';
import CustomInput from '@/components/shared/CustomInput';
import CustomPicker from '@/components/shared/CustomPicker';
import Icon from '@/components/shared/Icons';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { colors, dWidth } from '@/constants';
import { RootState } from '@/store';
import { addBudget, addExpense } from '@/store/reducers';
import { IBudget, IExpense } from '@/types/dataTypes';
import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';


const BudgetScreen: React.FC = ({ navigation }: any) => {

    const budgetList: IBudget[] = useSelector((state: RootState) => state.budgetReducer.budgetList);
    const expenseList: IExpense[] = useSelector((state: RootState) => state.budgetReducer.expenseList);

    const [selectedBudgetId, setSelectedBudgetId] = useState<string | null>(null);
    const [isBudgetModalVisible, setBudgetModalVisible] = useState(false);
    const [isExpenseModalVisible, setExpenseModalVisible] = useState(false);
    const [newBudget, setNewBudget] = useState({ name: '', totalAmount: '' });
    const [newExpense, setNewExpense] = useState({ budgetId: '', description: '', amount: '' });


    const selectedBudgetExpenses = expenseList.filter(expense => expense.budgetId === selectedBudgetId);

    const selectBudget = (id: string) => {
        setSelectedBudgetId(id);
    };

    const dispatch = useDispatch();

    const handleAddBudget = () => {
        // id'yi rastgele oluştur
        const id = Math.random().toString();
        // Yeni budget objesi oluştur
        const newBudgetObj: IBudget = {
            id,
            name: newBudget.name,
            totalAmount: parseFloat(newBudget.totalAmount),
        };
        dispatch(addBudget(newBudgetObj)); // Redux'a ekle
        setBudgetModalVisible(false); // Modalı kapat
        setNewBudget({ name: '', totalAmount: '' }); // Inputları temizle
    };
    const handleAddExpense = () => {
        // id'yi rastgele oluştur
        const id = Math.random().toString();
        // Yeni expense objesi oluştur
        const newExpenseObj: IExpense = {
            id,
            budgetId: newExpense.budgetId,
            description: newExpense.description,
            amount: parseFloat(newExpense.amount),
        };
        // Redux'a ekle
        dispatch(addExpense(newExpenseObj));
        setExpenseModalVisible(false); // Modalı kapat
        setNewExpense({ budgetId: '', description: '', amount: '' }); // Inputları temizle
    }
    const goDashboard = () => {
        navigation.navigate('NotificationScreen');
    }
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <SafeAreaWrapper>
            <AppHeader title="Bütçe Yönetimi" menu right="space-dashboard" onPressMenu={openDrawer} onRightPress={goDashboard} />
            <GenericView flex={1} padding={dWidth * .025}>
                <GenericView flex={1}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {budgetList.map((budget) => (
                            <GenericTouchableOpacity
                                key={budget.id}
                                onPress={() => selectBudget(budget.id)}
                                backgroundColor={selectedBudgetId === budget.id ? colors.primary : '#f0f0f0'}
                                padding={dWidth * .025}
                                justifyContent='center'
                                marginRight={dWidth * .025}
                                borderRadius={10}
                                width={dWidth * .5}
                                height={dWidth * .25}

                            >
                                <GenericView flexDirection='row'>
                                    <GenericView>
                                        <Icon name="wallet" size={30} color={selectedBudgetId === budget.id ? colors.secondary : colors.primary} />
                                    </GenericView>
                                    <GenericView center marginLeft={dWidth * .01}>
                                        <GenericText fontSize={15} color={selectedBudgetId === budget.id ? colors.secondary : colors.primary}>{budget.name}</GenericText>
                                    </GenericView>
                                </GenericView>
                                <GenericView marginTop={dWidth * .025}>
                                    {/* Bütçe Progress Bar (toplam harcanan / toplam bütçe) */}
                                    <ProgressBar
                                        progress={(budget.totalAmount - expenseList.filter(expense => expense.budgetId === budget.id).reduce((acc, expense) => acc + expense.amount, 0)) / budget.totalAmount}
                                        color={selectedBudgetId === budget.id ? colors.secondary : colors.primary}
                                        style={{ height: 10, borderRadius: 10 }}
                                    />

                                </GenericView>
                                <GenericView marginTop={dWidth * .0125}>
                                    <GenericText fontSize={12} color={selectedBudgetId === budget.id ? colors.secondary : colors.primary}>{expenseList.filter(expense => expense.budgetId === budget.id).reduce((acc, expense) => acc + expense.amount, 0)} $ / {budget.totalAmount} $</GenericText>
                                </GenericView>
                            </GenericTouchableOpacity>
                        ))}
                        {/* Bütçe Ekleme Butonu */}
                        <GenericTouchableOpacity
                            onPress={() => setBudgetModalVisible(true)}
                            center
                            padding={dWidth * .025}
                            backgroundColor={colors.primary}
                            borderRadius={10}
                            width={dWidth * .5}
                            height={dWidth * .25}
                        >
                            <GenericText color={colors.secondary} bold>Bütçe Ekle</GenericText>
                        </GenericTouchableOpacity>
                    </ScrollView>
                </GenericView>
                <GenericView flex={4}>
                    <ScrollView>
                        {selectedBudgetExpenses.map(expense => (
                            <GenericView key={expense.id} padding={dWidth * .025} backgroundColor='#f0f0f0' borderRadius={10} marginBottom={dWidth * .025} flexDirection='row' justifyContent='space-between'>
                                <Icon name="wallet" size={30} color={colors.primary} type='Fontisto' />
                                <GenericView center>
                                    <GenericText bold fontSize={15}>{expense.description}</GenericText>
                                </GenericView>
                                <GenericView center>
                                    <GenericText fontSize={14}>{expense.amount} $</GenericText>
                                </GenericView>
                            </GenericView>
                        ))}
                    </ScrollView>
                </GenericView>

                {selectedBudgetId && (
                    <GenericTouchableOpacity
                        onPress={() => setExpenseModalVisible(true)}
                        center
                        padding={dWidth * .025}
                        width={dWidth * .95}
                        backgroundColor={colors.primary}
                        borderRadius={10}
                        style={{ position: 'absolute', bottom: 10, right: 10 }}
                    >
                        <GenericText color={colors.secondary} bold>Harcama Ekle</GenericText>
                    </GenericTouchableOpacity>
                )}

                {/* Bütçe Ekleme Modalı */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isBudgetModalVisible}
                    onRequestClose={() => {
                        setBudgetModalVisible(!isBudgetModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <GenericView center padding={dWidth * .025}>
                                <GenericText bold fontSize={16}>Bütçe Ekleme</GenericText>
                            </GenericView>
                            <CustomInput
                                label='Bütçe Adı'
                                value={newBudget.name}
                                onChangeText={(value) => setNewBudget({ ...newBudget, name: value })}
                            />
                            <CustomInput
                                label='Toplam Tutar'
                                value={newBudget.totalAmount}
                                onChangeText={(value) => setNewBudget({ ...newBudget, totalAmount: value })}
                                keyboardType='numeric'
                            />
                            <GenericTouchableOpacity
                                onPress={handleAddBudget}
                                center
                                padding={10}
                                backgroundColor={colors.primary}
                                borderRadius={10}
                                marginTop={10}
                            >
                                <GenericText color={colors.secondary} bold>Ekle</GenericText>
                            </GenericTouchableOpacity>

                        </View>
                    </View>
                </Modal>

                {/* Harcama Ekleme Modalı */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isExpenseModalVisible}
                    onRequestClose={() => {
                        setExpenseModalVisible(!isExpenseModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <GenericView center padding={dWidth * .025}>
                                <GenericText bold fontSize={16}>Harcama Ekleme</GenericText>
                            </GenericView>
                            <CustomPicker
                                placeholder={{ label: 'Bütçe Seçiniz', value: '' }}
                                value={newExpense.budgetId}
                                onValueChange={(value) => setNewExpense({ ...newExpense, budgetId: value })}
                                items={budgetList.map(budget => ({ label: budget.name, value: budget.id }))}
                            />
                            <CustomInput
                                label='Açıklama'
                                value={newExpense.description}
                                onChangeText={(value) => setNewExpense({ ...newExpense, description: value })}
                            />
                            <CustomInput
                                label='Tutar'
                                value={newExpense.amount}
                                onChangeText={(value) => setNewExpense({ ...newExpense, amount: value })}
                                keyboardType='numeric'
                            />
                            <GenericTouchableOpacity
                                onPress={handleAddExpense}
                                center
                                padding={10}
                                backgroundColor={colors.primary}
                                borderRadius={10}
                                marginTop={10}
                            >
                                <GenericText color={colors.secondary} bold>Ekle</GenericText>
                            </GenericTouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </GenericView>
        </SafeAreaWrapper>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        /* alignItems: 'center', */
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    selectedBudgetBox: {
        borderColor: 'blue',
        borderWidth: 2,
    },
    budgetText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    budgetAmount: {
        fontSize: 14,
        color: '#333',
    },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
    },
});

export default BudgetScreen;
