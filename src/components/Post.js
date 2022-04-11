import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { LikeButton } from './LikeButton'
import { DislikeButton } from './DislikeButton'
import { toogleBooked } from '../store/actions/post'
import { newData } from '../data'



export const Post = ({ post, navigation }) => {
  const postId = post.id 
  const thisPost = newData.find(p => p.id === postId)

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  //  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(toogleBooked(postId))
  // })

  // useEffect(() => {
  //   navigation.setParams({ booked })
  // }, [booked])

  // const toggleHandler = useCallback(() => {
  //   dispatch(toogleBooked(postId))
  // }, [dispatch, postId])

  // useEffect(() => {
  //   navigation.setParams({ toggleHandler })
  // }, [toggleHandler])

  return (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: post.thumbnailUrl }}/>
      <View style={styles.block}>
      <Text style={styles.title} width={150}>
            {post.title} 
      </Text>
      <LikeButton style={styles.button}/>
      <DislikeButton style={styles.button}/>
      </View> 
    </View>
   
  )
}

const styles = StyleSheet.create({
  post: {
    marginTop: 15,
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    paddingTop: 10,
    paddingRight: 10,
    width: 200,
    fontWeight: 'bold',
    
  },

  block: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})
