import { LineChart } from  'react-native-chart-kit';
import { VinylContext } from '../VinylManager.js';
import React, { useContext } from 'react';
import styles from '../styles/StatsScreenStyle.js';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FrequencyChart= () =>{ 
    const {vinyls} = useContext(VinylContext);
    const today = new Date(Date.now());
    const thisWeek = new Date();
    thisWeek.setDate(today.getDate() - 6);
    const countDays = Array(7).fill(0)

    vinyls.forEach(v =>{
        const dateAdded = new Date(v.dateAdded);
        if (dateAdded >= thisWeek) {
            const day = (dateAdded.getDay() + 6) % 7; 
            countDays[day] += 1;
        }
    })

    const lineData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: countDays,
                strokeWidth: 2,
            }
        ]
    }

    const isEmpty = vinyls.every(v => v.dateAdded < thisWeek.toISOString().split('T')[0]);

    if (!vinyls || vinyls.length === 0 || isEmpty ) {
        return <Text style={styles.text}>No data available!</Text>;
    }

    return (
        <View style = {{padding: 30, alignItems: 'center'}}>
            <View style={styles.row}>
                <Text style={styles.smallheader}>ADDING FREQUENCY</Text>
                <Ionicons name='person-add-outline' size={24} color='#ff3131' />
            </View>
            <LineChart
                data= {lineData}
                width={300} 
                height={300}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 2, 
                    color: (opacity = 1) => `rgba(255, 49, 49, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  
                }}
                style= {styles.charts}
                backgroundColor="transparent"
                paddingLeft="15"
                bezier
            />
        </View>
    );
}

export default FrequencyChart;