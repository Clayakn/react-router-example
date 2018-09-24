# React Router Example 

**This app was created to showcase react-router and its use cases. This app was not meant to be functional but instead was created to show the structure of React-Router**

## Lecture Notes from Michael Jackson, creator of React-Router 

Location: 
Carvana 
> 1930 W Rio Salado Pkwy Tempe, AZ 

Date: 
> Septmber 12, 2018 

Summary: 
Michael Jackson reflected on React-Router and its problems that cannot be reversed and how that will affect the new implementation of React-Router 5 

Overall Notes:
MJ began reflecting more on React-Router after hearing a speech from Ryan Dahl at the JS Conference in Europe in June of 2018 
He believed routes are created to give a site a flow to it 
An example would be at an E-commerce Store, when someone going through the process of purchasing an item and having it be shipped to their address 

**A good route makes an app have a cohesive experience** 

He goes onto presenting some problems/issues he had with React-Router

### Problem 1 
**Clashing of Routes**
```
<Route path="/" component={Home}>
<Route path="/about" component={About}>
```
In this example, if someone went to the About component through /about then both Home & About would be included

Can be solved with exact 
```
<Route exact path="/" component={Home}>
<Route path="/about" component={About}>
```
but this was an oversight 

Another solution is using Switch 
```
<Switch>
  <Route path="/about" component={About}>
  <Route path="/" component={Home}>
</Switch>
```
Switch only allows one path to be rended at a time, / is put last so that if other paths do not match the url given then / will catch all urls given 

### Problem 2 
**Async**
Solution: React Suspense, allows any tree in hierarchy to suspense rendering
Home component wouldn't render until child components resolves 

### Problem 3
**History API**
When creating a route component, entire history object is given, ideally give functions that needed such as push, replace, go from history


## Additional Notes 
3 Different ways to render components through routes 
 1. Component 
 2. Render method (can pass props to component) only render if route matches 
 3. Children props - routes match and doesnt match
