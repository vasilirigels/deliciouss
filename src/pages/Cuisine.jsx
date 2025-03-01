import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]); // Ensure cuisine is always an array
    let params = useParams();

    const getCuisine = async (name) => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&cuisine=${name}`);
            const recipes = await data.json();
            setCuisine(recipes.results || []); // Guard against undefined results
        } catch (error) {
            console.error("Error fetching cuisine:", error);
            setCuisine([]); // Ensure cuisine is set to an empty array on error
        }
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {cuisine.map((item) => (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt={item.title} /> {/* Provide alt text */}
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    );
};

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;
