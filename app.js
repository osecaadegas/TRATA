// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <ComoFunciona />
        <Galeria />
        <OfertaMiniCarro />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

// Initialize React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
