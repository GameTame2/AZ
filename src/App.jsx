import { React, Suspense } from "react";
import Website from "./pages/Website.jsx";
import Quiz from "./pages/Quiz.jsx";
import HorizontalScroll from "./pages/HorizontalScroll.jsx";
import ScrollSection from "./components/quiz/ScrollSection.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     id: "root",
//     children: [
//       {
//         index: true,
//         element: <Website />,
//       },
//       {
//         path: "quiz",
//         element: <Quiz />,
//       },
//       {
//         path: "story",
//         element: <HorizontalScroll />,
//       },
//       {
//         path: "scroll",
//         element: <ScrollSection />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       }
//     ],
//   },
// ]);

// function App() {
//   return (
//       <RouterProvider router={router} />
//   );
// }

// export default App;

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Website />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/story",
    element: <HorizontalScroll />,
  },
  {
    path: "/scroll",
    element: <ScrollSection />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
