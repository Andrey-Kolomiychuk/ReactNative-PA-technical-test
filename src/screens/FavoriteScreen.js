import React from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'

import { Post } from '../components/Post'

export default FavoriteScreen = () => {
  
const bookedPosts = useSelector(state => state.post.bookedPosts)
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={bookedPosts}
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