import React from 'react'

const DisplayItems = () => {
    useEffect(() => {
        console.log("this worked");
        axios("https://dummyjson.com/products")
          .then((response) => {
            console.log(response.data);
            setProducts(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);
  return (
    <>
    <Navbar/>
      <div className='product-container'>
        {products.map((product) => (
          <div><h2 key={product.id}>{product.title}</h2>
          <img src={product.images[0]} alt=""/>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DisplayItems" element={<DisplayItems />} />
        <Route path="/button" element={<Button />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  )
}

export default DisplayItems
