import React from 'react';
import king from "./../../../images/king.jpg"

const Product = () => {
    return (
        <section id="product">
            <div className="container">
                <div className="product">
                  <div className="product--text">
                      <h1>Product</h1>
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facere magni minus veniam.
                          Atque dolore eveniet modi natus obcaecati recusandae. Accusantium animi, beatae corporis
                          cupiditate dolores eaque ex iste obcaecati placeat porro quas quidem soluta, veritatis. Aliquam
                          animi assumenda dolor fuga fugit inventore, ipsam ipsum nemo quaerat vel, vitae, voluptatem.
                      </p>
                      <div className="btn-group">
                          <button className="btn-one">Right</button>
                          <button className="btn-one">Left</button>
                      </div>
                  </div>
                    <div className="product--img">
                        <img src={king} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;