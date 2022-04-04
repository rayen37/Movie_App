import {Container,Navbar,Nav,NavDropdown,Offcanvas,Form,FormControl} from 'react-bootstrap'
import Rating from './Rating';
import AddMovie from './AddMovie';

const NavBar=({films,setfilms,setName,ratingSearch,setRatingSearch})=>{

  const addfilm = (newMovie) =>{ 
  
    return setfilms([...films,newMovie])
  }

return(
<Navbar  expand={false}>
  <container>
<Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setName(e.target.value)}
          />
        </Form><Rating setRate={setRatingSearch} rate={ratingSearch}/>
        </container>
 
 <AddMovie addfilm={addfilm}/>
  
 
</Navbar>
)};
export default NavBar;