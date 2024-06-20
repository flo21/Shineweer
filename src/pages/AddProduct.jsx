import Header from "../components/Header"
import Footer from "../components/footer"
import ProductForm from "../components/Form"
import "./AddProduct.css"

function AddProduct() {
  
    return (
      <div>
        <Header />
        <h1 className="Titre_H1_AddProduct">Ajouter une création</h1>
        <ProductForm />
        <Footer />
      </div>
    )
  }
  
  export default AddProduct
  