import { VinylContext } from '../VinylManager.js';
import { PieChart, LineChart } from  'react-native-chart-kit';
import { CategoryContext } from '../CategoryManager.js';
import React, { useContext } from 'react';
import styles from '../styles/StatsScreenStyle.js';
import { View, Text } from 'react-native';

const CategoryChart= () =>{ 
    const {categories} = useContext(CategoryContext);
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2', '#FFA500', '#2ecc71'];
    const pieData = categories
        .filter(c => c.vinylNumber > 0) 
        .map((category, index) => ({
        name: category.genre,
        population: category.vinylNumber,
        color: colors[index % colors.length],
        legendFontColor: '#333',
        legendFontSize: 12,
    }));
    const isEmpty = categories.every(category => category.vinylNumber === 0);

    if (!categories || categories.length === 0 || isEmpty ) {
        return <Text style={styles.testo}>No data available!</Text>;
    }

    return (
        <View style = {{padding: 30, alignItems: 'center'}}>
            <Text style={styles.testo}>CATEGORIES CHART</Text>
            <PieChart
                data= {pieData}
                width={300} 
                height={220}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 2, 
                    color: (opacity = 1) => `rgba(255, 49, 49, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  
                    style: {
                        borderRadius: 16
                    }
                }}
                backgroundColor="transparent"
                accessor="population"
                paddingLeft="15"
                absolute 
            />
        </View>
    );
}

export default CategoryChart;