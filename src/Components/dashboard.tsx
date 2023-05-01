import Cards from "./cards";
import SearchComponent from "./serach";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    icon: "a",
    title: "Organization Name 1",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },

  {
    id: 2,
    icon: "b",
    title: "Organization Name 2",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
  {
    id: 3,
    icon: "c",
    title: "Organization Name 3",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
  {
    id: 4,
    icon: "d",
    title: "Organization Name 4",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },

  {
    id: 5,
    icon: "e",
    title: "Organization Name 5",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
  {
    id: 6,
    icon: "f",
    title: "Organization Name 6",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
  {
    id: 7,
    icon: "g",
    title: "Organization Name 7",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
  {
    id: 8,
    icon: "h",
    title: "Organization Name 8",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },

  {
    id: 9,
    icon: "i",
    title: "Organization Name 9",
    subtitle: "Licenses",
    tracking: [{ inUse: 1245, assigned: 1200 }],
    protection: [{ inUse: 300, assigned: 850 }],
  },
];

function DashboardComponent() {
  const [count, setCount] = useState(0);
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCount(data.length);
  }, [data]);

  const listOrganization = data.filter((item) =>
    item.title.includes(searchField)
  );

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
        alignItems="baseline"
        sx={{
          pb: 1,
        }}
      >
        <h2>{`All Organization (${count})`}</h2>
        <SearchComponent search={searchField} setSearch={setSearchField} />
        {searchField &&
          listOrganization.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}

        <Button
          variant="contained"
          onClick={() => {
            navigate("/addCard");
          }}
        >
          Add New Organization
        </Button>
      </Stack>
      <Divider variant="middle" />
      <Cards data={data} />
    </div>
  );
}

export default DashboardComponent;
