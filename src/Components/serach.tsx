import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase({ setSearch, search }: any) {
  return (
    <Paper component="form" sx={{ p: "2px 4px", display: "flex", width: 300 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search organization"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
