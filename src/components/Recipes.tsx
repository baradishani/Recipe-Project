/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type RecipeProps = PropsWithChildren<{ recipe: Recipe }>

const Recipes = ({ recipe }: RecipeProps) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: recipe.image }}
                        style={styles.image} />
                </View>
                <View>
                    <Text style={styles.name}>
                        {recipe.name}
                    </Text>
                    <View style={styles.metaContainer}>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaText}>Time taken: {recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes </Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaText}>Cuisine: {recipe.cuisine} </Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaText}>Difficulty: {recipe.difficulty} </Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaText}>Calories: {recipe.caloriesPerServing} </Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>{recipe.rating} </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Recipes;

// styles/RecipeBlockStyles.js

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center'
    },
    imageContainer: {
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    metaText: {
        fontSize: 14,
        marginLeft: 5,
        color: '#666',
        opacity: 0.5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#26948b',
        height: 30,
        width: 40,
        borderRadius: 8
    },
    ratingText: {
        fontSize: 14,
        marginLeft: 5,
        color: '#ffffff',
    },
});


