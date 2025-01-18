import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ArticleManager = ({ baseUrl, itemsPerPage = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [order, setOrder] = useState(null);

    const url = new URL(baseUrl);
    url.searchParams.append("page", currentPage);
    url.searchParams.append("limit", itemsPerPage);

    if (searchQuery) {
        url.searchParams.append("search", searchQuery);
    }
    if (category !== "all") {
        url.searchParams.append("category", category);
    }
    if (order) {
        url.searchParams.append("sortBy", "likes");
        url.searchParams.append("order", order);
    }

    const { data: rawData, error, isValidating } = useSWR(url.toString(), fetcher);
    const articles = Array.isArray(rawData) ? rawData : [];
    const isLoading = isValidating && !rawData && !error;

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