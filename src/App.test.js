import { render, screen } from '@testing-library/react';
import WebApp from "./App";
import {unmountComponentAtNode} from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<WebApp/>, div);
  unmountComponentAtNode(div);
});

test('renders learn react link', () => {
  render(<WebApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
