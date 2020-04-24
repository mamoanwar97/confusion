import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

  const Menu = ({dishes, onClick}) => {

    return (
        <div className="container">
            <div className="row">
                {
                  dishes.map((dish) => {
                      return (
                        <div  className="col-12 col-md-5 m-1">
                        <Card key={dish.id}
                                  onClick={() => onClick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                          </Card>
                        </div>
                      );
                  })
                }
            </div>
        </div>
    );
  }


export default Menu;
