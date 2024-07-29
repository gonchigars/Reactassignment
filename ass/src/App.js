import logo from './logo.svg';
import './App.css';
import VerticalButtons from './ass1.js';
import HorizontalButtons from './ass2.js';
import AppBarWithButton from './ass3.js';
import SidebarWithButton from './ass4.js';
import CenteredButton from './ass5.js';
import ResponsiveGridButtons from './ass6.js';
import CornerButtons from './ass7.js';
function App() {
  return (
    <div className="App">
      <VerticalButtons/>
      <HorizontalButtons/>
      <AppBarWithButton/>
      <SidebarWithButton/>
      <CenteredButton/>
      <ResponsiveGridButtons/>
      <CornerButtons/>
    </div>
  );
}
export default App;