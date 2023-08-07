
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Account from './account';

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1}}>
      <Account/>
    </View>
  );
};

export default AccountScreen;
