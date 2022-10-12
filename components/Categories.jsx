import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl='https://korona.by/uploads/tmp/ra/mm/rAMmJ4gBWa.jpg' title='Testing' />
      <CategoryCard imgUrl='https://korona.by/uploads/tmp/ra/mm/rAMmJ4gBWa.jpg' title='Testing' />
      <CategoryCard imgUrl='https://korona.by/uploads/tmp/ra/mm/rAMmJ4gBWa.jpg' title='Testing' />
      <CategoryCard imgUrl='https://korona.by/uploads/tmp/ra/mm/rAMmJ4gBWa.jpg' title='Testing' />
      <CategoryCard imgUrl='https://korona.by/uploads/tmp/ra/mm/rAMmJ4gBWa.jpg' title='Testing' />
    </ScrollView>
  );
};

export default Categories;
