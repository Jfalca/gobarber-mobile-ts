import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const navitageToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navitageToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;