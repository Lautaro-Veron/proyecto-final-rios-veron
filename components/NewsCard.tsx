// components/NewsCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NewsCardProps {
  title: string;
  publishedAt: string;
  author?: string;
  description?: string;
  urlToImage?: string;
}

const NewsCard = ({ title, publishedAt, author, description, urlToImage }: NewsCardProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <View style={styles.card}>
      {/* Imagen */}
      {urlToImage ? (
        <Image source={{ uri: urlToImage }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Autor (si está disponible) */}
      {author && <Text style={styles.author}>Por: {author}</Text>}

      {/* Fecha */}
      <Text style={styles.date}>{formattedDate}</Text>

      {/* Resumen del contenido (si está disponible) */}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    margin: 8, // Espaciado entre tarjetas
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxWidth: '48%', // Asegura que haya espacio para 2 columnas
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
});

export default NewsCard;