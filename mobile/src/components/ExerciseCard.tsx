import {
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronsRight } from "lucide-react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-no-banco-inclinado-com-halteres.gif",
          }}
          alt="Imagem exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Puxada frontal
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            3 séries x 12 repetiçoes
          </Text>
        </VStack>

        <Icon as={ChevronsRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
