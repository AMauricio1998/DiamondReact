import {FlatListSlider} from 'react-native-flatlist-slider';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet} from 'react-native';

export default function ComponentSlider(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('http://127.0.0.1:8000/api/sliderPost')
    .then((response) => response.json())
    .then((json) => setData(json.sliderPost))
    .then(console.log(setData))

    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    }, []);

    const images = [
        {
         image:'https://static2.abc.es/media/summum/2019/02/27/apertura-relojes-materiales-k6qB--620x349@abc.jpg',
         desc: 'Joyas',
        },
       {
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jXf_tFmiI8BVJtzCOxaWdNopUrJAqxPYrw&usqp=CAU',
         desc:
           'Joyas',
       },
       {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXlcOqALcfaBl4Q6Xg0nGXRDeUalnZRboYw&usqp=CAU',
        desc: 'Joyas',
       },
       {
        image:'https://images-na.ssl-images-amazon.com/images/I/61-CTKocZ2L._AC_UY500_.jpg',
        desc: 'Joyas',
       },
       {
        image:'https://www.nupciasmagazine.com/wp-content/uploads/2018/01/AnilloPortada.jpg',
        desc: 'Joyas',
       },
       ]

    return (
        <View style={{flex: 0.8, padding: 0}}>
        {isLoading ? <ActivityIndicator/> : (

            <FlatListSlider
                data={images}

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