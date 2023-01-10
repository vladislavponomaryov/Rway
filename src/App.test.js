import { render, screen } from '@testing-library/react';
import SamuraiJSApp from "./App";
import {unmountComponentAtNode} from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SamuraiJSApp/>, div);
  unmountComponentAtNode(div);
});

test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
