import React, { Fragment } from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Rohan from "./components/Rohan";
import CHeader from "./components/CHeader";
import Channel from "./components/Channel";
import CGlass from "./components/CGlass";
import FunctionClick from "./components/FunctionClick";
import CFuntionClick from "./components/CFuntionClick";
import EventHandling from "./components/EventHandling";
import List from "./components/List";
import Callback from "./components/Callback";
import List2 from "./components/List2";
import State from "./components/State";
import Testing from "./components/Testing";
import Style from "./components/Style";
import Inline from "./components/Inline";
import Appstyle from "./components/Appstyle.css";
import Module from "./components/Module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import Product from "./components/Product";
import PostList from "./components/PostList";
import Hooks from "./components/Hooks";
import UseEffect from "./components/UseEffect";
import HookObject from "./components/HookObject";
import HookArray from "./components/HookArray";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import Useref from "./components/Useref";
import UseReducer from "./components/UseReducer";
import CallbackP from "./components/CallbackP";
import CallbackC from "./components/CallbackC";
import UseMemo from "./components/UseMemo";

//import Routing from './components/Routing1';

// without jsx using
//const newElement = React.createElement('h2',{className : 'newElement'},'hello h2 tag')
class App extends React.Component {
  render() {
    const numbers = [3, 4, 5];
    return (
      <div className="App">
        <h1 className={Style.success}>Geeen</h1>
        <h1 className="error">Error</h1>
        {/*<Header name = "kamaran" last = "khan">
     <p>kamran is a good boy</p>
     </Header>
     <Header name ="ramji" last = "mishra">
     <a href="https://www.google.com">click here</a>
     </Header>
     <Header name = "sanjay" last = "mishra"/>
     <Rohan/>
     <CHeader name  = "aman" last = "kumar"/>
     <CGlass/>
     <Channel/>
     <FunctionClick/>
     <CFuntionClick roll="44"/>
     <EventHandling/>
     <Fragment/>
     <List/>
     <Callback/>
     <List2 roll="22" numbers={numbers}/>
     <State/>
     <Testing/>
    <Style isvalue = {false}></Style>
    <Inline></Inline>
    <Form></Form>
    <Routing></Routing>
    <LifeCycleA></LifeCycleA>
    <Product></Product>
    <PostList></PostList>
    <Hooks></Hooks>*/}
        <UseEffect></UseEffect>
        {/*<HookObject></HookObject>
        <HookArray></HookArray>
        // useContext component use A,B,C
        <A></A>
        <B></B>
        <C></C>
        <Useref></Useref>
        <UseReducer />
        <CallbackP></CallbackP>
        <CallbackC></CallbackC>
        <UseMemo></UseMemo> */}
      </div>
    );
  }
}

export default App;
