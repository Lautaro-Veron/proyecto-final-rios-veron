// components/ApiConsume.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, useColorScheme } from 'react-native';
import NewsCard from './NewsCard';

type Article = {
  title: string;
  publishedAt: string;
  author?: string;
  description?: string;
  urlToImage?: string;
};

const ApiConsume = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Article[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=tesla&from=2025-07-06&sortBy=publishedAt&apiKey=2fc5a629350b4ba4a8422c419a4cb8c8'
      );
      const json = await response.json();
      setData(json.articles || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: useColorScheme() === 'dark' ? '#000' : '#fff',
    },
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={data}
          numColumns={2} // Muestra 2 columnas
          keyExtractor={(item) => item.publishedAt}
          renderItem={({ item }) => (
            <NewsCard
              title={item.title}
              publishedAt={item.publishedAt}
              author={item.author}
              description={item.description}
              urlToImage={item.urlToImage}
            />
          )}
        />
      )}
    </View>
  );
};

export default ApiConsume;