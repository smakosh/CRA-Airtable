import React from "react";
import { Link } from "@reach/router";
import useFetchScenes from "hooks/useFetchScenes";
import Container from "components/common/Container";
import Card from "components/common/Card";
import CardSkeleton from "components/common/Loaders/CardSkeleton";
import { Wrapper, Flex, CardScene } from "./styles";

export default () => {
  const [loading, data, errors] = useFetchScenes();

  if (errors) {
    console.log(errors);
    return <p>Something went wrong</p>;
  }

  return (
    <Wrapper as={Container}>
      <h2>Scenes</h2>
      <Flex>
        {loading ? (
          <>
            <CardScene>
              <CardSkeleton />
            </CardScene>
            <CardScene>
              <CardSkeleton />
            </CardScene>
            <CardScene>
              <CardSkeleton />
            </CardScene>
            <CardScene>
              <CardSkeleton />
            </CardScene>
          </>
        ) : (
          data.map(({ id, fields: { Name, Location, Attachments } }) => (
            <CardScene key={id}>
              <Link to={`/scene/${id}`}>
                <Card
                  title={Name}
                  description={Location}
                  image={
                    Attachments[0].thumbnails
                      ? Attachments[0].thumbnails.large.url
                      : "https://via.placeholder.com/500x500"
                  }
                />
              </Link>
            </CardScene>
          ))
        )}
      </Flex>
    </Wrapper>
  );
};
