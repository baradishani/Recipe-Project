/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import Recipes from '../components/Recipes';
import Separator from '../components/Separator';
import { recipes } from '../data/constants.json';
import { SafeAreaView } from 'react-native-safe-area-context';

type HomeProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProp) => {
    return (

        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
                        <Recipes recipe={item} />
                    </Pressable>
                )} // Removed the extra closing parenthesis here
            />
        </View >

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',

        padding: 12,
        backgroundColor: '#FFFFFF',
    },
});

export default Home;
