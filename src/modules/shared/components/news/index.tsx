import { Container } from "../Container";
import { NewsList } from "./NewsList";

export const NewsSection = () => {
  return (
    <Container className="pt-3 py-0 px-1!">
      <NewsList />
    </Container>
  );
};
