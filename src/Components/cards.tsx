import Stack from "@mui/material/Stack";
import CardComponent from "./card";

function Cards({ data }: any) {
  return (
    <Stack
      flex={1}
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      margin={2}
      justifyContent="flex-start"
      useFlexGap
      flexWrap="wrap"
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
    >
      {data?.map((item: any) => {
        return <CardComponent item={item} />;
      })}
    </Stack>
  );
}

export default Cards;
