import React from 'react';

import './_features.scss';

const NewsListing = props => (
  <div>
    {
      props.data.map((item, i) => {
        console.log(item)
        if (i % 2 === 0) {
          return (
            <section className="features whitebackground" id="features">
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <div className="content">
                      <h1 className="display-4">{item.title}</h1>
                      <br/>
                      <p className="features-list">
                        {item.description}
                      </p>
                      <p>
                        {item.android && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.android}><h4>PlayStore</h4></a></div> }
                        {item.ios && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.ios}><h4>AppStore</h4></a></div> }
                        {item.web && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.web}><h4>Website</h4></a></div> }
                        {item.repository && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.repository}><h4>GitHub</h4></a></div> }
                      </p>
                    </div>
                  </div>
                  <div className="col-7">
                    <a href={item.imageLink}>
                      <img style={{ maxWidth: "100%", height: "auto" }} src={item.image} className="img-fluid float-right rounded" alt="Responsive image" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )
        } else {
          return (
            <section className="features whitebackground" id="features">
              <div className="container">
                <div className="row">
                  <div className="col-7">
                    <a href={item.imageLink}>
                      <img style={{ maxWidth: "100%", height: "auto" }} src={item.image} className="img-fluid float-left rounded" alt="Responsive image" />
                    </a>
                  </div>
                  <div className="col-5">
                    <div className="content">
                      <h1 className="display-4">{item.title}</h1>
                      <br/>
                      <p className="features-list">
                        {item.description}
                      </p>
                      <p>
                        {item.android && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.android}><h4>PlayStore</h4></a></div> }
                        {item.ios && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.ios}><h4>AppStore</h4></a></div> }
                        {item.web && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.web}><h4>Website</h4></a></div> }
                        {item.repository && <div style={{ float: 'left', paddingRight: '15px' }}><a href={item.repository}><h4>GitHub</h4></a></div> }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      })
    }
  </div>
);

export default NewsListing;
