import "./Product_Component.css"

function Product_Component () {


    return <div className="Product_Container">
            <img src="../../public/1.png" alt="1" className="image_product"/>
            <div className="information_product">
                <div className="creation_product">
                    <h1>KIMBOU</h1>
                    <p>By Maison Kabia</p>
                </div>
                <div className="price_product">
                    <p>450 €</p>
                </div>
                
            </div>
            <div className="creator">  
            </div>
            <div className="description_product">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo malesuada tortor id hendrerit. Vivamus sit amet velit eu nisl blandit interdum non a mauris. Vestibulum pretium feugiat elit, fermentum sollicitudin dui dignissim pellentesque. Mauris nisl justo, laoreet in massa a, fermentum dictum lectus. Nullam ornare enim arcu, sed consequat lorem tempor a. In non lacus rutrum, laoreet dui vitae, accumsan turpis. Integer auctor mi purus, sit amet malesuada enim ullamcorper vitae. Nam efficitur velit vitae suscipit fringilla. Suspendisse id pretium nulla. Fusce nec nisl fermentum, rutrum lectus non, laoreet diam. Nunc urna ex, vehicula semper quam ut, rhoncus suscipit risus. Vestibulum molestie euismod posuere.</p>
            </div>
        </div>
}

export default Product_Component;