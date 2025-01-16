import { useState, useEffect, useCallback } from "react";

const ArticleManager = ({ baseUrl, itemsPerPage = 10 }) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [order, setOrder] = useState(null);

    const loadAttributes = useCallback((page = 1, searchQuery = "", category = "all", order = null) => {
        setIsLoading(true);
        const url = new URL(baseUrl);
        url.searchParams.append("page", page);
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

        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setArticles(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
                setIsLoading(false);
            });
    }, [baseUrl, itemsPerPage]);

    useEffect(() => {
        loadAttributes(currentPage, searchQuery, category, order);
    }, [currentPage, searchQuery, category, order, loadAttributes]);

    return {
        articles,
        isLoading,
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