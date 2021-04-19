import React from "react";
import { ImageBackground, Text, View ,TouchableOpacity} from "react-native";
import { useStylesCardList } from "../hooks/estilos";


export const CardNoticia = ({ post,categoria ,navigation, route}) =>{
    const { stylesCardImg } =    useStylesCardList()
    const imageUrlDefault={uri:'https://www.vroomkart.com/sites/vroomkart.com/files/default_images/placeholder-640x480.png'}
     return(
    
        <View style={stylesCardImg.container}> 
            
            <ImageBackground source={ post.featuredImage ?  { uri:post.featuredImage.sourceUrl }  :  imageUrlDefault } style={stylesCardImg.image}>
            
                <TouchableOpacity  style={stylesCardImg.textContainer}>
                    <Text style={stylesCardImg.textCategoria} >{ post.categories ? 'Base De Datos' : categoria }</Text>
                    <Text style={stylesCardImg.textTitulo} numberOfLines={2} ellipsizeMode={'tail'}>{post.title.replace( /&#8220;|&#8221;/g ,'"')}</Text>
                    
                </TouchableOpacity>
                
            </ImageBackground>
        </View>
    );
} 