/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type RecipeProp = NativeStackScreenProps<RootStackParamList, 'RecipeDetails'>

const RecipeDetails = ({ route }: RecipeProp) => {
    const { recipe } = route.params
    return (
        <ScrollView style={RecipePageStyles.container}>
            <View style={RecipePageStyles.headerContainer}>
                <Text style={RecipePageStyles.name}>{recipe.name}</Text>
                <Image source={{ uri: recipe.image }} style={RecipePageStyles.image} />
            </View>

            <View style={RecipePageStyles.metaContainer}>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Prep Time: {recipe.prepTimeMinutes} mins</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Cook Time: {recipe.cookTimeMinutes} mins</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Servings: {recipe.servings}</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Difficulty: {recipe.difficulty}</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Cuisine: {recipe.cuisine}</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Calories Per Serving: {recipe.caloriesPerServing}</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Rating: {recipe.rating} ({recipe.reviewCount} reviews)</Text>
                </View>
                <View style={RecipePageStyles.metaItem}>
                    <Text style={RecipePageStyles.metaText}>Meal Type: {recipe.mealType.join(', ')}</Text>
                </View>
            </View>

            <View>
                <Text style={RecipePageStyles.sectionTitle}>Ingredients</Text>
                {recipe.ingredients.map((ingredient, index) => (
                    <Text key={index} style={RecipePageStyles.sectionContent}>{ingredient}</Text>
                ))}
            </View>

            <View style={RecipePageStyles.instructionsContainer}>
                <Text style={RecipePageStyles.sectionTitle}>Instructions</Text>
                {recipe.instructions.map((instruction, index) => (
                    <View key={index} style={RecipePageStyles.instructionItem}>
                        <Text style={RecipePageStyles.instructionNumber}>{index + 1}.</Text>
                        <Text style={RecipePageStyles.instructionText}>{instruction}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default RecipeDetails;

const RecipePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    metaContainer: {
        marginBottom: 20,
    },
    metaItem: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    sectionContent: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
    },
    instructionsContainer: {
        marginBottom: 20,
    },
    instructionItem: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    instructionNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
        color: '#333',
    },
    instructionText: {
        flex: 1,
        fontSize: 16,
        color: '#666',
    },
});