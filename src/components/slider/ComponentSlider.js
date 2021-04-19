import {FlatListSlider} from 'react-native-flatlist-slider';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image, StyleSheet} from 'react-native';

export default function ComponentSlider(){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('https://cdvlgeda.lucusvirtual.es/api/sliderPost')
    .then((response) => response.json())
    .then((json) => setData(json.sliderPost))
    .then(console.log(setData))

    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{flex: 0.8, padding: 0}}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatListSlider
            data={data}
            imageKey={'photo'}
                timer={5000}
                indicatorContainerStyle={{position: 'absolute', bottom: 20}}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#ffffff'}
                animation
            />
            
        )}
     </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    imageCategory:{
        width: 90,
        height: 90,
    },  
});