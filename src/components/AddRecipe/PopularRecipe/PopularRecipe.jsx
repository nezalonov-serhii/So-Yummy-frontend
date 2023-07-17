import { useDispatch } from "react-redux";
// import recipes from "../../../recipes.json";
import { Title } from "../AddRecipe.styled";
import {
  Container,
  Image,
  Item,
  LinkId,
  List,
  Paragraph,
  SecondaryTitle,
  Text,
  TextWrapper,
} from "./PopularRecipe.styled";
import { fetchRecipePopular } from "../../../redux/thunk/addRecipe/operations";
import { useEffect, useState } from "react";
export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchRecipePopular());
        const responseData = response.payload.data;
        setRecipes(responseData);
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Title>Popular recipe</Title>
      {recipes.length < 1 ? (
        <Paragraph>There are no popular recipes at the moment.</Paragraph>
      ) : (
        <List>
          {recipes
            .slice(
              0,
              window.innerWidth >= 768 && window.innerWidth <= 1279 ? 2 : 4
            )
            .map(({ _id, preview, title, description }) => {
              const name =
                title.length < 23 ? title : title.slice(0, 18) + "...";
              const paragraph =
                description.length < 100
                  ? description
                  : description.slice(0, 80) + "...";
              const recipeId = _id;
              return (
                <Item key={_id}>
                  <LinkId to={`/recipe/:${recipeId}`}>
                    <Image src={preview} />
                    <TextWrapper>
                      <SecondaryTitle>{name}</SecondaryTitle>
                      <Text>{paragraph}</Text>
                    </TextWrapper>
                  </LinkId>
                </Item>
              );
            })}
        </List>
      )}
    </Container>
  );
};
