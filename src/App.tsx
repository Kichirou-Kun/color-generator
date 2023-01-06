import Button from "./ui/Button";
import Container from "./ui/Container";
import Typography from "./ui/Typography";
import React from "react";
import Grid from "./ui/Grid";
import SingleColor from "./SingleColor";
import Values from "values.js";
import ColorBox from "./ColorBox";
import { colors } from "./data";

function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState<any[]>(new Values("#feae96").all(10));

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <main>
      <Container>
        <div className="my-8">
          <form
            onSubmit={submitHandler}
            className="flex flex-row items-center space-x-2 flex-wrap gap-3 md:gap-0 "
          >
            <Typography variant="h3" className="text-DARK_BLUE capitalize">
              Color Generator
            </Typography>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder={"#feae96"}
              className={`outline-none p-3 bg-white shadow rounded ${
                error ? "border border-red-600" : null
              }`}
            />
            <Button className="bg-red-400 hover:bg-opacity-90 transition-all ease-linear duration-150 text-white">
              Submit
            </Button>
          </form>
          <Typography className="capitalize">
            Click Copy To get Color
          </Typography>
        </div>
        <div className="my-10">
          <Typography variant="h3" className="mb-2 text-DARK_BLUE capitalize">
            Awesome Colors
          </Typography>
          <Grid container className="gap-4">
            {colors.map((clr, index) => (
              <Grid
                key={index}
                item
                className="xl:col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6"
              >
                <ColorBox color={clr} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="flex flex-col">
          <Typography variant="h3" className="text-DARK_BLUE capitalize mb-2">
            Result Colors
          </Typography>
          <Grid container className="">
            {list.map((colour, index) => (
              <Grid
                key={index}
                item
                className="xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
              >
                <SingleColor
                  rgb={colour.rgb}
                  hexColor={colour.hex}
                  index={index}
                  weight={colour.weight}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </main>
  );
}

export default App;
