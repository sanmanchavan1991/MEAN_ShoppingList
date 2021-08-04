import React, {Component, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from "react-redux"; 
import {getItems,deleteItem} from "../actions/itemActions"; 
import {PropTypes} from "prop-types"; 
import itemReducer from '../reducers/itemReducer';

class ShoppingList  extends Component{
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick=(id)=>{
        this.props.deleteItem(id)
    }
    
    render()
    {
        console.log(this.props.items)
        const {items}=this.props.items;
        console.log(items)
       return( <div>
                 <Container>
                  {/* <Button
                  color="dark"
                  style={{marginBottom:'2rem'}}
                  onClick={()=>{
                    const name =prompt('Enter Name')
                    if(name)
                    {
                        this.setState(state=>({
                            items:[...state.items,{id:uuid(),name:name}]
                        }))
                    }

                  }}
                  >
                      Add Item
                  </Button> */}
                  <ListGroup>
                      <TransitionGroup className="shopping-list">
                        {items.map(({_id,name})=>(
                                                               

                            <CSSTransition key={_id} timeout={500}classNames="fade">
                                <ListGroupItem>
                                   
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this,_id)}
                                >
                        &times;
                  </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                      </TransitionGroup>
                  </ListGroup>
                </Container>
        </div>
       )
    }
}
ShoppingList.propTypes={
    getItems:PropTypes.func.isRequired,
    item:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({

    items:state.item
})
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);

