import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";

import "./index.scss";

const rootComponent = document.getElementById("root");

if (!rootComponent) {
	throw new Error("Not have element with id root");
}

createRoot(rootComponent).render(<RouterProvider router={router} />);
