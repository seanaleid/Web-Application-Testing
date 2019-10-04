import React from "react";
import {render, fireEvent} from '@testing-library/react';
import Dashboard from "./Dashboard";

test('renders foul button without breaking', () =>{
    render(<Dashboard />);
});

test("Current Batter is found", () => {
    const { getByText } = render(<Dashboard />);
  
    getByText("Current Batter");
  });

  test('foul click works', () =>{
      const click = {button: 1};

      fireEvent(click(getByText('Foul'), click));
  })