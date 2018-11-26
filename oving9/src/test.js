// @flow
import {Component} from 'react-simplified';
import ReactDom from 'react-dom';

import {HashRouter, NavLink, Route} from 'react-router-dom';

//impoterer komponenter, hash marke, navLink litt utivda Link

class Menu extends Component {
    render() {
        return (
            < div >
            < NavLink;
        activeStyle = {;
        {
            'darkblue'
        }
    }
        to = "/home" > Home < /NavLink>
            < NavLink;
        activeStyle = {;
        {
            'darkblue'
        }
    }
        to = "/about" > About < /NavLink>
            < /div>;
    )
    }
}

class Home extends Component {
    render() {
        return (
            < div >
            Home
            < /div>;
    )
    }
}

class About extends Component {
    render() {
        return (
            < div >
            About
            < /div>;
    )
    }
}

let root = document.getElementById("root");
if (root) {
    /** Lage eget eleement*/
    ReactDom.render( < HashRouter >
    < div >
    < Menu / >
    < Route;
    path = "/home";
    component = {Home};
    />
    < Route;
    exact;
    path = "/about";
    component = {About};
    />
    < /div>
    < /HashRouter>, root);
}


/*

class Trondheim extends Component{
  render() {
    return (
      <div>
        Trondheim
      </div>
    );
  }
}


//who? who kan være med
class Hello extends Component<{ children: React.Element <typeof Trondheim>}> {
  render() {
    return (
      <div className="card">
        Hello {this.props.children}
      </div>
    );
  }
}
 */

// første { nå kommer kode og andre { nå kommer objekt
/*
class Hello extends Component {
  render() {
    return (
      <div className="card" style={{width: '10rem'}}>
        <div className="card-body">
          <h5 className="card-title"> Hello </h5>
          <p className="card-text">World</p>
        </div>
      </div>
    );
  }
}

/** Bruke map i reactDom */
/*
let whos = ['Trondheim','Bergen'];
ReactDom.render(<div>{whos.map(e => (
  <b> Hello {e} </b>
))}
</div>,root);
}
*/
/** The OG way */
/* set stage ikke lov, status..
let root = document.getElementById("root");
if(root){
  let b = document.createElement('b');
  b.innerText = "Hello World";
  root.appendChild(b);
}
*/