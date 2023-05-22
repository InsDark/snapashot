import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getQuote } from '../helpers/quote/getQuote'
import { COLORS } from '../COLORS'

const styles = StyleSheet.create({
    main: {
        width: '95%',
        padding: 10,
        backgroundColor: COLORS.darkBlue,
        flex: 5

    },
    title: {
        color: COLORS.lightGreen,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
const Quote = () => {
    const [quote, setQuote] = useState('')
    useEffect((() => {
        const requestQuote = async () => {
            const quote = await getQuote()
            setQuote(quote.slip.advice)
        }
        requestQuote()
    }), [])
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Today's Quote</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ color: COLORS.white, fontSize: 25, fontWeight: 'bold' }}>{quote}</Text>

            </View>
        </View>
    )
}

export default Quote