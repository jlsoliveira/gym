import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

import { ExerciseCard } from "@components/ExerciseCard";
import { FlatList } from "react-native";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("");
  const [groups, setGroups] = useState(["Costa", "Biceps", "Ombro", "Pernas"]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Puxada frontal 2",
    "Remada curvada 2",
    "Remada unilateral 2",
    "Puxada frontal 3",
    "Remada curvada 4",
    "Remada unilateral 5",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md">
            Exercicios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
