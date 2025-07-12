import { BarChart } from  'react-native-chart-kit';
import { VinylContext } from '../VinylManager.js';
import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/StatsScreenStyle.js';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CollectionGrowthChart= () =>{ 
    const {vinyls, theOldestAddDate, theNewestAddDate} = useContext(VinylContext);
    const [oldestYear,setOldestYear]= useState(null);
    const [newestYear,setNewestYear]= useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const uploadDates = async () => {
            const oldestDate = await theOldestAddDate();
            const newestDate = await theNewestAddDate();
            if (oldestDate && newestDate) {
                setOldestYear(new Date(oldestDate).getFullYear());
                setNewestYear(new Date(newestDate).getFullYear());
                setDone(true);
            }
        };
        uploadDates();
    }, [vinyls]);

    console.log("Oldest year:", oldestYear, "Newest year:", newestYear);
    const years = [];
    for( let i = oldestYear; i<=newestYear; i++){
        years.push(i);
    }
    const countYears = Array(years.length).fill(0);
    vinyls.forEach(v=>{
        const yearAdded = new Date(v.dateAdded).getFullYear(); 
        const index = yearAdded - oldestYear; 
        if (index >= 0 && index <countYears.length){
            countYears[index]+=1;
        }
    })

    const lineData = {
        labels: years,
        datasets: [
            {
                data: countYears,
                strokeWidth: 2,
            }
        ]
    }


    if (!vinyls || vinyls.length === 0 || !done) {
        return <Text style={styles.text}>No data available!</Text>;
    }

    return (
        <View style = {{padding: 30, alignItems: 'center'}}>
            <View style={styles.row}>
                <Text style={styles.smallheader}>COLLECTION GROWTH</Text>
                <Ionicons name='analytics-outline' size={24} color='#ff3131' />
            </View>
            <BarChart
                data= {lineData}
                width={300} 
                height={300}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 2, 
                    color: (opacity = 1) => `rgba(115, 115, 115, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  
                }}
                style= {styles.charts}
                backgroundColor="transparent"
                paddingLeft="15"
            />
        </View>
    );
}

export default CollectionGrowthChart;