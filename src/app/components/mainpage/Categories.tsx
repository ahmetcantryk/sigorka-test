const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__container container">
        <div className="row">
          <div className="col-md-4">
            <a href="/aracim" className="categories__item" target="_self">
              <img 
                className="categories__item-img img-fluid" 
                src="/images/aracim.png"
                srcSet="/images/aracim@2x.png 2x" 
                alt="Aracım" 
              />
              <div className="categories__item-content">
                <h3 className="categories__item-title">Aracım</h3>
                <p className="categories__item-desc">
                  Maddi ve fiziki hasarlara karşı önlem alın.
                </p>
              </div>
              <span className="categories__item-link">
                <span className="icon-arrow-right"></span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/sagligim" className="categories__item" target="_self">
              <img 
                className="categories__item-img img-fluid" 
                src="/images/sagligim.png"
                srcSet="/images/sagligim@2x.png 2x" 
                alt="Sağlığım" 
              />
              <div className="categories__item-content">
                <h3 className="categories__item-title">Sağlığım</h3>
                <p className="categories__item-desc">
                  Sağlığınızı korumak için zor günlerinizi güvenceye alın.
                </p>
              </div>
              <span className="categories__item-link">
                <span className="icon-arrow-right"></span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/yuvam" target="_self" className="categories__item">
              <img 
                className="categories__item-img img-fluid" 
                src="/images/yuvam.png"
                srcSet="/images/yuvam@2x.png 2x" 
                alt="Yuvam" 
              />
              <div className="categories__item-content">
                <h3 className="categories__item-title">Yuvam</h3>
                <p className="categories__item-desc">
                  Katılım Konut Sigortalarımız ile yuvanızı koruma altına alın.
                </p>
              </div>
              <span className="categories__item-link">
                <span className="icon-arrow-right"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories; 