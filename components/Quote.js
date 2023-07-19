import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getQuote } from '../helpers/quote/getQuote'
import { COLORS } from '../COLORS'

const styles = StyleSheet.create({
    main: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        display: 'flex',
        gap: 10,
        flexDirection: 'column'

    },
    title: {
        color: COLORS.white,
        fontSize: 22,
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
            <Text style={styles.title}>GET INSPIRED</Text>
            <Text style={{ color: COLORS.gray, fontSize: 18,  textAlign: 'center' }}>{quote}</Text>
        </View>
    )
}

export default Quote