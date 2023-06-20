import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import eshTheme from "./esh-theme";
import { PathParams, RestContext, RestRequest, rest } from "msw";
import { setupServer } from "msw/node";

const fakeUserResponse = [
  { id: "1", localizedData: { en: { title: "announcing eshX" } } },
];
const server = setupServer(
  rest.get("/posts.json", (req: RestRequest<never, PathParams<string>>, res, ctx:RestContext) => {
    return res(ctx.json(fakeUserResponse));
  })
);

beforeAll(() => server.listen());
jest.setTimeout(10000);

test("clicking on tabs swaps shown content", async () => {
  render(
    <ThemeProvider theme={eshTheme}>
      <App />
    </ThemeProvider>
  );
  const tab = await waitFor(() => {
    return screen.getByText(/Blog/i);
  });
  fireEvent.click(tab!);

  await waitFor(() => {
    const content = screen.getByText(/announcing eshX/i);
    expect(content).toBeInTheDocument();
  });
}, 10000);
