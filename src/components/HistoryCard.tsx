import { HStack, Heading, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  title?: string;
};

export function HistoryCard({ title }: Props) {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
          numberOfLines={1}
        >
          Costas
        </Heading>

        <Text color="$gray100" fontSize="$xl" numberOfLines={1}>
          Remada puxada
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$md">
        8:56
      </Text>
    </HStack>
  );
}
