import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Card from "./Card";

describe("App", () => {
    it("should render the Card component as direct children", async () => {
        const { container } = render(<App />);
        await waitFor(() => screen.findByText("Saori Kido"));
        expect(container.querySelectorAll("character-card")).toBeTruthy();
    });
});

describe("Card", () => {
    it("should render image with 'src' from the 'imageUrl' and 'alt' from the 'name'", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
                    name: "Ikki",
                    occupation: "Saint",
                    cloth: "Phoenix God Cloth",
                    constellation: "Phoenix",
                }}
            />
        );
        let image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            "src",
            "https://cdn.myanimelist.net/images/characters/6/253759.jpg"
        );
        expect(image).toHaveAttribute("alt", "Ikki");
    });

    it("should render constellation from the 'constellation' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
                    name: "Ikki",
                    occupation: "Saint",
                    cloth: "Phoenix God Cloth",
                    constellation: "Phoenix",
                }}
            />
        );
        expect(screen.getByText("Phoenix")).toBeInTheDocument();
    });

    it("should render name from the 'name' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
                    name: "Ikki",
                    occupation: "Saint",
                    cloth: "Phoenix God Cloth",
                    constellation: "Phoenix",
                }}
            />
        );
        expect(screen.getByText(/Ikki/)).toBeInTheDocument();
    });

    it("should render cloth name from the 'cloth' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
                    name: "Ikki",
                    occupation: "Saint",
                    cloth: "Phoenix God Cloth",
                    constellation: "Phoenix",
                }}
            />
        );
        expect(screen.getByText(/Phoenix God Cloth/)).toBeInTheDocument();
    });

    it("should render occupation from the 'occupation' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
                    name: "Ikki",
                    occupation: "Saint",
                    cloth: "Phoenix God Cloth",
                    constellation: "Phoenix",
                }}
            />
        );
        expect(screen.getByText(/Saint/)).toBeInTheDocument();
    });
});
