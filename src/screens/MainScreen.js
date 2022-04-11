import React from 'react'
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Post } from '../components/Post'
import { TextInput } from 'react-native-gesture-handler';
import { loadPosts } from '../store/actions/post'
import { createData } from '../data'

export default MainScreen = ( ) => {
  
    const [text, setText] = React.useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const allPosts = useSelector(state => state.post.allPosts)

  searchEmp = (data, text) => {
    if (text.lenght === 0) {
        return data;
    }
    return data.filter(item => {
        return item.title.indexOf(text) > -1
    })
}

  const filteredData = searchEmp(allPosts, text)

  
  
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Поиск фотографии"
        autoCapitalize = 'none'
      />
      <FlatList
        data={filteredData}
        keyExtractor={ post => post.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

})

