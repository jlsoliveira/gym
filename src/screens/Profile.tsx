import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Center, Heading, Text, VStack, useToast } from '@gluestack-ui/themed';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { ToastMessage } from '@components/ToastMessage';
import { UserPhoto } from '@components/UserPhoto';
import { useState } from 'react';

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/jlsoliveira.png'
  );

  const toast = useToast();

  async function heandleUserPhotoSelet() {
    try {
      // Solicita permissão de acesso à galeria
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert('Precisamos de permissão para acessar sua galeria!');
        return;
      }

      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoURI = photoSelected.assets[0].uri;
      if (photoURI) {
        const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            placement: 'top',
            render: ({ id }) => (
              <ToastMessage
                id={id}
                title="Essa imagem é muito grande. Escolha uma de até 5MB"
                action="error"
                onClose={() => toast.close(id)}
              />
            ),
          });
        }
        setUserPhoto(photoURI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 36,
        }}
      >
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{
              uri: userPhoto,
            }}
            alt="Foto do usuário"
            size="xl"
          />
          <TouchableOpacity onPress={heandleUserPhotoSelet}>
            <Text color="$green500" fontFamily="$heading" mt="$2" mb="$8">
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input value="hanna@gmail.com" bg="$gray600" isReadOnly />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            Alterar senha
          </Heading>

          <Center w="$full" gap="$4">
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input value="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              value="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />

            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
