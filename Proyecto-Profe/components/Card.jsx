import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Card = () => {

    const handlePress = () => {
        console.log("Apretado");

    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" }}
            />
            <Text style={styles.title}>Bienvenidos</Text>
            <Text style={styles.subTitle}>Contactanos con mucha mas facilidad utilizando esta app</Text>

            <TouchableOpacity style={styles.imgContainer} onPress={handlePress}>
                <Image
                    style={styles.imgPrincipal}
                    source={{ uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" }}
                />
            </TouchableOpacity>

            <Button title="Soy un boton" onPress={handlePress} />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.imgContainer} onPress={handlePress}>
                <Image
                    style={styles.imgPrincipal}
                    source={{ uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" }}
                />
            </TouchableOpacity>



            <TouchableOpacity style={styles.imgContainer} onPress={handlePress}>
                <Image
                    style={styles.imgPrincipal}
                    source={{ uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" }}
                />
            </TouchableOpacity>



            <TouchableOpacity style={styles.imgContainer} onPress={handlePress}>
                <Image
                    style={styles.imgPrincipal}
                    source={{ uri: "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" }}
                />
            </TouchableOpacity>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        flexGrow: 1
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 12,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 12
    },
    logo: {
        width: 150,
        height: 100,
        marginBottom: 20
    },
    imgPrincipal: {
        width: '100%',
        height: '100%',
        borderRadius: 12,

    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imgContainer: {
        backgroundColor: '#eee',
        width: "100%",
        height: 300,
        marginBottom: 30,
    }
})
