import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";

export default function MaterialUiDemo() {
  let handleClick = () => {
    console.log("button was Clicked");
  };
  return (
    <div>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} color="success">
        Click me!
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick}
        color="error"
        size="medium"
      >
        Click me2!
      </Button>

      <Button variant="outlined" endIcon={<SendIcon />} onClick={handleClick}>
        Delete
      </Button>

      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <Alert severity="error">Delete option is given</Alert>
    </div>
  );
}
