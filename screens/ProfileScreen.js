import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { ProfileContext } from '../ProfileContext';

const ProfileScreen = ({ navigation }) => {
  const { profile } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
        <Avatar.Image 
         size={100} 
          source={require('../Profile.jpeg')} 
          style={styles.avatar} 
          />

          <Title>{profile.name}</Title>
          <Paragraph>{profile.job}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            style={styles.button} 
            onPress={() => navigation.navigate('EditProfile')}
          >
            Edit Profile
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  card: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
