import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ArticleManager = ({ baseUrl, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [order, setOrder] = useState(null);

  const url = new URL(baseUrl);
  url.searchParams.append('page', currentPage);
  url.searchParams.append('limit', itemsPerPage);

  if (searchQuery) {
    url.searchParams.append('search', searchQuery);
  }
  if (category !== 'all') {
    url.searchParams.append('category', category);
  }
  if (order) {
    url.searchParams.append('sortBy', 'likes');
    url.searchParams.append('order', order);
  }

  const {
    data: rawData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['articles', currentPage, searchQuery, category, order],
    queryFn: () => fetcher(url.toString()),
    keepPreviousData: true,
  });

  const articles = rawData ? rawData : [];

  return {
    articles,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    order,
    setOrder,
  };
};

export default ArticleManager;
