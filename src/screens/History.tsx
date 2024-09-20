import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { SectionList } from "react-native";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "22.09.24",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "23.09.24",
      data: ["Puxada frontal"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="History" />
      <HistoryCard title="Costas" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 37 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não há exercícios registrados ainda. {"\n"}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
