// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import Home from './pages/Home';
// import SingleRecipe from './pages/SingleRecipe';

// // Add a simple Tags page:
// function Tags() {
//   return (
//     <main className="page">
//       <h2>Tags Page</h2>
//       <p>This is a placeholder for the tags page.</p>
//     </main>
//   );
// }

// import './styles/global.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* All pages that use the common layout */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="recipes/:id" element={<SingleRecipe />} />
//           {/* Add this line for tags */}
//           <Route path="tags/:tag" element={<Tags />} />
//         </Route>
//         {/* Catch-all route for 404 page */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import SingleRecipe from './pages/SingleRecipe';
import TagsPage from './pages/TagsPage'; // ✅ Import the real TagsPage

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages that use the common layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recipes/:id" element={<SingleRecipe />} />
          <Route path="tags/:tag" element={<TagsPage />} /> {/* ✅ Real tag route */}
        </Route>

        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

